# TripNest Frontend API Implementation

Frontend-facing API contract for the TripNest application. Examples reflect the current API implementation; values such as IDs, totals, statuses, and dates are illustrative unless stated otherwise.

## Base configuration

- Base URL: `${API_URL}/api/v1` (for local development, `http://localhost:3001/api/v1`).
- Send and receive JSON with `Content-Type: application/json`.
- Send dates as `YYYY-MM-DD`; timestamps are ISO 8601.
- Authenticated endpoints require `Authorization: Bearer <token>`.
- Authentication returns a bearer token in the JSON body. Store it according to the frontend's security policy and attach it to protected requests.
- Prices are numeric and paired with a currency code. Use the quote and booking totals returned by the server; never calculate or submit authoritative checkout totals.
- Collection pagination uses `page` and `pageSize` where supported.

## Endpoint checklist

| Feature | Method and path | Authentication |
| --- | --- | --- |
| Browse/search properties | `GET /properties` | No |
| Property details by slug | `GET /properties/{slug}` | No |
| Property filter options | `GET /property-filters` | No |
| Create property | `POST /properties` | Bearer token |
| Update property | `PUT /properties` | Bearer token |
| Get availability quote | `POST /availability/quotes` | Optional |
| Create booking | `POST /bookings` | Bearer token |
| Get booking confirmation | `GET /bookings/{bookingId}` | Bearer token |
| List user's bookings | `GET /me/bookings` | Bearer token |
| Cancel booking | `POST /bookings/{bookingId}/cancel` | Bearer token |
| Start payment | `POST /bookings/{bookingId}/payment-intent` | Bearer token; currently unavailable |
| Get payment status | `GET /bookings/{bookingId}/payment` | Bearer token |
| Register | `POST /auth/register` | No |
| Log in | `POST /auth/login` | No |
| Log out | `POST /auth/logout` | Bearer token |
| Get current user | `GET /auth/me` | Bearer token |
| Get profile | `GET /me` | Bearer token |
| Update profile | `PATCH /me` | Bearer token |
| List wishlist | `GET /me/wishlist` | Bearer token |
| Add wishlist property | `PUT /me/wishlist/{propertyId}` | Bearer token |
| Remove wishlist property | `DELETE /me/wishlist/{propertyId}` | Bearer token |
| List property reviews | `GET /properties/{propertyId}/reviews` | No |
| Create property review | `POST /properties/{propertyId}/reviews` | Bearer token |
| Submit contact form | `POST /contact-messages` | No |
| Subscribe to newsletter | `POST /newsletter/subscriptions` | No |

The payment provider webhook, `POST /payments/webhook`, is server-to-server and must **not** be called by the frontend.

## Properties

### `GET /properties`

Query parameters:

| Parameter | Format |
| --- | --- |
| `region`, `vibe` | Repeatable or comma-separated strings |
| `minRating`, `maxPrice` | Numbers |
| `checkIn`, `checkOut` | `YYYY-MM-DD` |
| `adults`, `children`, `rooms` | Integers |
| `pets` | Boolean |
| `sort` | `recommended`, `rating`, `price-low`, `price-high` |
| `page`, `pageSize` | Integers; page size is capped at 100 |

Example:

```http
GET /api/v1/properties?region=Kaski%2C%20Gandaki&minRating=4&page=1&pageSize=20
```

No request body.

Example response (one item abbreviated only where property details are omitted):

