# Google OAuth setup

TripNest is a React single-page application built with Vite. Google sign-in uses Google's Identity Services popup to obtain an OpenID Connect ID token, then sends that token to the TripNest API. The API—not the browser—verifies the token and creates or signs in the user.

## Authentication flow

1. The user selects the Google button on the sign-in or registration form.
2. Google displays its account/consent popup and returns an ID token to the React app.
3. The app sends `POST /api/v1/auth/google` with `{ "credential": "<Google ID token>" }`.
4. The API validates the token with Google, creates the account if it does not exist, and returns a TripNest session in the same shape used by `POST /api/v1/auth/login` and `/api/v1/auth/register`.
5. The app stores the returned token/profile and navigates to the application.

The `/api/v1/auth/google` endpoint is an API-server route. There is no NextAuth callback route in this React frontend.

## Prerequisites

- Access to a Google account that can manage a Google Cloud project
- A running TripNest API with its Google-account migration applied
- Node.js and npm, with this project's dependencies installed

The API verifies the ID token's signature, issuer, expiry, and audience against the configured Google client ID. It uses the verified Google subject (`sub`) as the stable provider identity and does not trust profile data supplied separately by the browser. For security, an existing password account with the same email is not automatically linked; the user must sign in with that account's password.

## 1. Configure the Google consent screen

1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Select or create a project.
3. Open **Google Auth Platform** (or **APIs & Services > OAuth consent screen**).
4. Configure the app name, support email, and developer contact email.
5. Choose **External** unless access is restricted to a Google Workspace organization.
6. Request only basic identity information (`openid`, `email`, and `profile`).
7. If the app is in **Testing** status, add the Google accounts that need to sign in as test users.

## 2. Create a Web application OAuth client

1. Open **Google Auth Platform > Clients** (or **APIs & Services > Credentials**) and create an OAuth client.
2. Choose **Web application**.
3. Add each frontend origin under **Authorized JavaScript origins**. For example:

   ```text
   http://localhost:5173
   https://your-domain.example
   ```

   Use the actual origin printed by Vite if its development port differs.

4. Copy the client ID. The popup-based frontend flow does not use a NextAuth callback URL or require a client secret in the browser.

Google compares origins exactly; protocol, hostname, and port must match the page's origin.

## 3. Configure the React app

Create `.env.local` from `.env.example` and set:

```env
VITE_API_URL=http://localhost:3001
VITE_GOOGLE_CLIENT_ID=your_google_web_client_id
```

The client ID is public and is included in the frontend bundle. This ID-token flow does not require a Google client secret. **Never** put `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`, or any other secret in a `VITE_` variable; keep any secrets needed for other server operations in the API server's private environment.

`VITE_API_URL` is the API origin; the frontend appends `/api/v1`. Restart Vite after changing environment variables. If `VITE_GOOGLE_CLIENT_ID` is unset, the auth pages explain that Google sign-in is not configured.

## 4. Configure the API

Configure the API's private `.env` with the same client ID:

```env
GOOGLE_CLIENT_ID=your_google_web_client_id
```

The API accepts `POST /api/v1/auth/google` with a JSON body:

```json
{ "credential": "<Google ID token>" }
```

The API verifies the token server-side and returns the same `{ "user": ..., "token": ... }` session shape as password login/register. For a new Google account it returns `201`; an existing Google account returns `200`. An existing password account with the same email returns `409` and is not silently linked.

Apply the Prisma migration before use:

```bash
cd tripnest-api
npx prisma migrate deploy
npm run prisma:generate
```

In development, `npm run prisma:migrate` applies pending migrations and can be used instead. Do not accept an ID token without checking its audience against the expected client ID. Never log or persist raw ID tokens unnecessarily.

## 5. Verify locally

1. Ensure the API is running with the Google-account database migration applied and `GOOGLE_CLIENT_ID` configured.
2. Start the frontend with `npm run dev`.
3. Open the Vite URL and select the Google sign-in or sign-up button on either page.
4. Complete Google consent and confirm the API creates or signs in the user and the app opens the authenticated application.
5. Verify an unconfigured client ID and API validation failures produce an error rather than a successful-looking sign-in.

## 6. Deploy

For each deployed frontend origin, register that exact HTTPS origin under the OAuth client's **Authorized JavaScript origins** (or create separate clients per environment). Set `VITE_GOOGLE_CLIENT_ID` at frontend build time and set the matching `GOOGLE_CLIENT_ID` in the API environment. Apply pending Prisma migrations using `npx prisma migrate deploy` during deployment. Never ship a Google client secret or API verification secret in the frontend build.

For an external app in Testing mode, only configured test users can sign in. Complete Google's verification requirements before opening the app to general users if required by the requested scopes or branding.

## Troubleshooting

### Google reports an unauthorized origin

- Check that the current page's protocol, hostname, and port exactly match an authorized JavaScript origin.
- Confirm the frontend build uses the intended `VITE_GOOGLE_CLIENT_ID`.
- Restart the development server after editing `.env.local`.

### Google shows `access_denied` or blocks the account

- Confirm the consent screen is configured.
- Add the account as a test user if the consent screen is in Testing status.
- Check the Google account and Workspace access policies.

### The API rejects Google sign-in

- Check that the frontend request reaches `POST /api/v1/auth/google` at the configured `VITE_API_URL`.
- Confirm the API expects the `credential` field and verifies the token audience against the same client ID.
- Inspect API-side error logs without logging raw credentials or ID tokens.

## Security checklist

- Keep `GOOGLE_CLIENT_SECRET` and all API secrets on the server; never expose them through `VITE_` variables.
- Verify ID tokens server-side, including signature, issuer, expiry, and audience.
- Use HTTPS for deployed frontend and API origins.
- Register only the frontend origins that actually serve the application.
- Rotate any OAuth credential that has been exposed and update the relevant server configuration.
