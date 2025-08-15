# Community Health Resource Finder (React + Google Maps API)

A responsive web app that helps users discover *local health resources* on an interactive map with fast search and filtering. Built as a front-end MVP, ready to expand with a backend and public health datasets.

> **Status:** In Progress (Front-end MVP).  
> **Note:** The included data is sample/demo only and not an exhaustive or real-time directory.

## Features
- Google Map with location markers and info windows
- Text search (name, city, services)
- Category + Service filters (e.g., Clinic, Dental, Vaccinations)
- Optional **Open Now** filter (uses sample hours)
- **Radius filter** around the user's current location (geolocation optional)
- Responsive layout with list + map views
- Clean, accessible UI and keyboard-friendly controls

## Tech Stack
- React 18, Vite
- @react-google-maps/api
- Plain CSS (easy to swap for Tailwind later)

## Quick Start
1. **Create a Google Maps API key** (Maps JavaScript API).  
   In Google Cloud Console, enable billing and the Maps JavaScript API.
2. **Clone & install**  
   ```bash
   npm install
   npm run dev
    ```
3. **Add your API key**
    Create .env in the project root:
    ```bash
    VITE_GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE
    ```
4. **Visit the printed local URL**
    (default: http://localhost:5173)

## Screenshots
   <img width="1085" height="901" alt="image" src="https://github.com/user-attachments/assets/e232bb79-0eec-4780-aea6-ce9acef18a33" />


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

## Privacy & Compliance Notes
This front-end MVP does not collect or store PHI. When adding a backend:
- Follow **minimum necessary** data principle.
- Avoid collecting PHI unless absolutely required.
- Use secure transport (HTTPS), audit logs, and encryption at rest.
- Complete a risk assessment and document controls for HIPAA alignment.

## Deploy
- **Vercel** or **Netlify**: one-click deploy with VITE env var for your API key.
- **GitHub Pages**: `npm run build` then publish `dist/` (does not keep env vars—use build-time injection only).