```json
{
  "items": [
    {
      "id": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
      "slug": "pokhara-lakeside-retreat",
      "title": "A Quiet Morning by the Lake",
      "propertyName": "Lakeside Retreat",
      "location": {
        "town": "Pokhara",
        "region": "Kaski, Gandaki",
        "country": "Nepal",
        "coordinates": { "lat": 28.2096, "lng": 83.9856 }
      },
      "vibeCategory": "Lakeside Calm",
      "elevationMeters": 822,
      "peakVisible": "Annapurna Range",
      "orientation": "North-Facing",
      "skyClarity": "Clear morning views",
      "pricePerNight": 95,
      "currency": "USD",
      "rating": 0,
      "reviewCount": 0,
      "image": "https://example.com/images/pokhara-retreat.jpg",
      "images": [
        {
          "id": "d9f77b62-897f-4e5d-89b5-ebc8f698cd86",
          "propertyId": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
          "url": "https://example.com/images/pokhara-garden.jpg",
          "alt": "Garden at Lakeside Retreat",
          "sortOrder": 0
        }
      ],
      "timesOfDay": {
        "sunrise": {
          "timeLabel": "6:15 AM Sunrise",
          "imageUrl": "https://example.com/images/pokhara-sunrise.jpg",
          "description": "First light over the lake and distant peaks."
        },
        "midday": {
          "timeLabel": "12:00 PM Midday",
          "imageUrl": "https://example.com/images/pokhara-midday.jpg",
          "description": "A bright view across the lakeside."
        },
        "goldenHour": {
          "timeLabel": "5:45 PM Golden Hour",
          "imageUrl": "https://example.com/images/pokhara-evening.jpg",
          "description": "Evening light settles over the water."
        }
      },
      "host": {
        "name": "Maya Gurung",
        "role": "Host",
        "quote": "Enjoy a peaceful stay close to the lake.",
        "avatarUrl": "https://example.com/images/hosts/maya.jpg"
      },
      "roomHighlights": ["Lake-view balcony", "Quiet garden"],
      "amenities": ["Wi-Fi", "Breakfast", "Airport pickup"],
      "roomTypes": [
        {
          "id": "pokhara-lake-view-room",
          "propertyId": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
          "name": "Lake View Room",
          "description": "A comfortable room overlooking the lake.",
          "capacityAdults": 2,
          "capacityChildren": 1,
          "maxRooms": 4,
          "pricePerNight": 110,
          "currency": "USD",
          "highlights": ["Lake view", "Balcony"]
        }
      ],
      "addOns": [
        {
          "id": "pokhara-airport-pickup",
          "propertyId": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
          "name": "Airport Pickup",
          "description": "One-way pickup from Pokhara Airport.",
          "price": 15,
          "priceType": "PER_STAY",
          "currency": "USD"
        }
      ],
      "policies": {
        "houseRules": ["Quiet hours after 10 PM"],
        "cancellation": "Free cancellation up to 5 days before check-in."
      }
    }
  ],
  "page": 1,
  "pageSize": 20,
  "total": 1,
  "filters": {
    "regions": ["Kaski, Gandaki"],
    "vibes": ["Lakeside Calm"]
  }
}
```

**Implementation note:** `adults`, `children`, `rooms`, and `pets` are accepted as query parameters by the documented contract, but current server search does not apply them. Availability filtering currently checks booking date conflicts. Do not rely on those unsupported filters until backend support is added.

### `GET /properties/{slug}`

Example:

```http
GET /api/v1/properties/pokhara-lakeside-retreat
```

No request body. Returns one property object with the same property-detail fields shown in the list response, without the surrounding `items`, pagination, or `filters` wrapper. Unknown slugs return `404`.

### `GET /property-filters`

No request body.

Example response:

```json
{
  "regions": ["Kaski, Gandaki", "Solukhumbu, Khumbu Valley"],
  "vibeCategories": ["Lakeside Calm", "Mountain Morning"],
  "ratingOptions": [3, 4, 4.5],
  "sortOptions": ["recommended", "rating", "price-low", "price-high"]
}
```

### `POST /properties` (authenticated property creation)

Use only in property-management flows. The property `id` is generated by the server and must not be included. The following example includes optional related data; those arrays can be omitted.

