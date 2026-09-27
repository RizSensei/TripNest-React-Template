# TripNest backend API requirements

This document describes the backend contract needed to replace the prototype's local mock data and hard-coded booking flow. It is based on the current React app, including `public/mock/properties.tsx`, `public/mock/saved_properties.tsx`, and the pages under `src/Pages`.

## Suggested conventions

- Base path: `/api/v1`
- JSON request and response bodies; dates use ISO 8601 calendar dates (`YYYY-MM-DD`).
- Use stable IDs (`id`) in requests; `slug` is for human-readable URLs.
- Prices should include a numeric amount and ISO currency code. The current prototype mixes USD property rates with NPR booking totals; the API must return one currency consistently for each quote and booking.
- Authenticated endpoints should use a secure session cookie or bearer token. Wishlist, profile, and booking endpoints require an authenticated user.
- Return errors in a consistent format, for example: `{"error":{"code":"VALIDATION_ERROR","message":"Check-in must be before check-out","fields":{"checkOut":"Must be after checkIn"}}}`.
- Paginate collection endpoints with `page`, `pageSize`, and response `total` (or use cursor pagination consistently).

## Priority 1: needed for the core browse-to-book flow

### 1. Browse and search properties

`GET /properties`

Query parameters:

| Parameter | Meaning |
| --- | --- |
| `region` | Repeatable or comma-separated region filters |
| `vibe` | Repeatable or comma-separated morning mood filters |
| `minRating` | Minimum review rating |
| `maxPrice` | Maximum nightly price |
| `checkIn`, `checkOut` | Optional dates; when present, return availability-aware results |
| `adults`, `children`, `rooms` | Optional guest and room counts |
| `pets` | Optional boolean |
| `sort` | `recommended`, `rating`, `price-low`, `price-high` |
| `page`, `pageSize` | Pagination |

Response: `{ "items": [PropertySummary], "page": 1, "pageSize": 20, "total": 5, "filters": {"regions": [], "vibes": []} }`.

Each property summary needs the fields currently used by cards and filters: `id`, `slug`, `title`, `propertyName`, `location` (town, region, country, coordinates), `vibeCategory`, `elevationMeters`, `peakVisible`, `orientation`, `skyClarity`, `pricePerNight`, `currency`, `rating`, `reviewCount`, and a representative image.

### 2. Property details

`GET /properties/{slug}`

Return the summary fields plus the image gallery, `timesOfDay` (`sunrise`, `midday`, `goldenHour`, each with `timeLabel`, `imageUrl`, and `description`), host profile, room highlights, amenities, room types, add-ons, and house/cancellation policies. Current room types and add-ons are hard-coded in the property detail page and should become property data.

### 3. Check availability and calculate a quote

`POST /availability/quotes`

Request:

```json
{
  "propertyId": "view-namche-everest",
  "checkIn": "2026-10-12",
  "checkOut": "2026-10-15",
  "adults": 2,
  "children": 0,
  "rooms": 1,
  "roomTypeId": "panorama-suite",
  "addOnIds": []
}
```

Return availability and a server-calculated quote: nights, room subtotal, add-on subtotal, taxes, fees, total, currency, and a short-lived `quoteId`/expiry. The server must be authoritative for availability and all prices; do not trust totals sent by the client.

### 4. Create and retrieve bookings

`POST /bookings`

Request should include `quoteId`, guest contact details (first and last name, email, phone), selected payment method, and optional guest notes/preferences. Return `bookingId`, booking status, total/currency, and the next payment action. Booking creation should revalidate availability and price atomically.

`GET /bookings/{bookingId}` returns the confirmation view data, property summary, dates, room, guests, total, payment status, and booking status.

`GET /me/bookings?status=upcoming|completed|cancelled` supplies trip history. If cancellations are in scope, add `POST /bookings/{bookingId}/cancel` and return the updated status and any refund information.

### 5. Take payment through a payment provider

`POST /bookings/{bookingId}/payment-intent` starts payment with the chosen provider/method and returns provider-required client data and an intent ID. `POST /payments/webhook` (server-to-server, authenticated by provider signature) records final payment status. Optionally expose `GET /bookings/{bookingId}/payment` for current status.

The frontend currently displays card number, expiry, and CVC fields. Production integration must use the payment provider's hosted fields/SDK or redirect flow: TripNest's API must never receive or store raw card numbers or CVC. Supported methods shown in checkout are card, eSewa/mobile wallet, bank transfer, and cash on arrival; confirm which methods the backend/provider can actually support.

