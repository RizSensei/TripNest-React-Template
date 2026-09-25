# TripNest — The 6:00 AM View 🌅

> A visual-first accommodation discovery and booking prototype for Nepal, centered around waking up to iconic Himalayan morning vistas.

## Concept & Overview

TripNest — The 6:00 AM View reimagines how travelers discover and book stays across Nepal. Instead of treating rooms as generic inventory, the experience focuses on the emotional value of a sunrise view from the room, balcony, or mountain lodge window.

The app is built around the idea that travelers do not just seek accommodation—they seek the feeling of waking up above the clouds, beside a lake, or inside a ridge-side lodge with the Himalayas glowing at sunrise. This concept is reflected throughout the product: visual-led property discovery, elevated mountain imagery, sunrise storytelling, and a streamlined booking journey.

The interface is designed to showcase:

- dramatic mountain and sunrise visuals
- region-based travel inspiration across Nepal
- authentic local stay experiences
- mock reservation and booking interactions
- a more emotional, immersive alternative to standard hotel search UX

## Key Features

### 1. Bed-Frame Perspective Hero
- full-bleed sunrise visual at the top of the landing page
- bold, cinematic typography centered around the “6:00 AM View” concept
- immersive gradient overlays and warm sunrise color palette
- user-first discovery narrative built around views and atmosphere

### 2. Curated Morning Deck
The home page presents a collection of sunrise destinations such as:

- Everest Window
- Annapurna Balcony
- Mustang Cliffhouse
- Chitwan Canopy
- Langtang Dawn

These cards represent the emotional story of each destination and connect the UI to the region-based booking concept.

### 3. Search & Discovery Experience
The booking experience includes:

- location/date/guest search controls
- property discovery across hotel, lodge, and resort stays
- filters for travel preferences and stay characteristics
- listing cards designed around destination mood and visual appeal

### 4. Property Detail and Booking Flow
The frontend includes:

- detailed property view screens
- room selection and reservation flow
- checkout page
- payment page
- confirmation page

This supports the concept of a complete but frontend-only journey from discovery to booking.

### 5. Account & Trip Management
The app also includes supporting front-end screens for:

- user profile
- trip history
- wishlist / saved stays
- saved trips navigation

### 6. Informational & Support Pages
The prototype includes helpful supporting screens such as:

- About us
- Contact
- FAQ
- 404 page

## Mock Data

The current dataset has been reduced to a cleaner demo set and includes a balanced sample of:

- 2 hotels
- 2 lodges
- 2 resorts

This is stored in [public/mock/properties.tsx](public/mock/properties.tsx).

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- Swiper
- Leaflet / React-Leaflet

## Project Structure

- src/App.jsx — route configuration
- src/Pages/ — main application screens
- src/component/ — reusable UI components and layout blocks
- public/mock/ — static mock data for property listings

## Notes

This project remains a frontend-only prototype. It does not include a backend, live authentication, or real payment processing. The goal is to showcase the visual and UX concept of booking a memorable sunrise experience in Nepal.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build

```bash
npm run build
```