```json
{
  "slug": "pokhara-lakeside-retreat",
  "title": "A Quiet Morning by the Lake",
  "propertyName": "Lakeside Retreat",
  "town": "Pokhara",
  "region": "Kaski, Gandaki",
  "country": "Nepal",
  "latitude": 28.2096,
  "longitude": 83.9856,
  "vibeCategory": "Lakeside Calm",
  "elevationMeters": 822,
  "peakVisible": "Annapurna Range",
  "orientation": "North-Facing",
  "skyClarity": "Clear morning views",
  "pricePerNight": 95,
  "currency": "USD",
  "representativeImage": "https://example.com/images/pokhara-retreat.jpg",
  "timesOfDay": {
    "sunrise": {
      "timeLabel": "6:15 AM Sunrise",
      "imageUrl": "https://example.com/images/pokhara-sunrise.jpg",
      "description": "First light over the lake and distant peaks."
    }
  },
  "host": {
    "name": "Maya Gurung",
    "role": "Host",
    "quote": "Enjoy a peaceful stay close to the lake.",
    "avatarUrl": "https://example.com/images/hosts/maya.jpg"
  },
  "roomHighlights": ["Lake-view balcony", "Quiet garden"],
  "amenities": ["Wi-Fi", "Breakfast", "Airport pickup"],
  "policies": {
    "houseRules": ["Quiet hours after 10 PM"],
    "cancellation": "Free cancellation up to 5 days before check-in."
  },
  "images": [
    {
      "url": "https://example.com/images/pokhara-garden.jpg",
      "alt": "Garden at Lakeside Retreat",
      "sortOrder": 0
    }
  ],
  "roomTypes": [
    {
      "id": "pokhara-lake-view-room",
      "name": "Lake View Room",
      "description": "A comfortable room overlooking the lake.",
      "capacityAdults": 2,
      "capacityChildren": 1,
      "maxRooms": 4,
      "pricePerNight": 110,
      "currency": "USD",
      "highlights": ["Lake view", "Balcony"]
    }
  ],
  "addOns": [
    {
      "id": "pokhara-airport-pickup",
      "name": "Airport Pickup",
      "description": "One-way pickup from Pokhara Airport.",
      "price": 15,
      "priceType": "PER_STAY",
      "currency": "USD"
    }
  ]
}
```

Required fields: `slug`, `title`, `propertyName`, `town`, `region`, `vibeCategory`, and `pricePerNight`.

Example response: the created property-detail object returned by `GET /properties/{slug}`, including the generated `id`.

```json
{
  "id": "generated-uuid",
  "slug": "pokhara-lakeside-retreat",
  "title": "A Quiet Morning by the Lake",
  "propertyName": "Lakeside Retreat",
  "location": {
    "town": "Pokhara",
    "region": "Kaski, Gandaki",
    "country": "Nepal",
    "coordinates": { "lat": 28.2096, "lng": 83.9856 }
  },
  "vibeCategory": "Lakeside Calm",
  "elevationMeters": 822,
  "peakVisible": "Annapurna Range",
  "orientation": "North-Facing",
  "skyClarity": "Clear morning views",
  "pricePerNight": 95,
  "currency": "USD",
  "rating": 0,
  "reviewCount": 0,
  "image": "https://example.com/images/pokhara-retreat.jpg",
  "images": [],
  "timesOfDay": {},
  "host": {},
  "roomHighlights": [],
  "amenities": [],
  "roomTypes": [],
  "addOns": [],
  "policies": {}
}
```

### `PUT /properties` (authenticated property update)

Send the stable `id` in the request body. Only supplied fields are updated. Supplied `images` replace the current gallery; supplied `roomTypes` and `addOns` are created or updated by ID. Omitted nested arrays are unchanged.

```json
{
  "id": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
  "title": "A Restful Morning by the Lake",
  "pricePerNight": 99,
  "images": [
    {
      "url": "https://example.com/images/pokhara-updated-garden.jpg",
      "alt": "Updated garden view",
      "sortOrder": 0
    }
  ]
}
```