## Priority 2: account and saved-trip features

### 6. Authentication

- `POST /auth/register` — `{ "email": "...", "password": "..." }` plus name if collected; return user/session.
- `POST /auth/login` — email and password; return user/session.
- `POST /auth/logout` — invalidate session.
- `GET /auth/me` — current authenticated user; supports navbar and protected pages.
- Optional password reset: `POST /auth/password-reset` and `POST /auth/password-reset/confirm`.

The current register form only collects email and password. Confirm whether to add a name field or collect the name later in profile/checkout.

### 7. User profile

- `GET /me` — profile fields: name, email, phone, favorite horizon, account creation date, and derived counts if those metrics remain in the UI.
- `PATCH /me` — update editable profile fields.

### 8. Wishlist / saved properties

- `GET /me/wishlist` — saved property summaries.
- `PUT /me/wishlist/{propertyId}` — save (idempotent).
- `DELETE /me/wishlist/{propertyId}` — remove.

The property detail page has a saved toggle, while `/wishlist` and `/my-saved-trips` currently use different mock data. They should use the same authenticated wishlist resource.

## Priority 3: supporting features currently represented in the UI

### 9. Reviews

- `GET /properties/{propertyId}/reviews?page=1&pageSize=10&sort=recent` — review list and pagination.
- `POST /properties/{propertyId}/reviews` — authenticated review with rating, title/body, and optionally booking reference; enforce eligibility rules on the server.
- Property responses should include rating aggregate and review count.

### 10. Contact and newsletter

- `POST /contact-messages` — `{ "name": "...", "email": "...", "subject": "...", "message": "..." }`.
- `POST /newsletter/subscriptions` — `{ "email": "...", "consent": true }`; return subscription status and handle duplicate subscriptions idempotently.

### 11. Reference data (optional)

If filters/options are managed by the backend, expose `GET /property-filters` returning available regions, vibe categories, rating options, and supported sort options. Otherwise the frontend can derive these from property results.

## Data shape example

```json
{
  "id": "view-namche-everest",
  "slug": "namche-ridge-lodge",
  "title": "The Everest Window",
  "propertyName": "Namche Ridge Lodge",
  "location": {
    "town": "Namche Bazaar",
    "region": "Solukhumbu, Khumbu Valley",
    "country": "Nepal",
    "coordinates": { "lat": 27.8069, "lng": 86.714 }
  },
  "vibeCategory": "Mountain Morning",
  "elevationMeters": 3440,
  "peakVisible": "Ama Dablam & Mt. Everest",
  "orientation": "East-Facing Dawn",
  "skyClarity": "98% Clear Sky",
  "pricePerNight": 140,
  "currency": "USD",
  "rating": 4.95,
  "reviewCount": 48,
  "timesOfDay": {
    "sunrise": { "timeLabel": "6:00 AM Sunrise", "imageUrl": "https://...", "description": "..." },
    "midday": { "timeLabel": "12:00 PM Midday", "imageUrl": "https://...", "description": "..." },
    "goldenHour": { "timeLabel": "5:30 PM Golden Hour", "imageUrl": "https://...", "description": "..." }
  },
  "host": { "name": "Pasang & Pemba Sherpa", "role": "Lodge hosts", "avatarUrl": "https://...", "quote": "..." },
  "roomHighlights": ["Private sunrise balcony", "Heated blankets"]
}
```

## Frontend decisions / gaps to resolve during integration

- Checkout and payment currently contain hard-coded property, guest, date, room, and amount values; route state or a persisted checkout session must carry the selected quote through the flow.
- The property detail page has a default property when no slug matches. The backend integration should handle unknown slugs as a 404 instead of silently displaying the first property.
- Search/filter UI has a `FilterSearch` component, but it is currently hidden on the home and listing pages. Its date, guest, room, and pets values should be included only when that search control is wired into the listing flow.
- Current property rates are USD while checkout examples are NPR. Decide the canonical booking currency, supported currencies, and conversion responsibility before implementing quote/payment APIs.
- The `saved_properties` mock schema differs from the main property schema. Migrate to one property model and return the same `PropertySummary` shape from wishlist endpoints.
- Booking confirmation and account pages should read from API responses rather than the fixed sample values currently in the UI.

## Recommended implementation order

1. Property list/detail endpoints and availability quote.
2. Booking creation and payment-provider integration.
3. Authentication, profile, wishlist, and trip history.
4. Reviews, contact submissions, and newsletter subscriptions.
