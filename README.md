# Community Health Resource Finder (React + Leaflet / OpenStreetMap)

A responsive web app that helps users discover **local health resources** on an interactive map with fast search and filtering — now powered by **Leaflet + OpenStreetMap** (no API key needed).

> **Status:** In Progress (Front-end MVP)  
> **Note:** The included data is sample/demo only and not an exhaustive or real-time directory.

---

## Features
- Interactive **OpenStreetMap** map with markers and info popups
- **Search** by name, address, city, ZIP, and services
- **Filters** by category and service
- **Open now** (demo logic using sample hours)
- **Radius filter** from the user’s location (optional geolocation)
- Responsive layout with list + map views
- Clean, accessible UI

---

## Tech Stack
- **React 18**, **Vite**
- **Leaflet 1.9.x** + **react-leaflet 4.2.x**
- Plain CSS (easy to swap for Tailwind later)
- (Optional) Fuse.js for fuzzy search

> This project is intentionally **keyless**. No Google Maps billing required.

---

## Quick Start

1) **Install Node.js** (v18+ recommended)  
   Verify in your terminal:
   ```bash
   node -v
   npm -v
    ```

2) **Install dependencies**
    ```bash
    npm install
    ```

3) **Run the dev server**
    ```bash
    npm run dev
    ```

Open the printed URL (default: http://localhost:5173). You should see the map and pins.

---

## Screenshot
<img width="1085" height="901" alt="image" src="https://github.com/user-attachments/assets/e232bb79-0eec-4780-aea6-ce9acef18a33" />

---

## Planned Enhancements
These features are not yet implemented but are part of the project roadmap:

- **Backend integration** with public health datasets (e.g., CDC, state, or county APIs) for real-time and accurate resource data.
- **Role-based access control** for different user types (e.g., public users, administrators, health providers).
- **HIPAA-aligned secure data handling** for any future features that may involve Protected Health Information (PHI), including:
  - Data encryption in transit and at rest
  - Access logging and monitoring
  - Strict data minimization policies
- **Advanced filtering options**, such as:
  - Insurance accepted
  - Language support
  - Sliding-scale or free services
- **User accounts** to save searches, bookmark resources, and receive update notifications.
- **Crowdsourced updates** with moderation workflows for adding or correcting resource details.
- **Analytics dashboard** for health organizations to track usage patterns and identify underserved areas.
- **Mobile-first PWA version** for offline access and faster load times on low-bandwidth connections.

---
## Privacy & Compliance Notes
This front-end MVP does not collect or store PHI. When adding a backend:
- Follow **minimum necessary** data principle.
- Avoid collecting PHI unless absolutely required.
- Use secure transport (HTTPS), audit logs, and encryption at rest.
- Complete a risk assessment and document controls for HIPAA alignment.
---
## Deploy
- **Vercel** or **Netlify**: one-click deploy with VITE env var for your API key.
- **GitHub Pages**: `npm run build` then publish `dist/` (does not keep env vars—use build-time injection only).