Example response: the updated property-detail object, with the same shape as the `POST /properties` response. Returns `404` if the property does not exist.

## Availability and bookings

### `POST /availability/quotes`

Authentication is optional. Dates must be valid calendar dates and `checkOut` must be after `checkIn`. Prices and availability are determined by the server.

```json
{
  "propertyId": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
  "checkIn": "2026-10-12",
  "checkOut": "2026-10-15",
  "adults": 2,
  "children": 1,
  "rooms": 1,
  "roomTypeId": "pokhara-lake-view-room",
  "addOnIds": ["pokhara-airport-pickup"]
}
```

Example response:

```json
{
  "available": true,
  "quoteId": "quote-uuid",
  "expiresAt": "2026-09-27T04:30:00.000Z",
  "nights": 3,
  "roomSubtotal": 330,
  "addOnSubtotal": 15,
  "taxes": 34.5,
  "fees": 0,
  "total": 379.5,
  "currency": "USD"
}
```

`quoteId` is short-lived; use it promptly when creating the booking. An unavailable room returns `409`; invalid property or room/add-on data returns an error response.

### `POST /bookings`

Authentication required. Submit the `quoteId` from the availability response and guest details. Do not send totals.

```json
{
  "quoteId": "quote-uuid",
  "firstName": "Aarav",
  "lastName": "Sharma",
  "email": "aarav.sharma@example.com",
  "phone": "+9779812345678",
  "paymentMethod": "card",
  "guestNotes": "We expect to arrive around 4 PM.",
  "preferences": "Please prepare one extra blanket."
}
```

Example response:

```json
{
  "bookingId": "booking-uuid",
  "status": "PENDING_PAYMENT",
  "total": 379.5,
  "currency": "USD",
  "nextAction": {
    "type": "PAYMENT_INTENT",
    "url": "/api/v1/bookings/booking-uuid/payment-intent"
  }
}
```

### `GET /bookings/{bookingId}`

Authentication required; the booking must belong to the current user. No request body.

Example response:

```json
{
  "bookingId": "booking-uuid",
  "status": "PENDING_PAYMENT",
  "paymentStatus": "PENDING",
  "property": {
    "id": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
    "slug": "pokhara-lakeside-retreat",
    "title": "A Quiet Morning by the Lake",
    "propertyName": "Lakeside Retreat",
    "location": {
      "town": "Pokhara",
      "region": "Kaski, Gandaki",
      "country": "Nepal",
      "coordinates": { "lat": 28.2096, "lng": 83.9856 }
    },
    "vibeCategory": "Lakeside Calm",
    "elevationMeters": 822,
    "peakVisible": "Annapurna Range",
    "orientation": "North-Facing",
    "skyClarity": "Clear morning views",
    "pricePerNight": 95,
    "currency": "USD",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://example.com/images/pokhara-retreat.jpg"
  },
  "dates": {
    "checkIn": "2026-10-12T00:00:00.000Z",
    "checkOut": "2026-10-15T00:00:00.000Z"
  },
  "room": {
    "id": "pokhara-lake-view-room",
    "name": "Lake View Room",
    "pricePerNight": 110,
    "currency": "USD"
  },
  "guests": {
    "adults": 2,
    "children": 1,
    "rooms": 1,
    "firstName": "Aarav",
    "lastName": "Sharma",
    "email": "aarav.sharma@example.com",
    "phone": "+9779812345678"
  },
  "total": 379.5,
  "currency": "USD"
}
```

### `GET /me/bookings?status=upcoming`

Authentication required. `status` is optional and may be `upcoming`, `completed`, or `cancelled`. No request body.

Example response:

```json
{
  "items": [
    {
      "bookingId": "booking-uuid",
      "status": "PENDING_PAYMENT",
      "paymentStatus": "PENDING",
      "property": {
        "id": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
        "slug": "pokhara-lakeside-retreat",
        "title": "A Quiet Morning by the Lake",
        "propertyName": "Lakeside Retreat",
        "location": {
          "town": "Pokhara",
          "region": "Kaski, Gandaki",
          "country": "Nepal",
          "coordinates": { "lat": 28.2096, "lng": 83.9856 }
        },
        "vibeCategory": "Lakeside Calm",
        "elevationMeters": 822,
        "peakVisible": "Annapurna Range",
        "orientation": "North-Facing",
        "skyClarity": "Clear morning views",
        "pricePerNight": 95,
        "currency": "USD",
        "rating": 0,
        "reviewCount": 0,
        "image": "https://example.com/images/pokhara-retreat.jpg"
      },
      "checkIn": "2026-10-12T00:00:00.000Z",
      "checkOut": "2026-10-15T00:00:00.000Z",
      "room": "Lake View Room",
      "total": 379.5,
      "currency": "USD"
    }
  ]
}
```

### `POST /bookings/{bookingId}/cancel`

Authentication required. No request body; pass the booking ID in the URL.

Example response when no payment was captured:

```json
{
  "bookingId": "booking-uuid",
  "status": "CANCELLED",
  "refund": null
}
```

For a paid booking, `refund` currently has `status: "PENDING_REVIEW"` plus `amount` and `currency`; this does not represent a completed provider refund.

## Payments

### `POST /bookings/{bookingId}/payment-intent`

Authentication required. No request body is currently consumed. **The provider is not configured in the current backend**, so a valid owned booking receives `503 PAYMENT_PROVIDER_UNCONFIGURED`. Do not build a successful payment UX against this endpoint until a provider is integrated.

### `GET /bookings/{bookingId}/payment`

Authentication required. No request body.

Example response:

```json
{
  "status": "PENDING"
}
```

### `POST /payments/webhook` (backend only)

Called by the payment provider, not by the browser/mobile app. It requires the provider signature in `x-payment-signature`. The current handler verifies the signature but does not persist payment status.

## Authentication and profile

### `POST /auth/register`

`name` is optional; password must be at least 8 characters.

```json
{
  "name": "Aarav Sharma",
  "email": "aarav.sharma@example.com",
  "password": "ExamplePass123"
}
```

Example response (`201`):

```json
{
  "user": {
    "id": "user-uuid",
    "email": "aarav.sharma@example.com",
    "name": "Aarav Sharma",
    "createdAt": "2026-09-27T03:00:00.000Z"
  },
  "token": "jwt-token"
}
```

### `POST /auth/login`

```json
{
  "email": "aarav.sharma@example.com",
  "password": "ExamplePass123"
}
```

Example response (`200`): same `{ "user": { ... }, "token": "..." }` shape as registration. Invalid credentials return `401`.

### `POST /auth/logout`

Bearer token required. No request body.

```json
{
  "success": true
}
```

Current logout responds successfully but does not revoke the stateless JWT. Remove the token client-side when logging out.

### `GET /auth/me`

Bearer token required. No request body.

Example response:

```json
{
  "id": "user-uuid",
  "email": "aarav.sharma@example.com",
  "name": "Aarav Sharma",
  "createdAt": "2026-09-27T03:00:00.000Z"
}
```

### `GET /me`

Bearer token required. No request body.

Example response:

```json
{
  "id": "user-uuid",
  "name": "Aarav Sharma",
  "email": "aarav.sharma@example.com",
  "phone": "+9779812345678",
  "favoriteHorizon": "Annapurna Range",
  "createdAt": "2026-09-27T03:00:00.000Z",
  "counts": {
    "bookings": 2,
    "wishlist": 3
  }
}
```

### `PATCH /me`

Bearer token required. Only `name`, `phone`, and `favoriteHorizon` are updated.

```json
{
  "name": "Aarav Sharma",
  "phone": "+9779812345678",
  "favoriteHorizon": "Annapurna Range"
}
```

Example response: profile object with `id`, `name`, `email`, `phone`, `favoriteHorizon`, and `createdAt` (no `counts` field).

## Wishlist

All wishlist endpoints require a bearer token.

### `GET /me/wishlist`

No request body.

Example response:

```json
{
  "items": [
    {
      "id": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
      "slug": "pokhara-lakeside-retreat",
      "title": "A Quiet Morning by the Lake",
      "propertyName": "Lakeside Retreat",
      "location": {
        "town": "Pokhara",
        "region": "Kaski, Gandaki",
        "country": "Nepal",
        "coordinates": { "lat": 28.2096, "lng": 83.9856 }
      },
      "vibeCategory": "Lakeside Calm",
      "elevationMeters": 822,
      "peakVisible": "Annapurna Range",
      "orientation": "North-Facing",
      "skyClarity": "Clear morning views",
      "pricePerNight": 95,
      "currency": "USD",
      "rating": 0,
      "reviewCount": 0,
      "image": "https://example.com/images/pokhara-retreat.jpg"
    }
  ]
}
```

### `PUT /me/wishlist/{propertyId}`

No request body; adding an already-saved property is idempotent.

```json
{
  "saved": true
}
```

### `DELETE /me/wishlist/{propertyId}`

No request body.

```json
{
  "saved": false
}
```

## Reviews

### `GET /properties/{propertyId}/reviews?page=1&pageSize=10&sort=recent`

No request body. `propertyId` is the property's stable ID, not its slug.

Example response:

```json
{
  "items": [
    {
      "id": "review-uuid",
      "userId": "user-uuid",
      "propertyId": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
      "bookingId": "booking-uuid",
      "rating": 5,
      "title": "Peaceful stay by the lake",
      "body": "The room had a lovely lake view, and the hosts were welcoming.",
      "createdAt": "2026-09-27T03:00:00.000Z",
      "author": "Aarav Sharma"
    }
  ],
  "page": 1,
  "pageSize": 10,
  "total": 1
}
```

### `POST /properties/{propertyId}/reviews`

Bearer token required. `bookingId` must belong to the user, be for this property, not be cancelled, and have a check-out date in the past.

```json
{
  "rating": 5,
  "title": "Peaceful stay by the lake",
  "body": "The room had a lovely lake view, and the hosts were welcoming.",
  "bookingId": "booking-uuid"
}
```

Example response (`201`):

```json
{
  "id": "review-uuid",
  "userId": "user-uuid",
  "propertyId": "140916b3-ffb3-4b77-9a6d-1054409f31e0",
  "bookingId": "booking-uuid",
  "rating": 5,
  "title": "Peaceful stay by the lake",
  "body": "The room had a lovely lake view, and the hosts were welcoming.",
  "createdAt": "2026-09-27T03:00:00.000Z"
}
```

## Contact and newsletter

### `POST /contact-messages`

```json
{
  "name": "Aarav Sharma",
  "email": "aarav.sharma@example.com",
  "subject": "Question about a stay",
  "message": "Could you tell me whether airport pickup is available?"
}
```

Example response (`201`):

```json
{
  "id": "contact-uuid",
  "status": "received"
}
```

### `POST /newsletter/subscriptions`

Consent must be `true`.

```json
{
  "email": "aarav.sharma@example.com",
  "consent": true
}
```

Example response (`200`):

```json
{
  "status": "ACTIVE",
  "email": "aarav.sharma@example.com"
}
```

## Errors and integration notes

Validation errors from API handlers generally use this shape:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Check-in must be before check-out",
    "fields": {
      "checkOut": "Must be after checkIn"
    }
  }
}
```

Handle non-2xx status codes rather than assuming every error follows this shape: authentication middleware and the global error handler currently use different error response formats.

The API currently has no password-reset endpoints. Payment intent creation is unconfigured. Property creation/update are authenticated but not role-restricted. Confirm supported payment methods and canonical currency with the backend team before enabling checkout options.
