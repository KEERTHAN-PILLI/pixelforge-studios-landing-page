# PixelForge Studios - Landing Page

A complete, production-ready, fully responsive landing page built for PixelForge Studios, an Animation & Gaming company.

## Project Overview

PixelForge Studios serves B2B (Game Studios), B2C (Gamers), and D2C (Direct Buyers) audiences. This landing page is designed to cater to all three segments with a dark, modern gaming aesthetic, smooth animations, and robust lead capture.

**Live Demo:** [Insert your Netlify/Vercel URL here]

## Features
- **Modern UI Edge**: Dark mode, neon glows, glassmorphism, and custom gaming typographies.
- **Fully Responsive**: Fluid scaling from mobile to desktop using Tailwind CSS.
- **Interactive Animations**: Scroll reveals and hover effects powered by Framer Motion.
- **Client-Side Validation**: Robust contact form ensuring data integrity before transmission.
- **Built-in Tracking Hooks**: Google Analytics (GA4) and Meta Pixel integrations out of the box.

## Tech Stack
- **React.js** (via Vite)
- **Tailwind CSS v3** (Utility-first styling)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **React Scroll** (Smooth anchor navigation)

## Setup Instructions
1. Clone the repository.
2. Ensure Node.js is installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. View the app at `http://localhost:5173`.

## Deployment Steps (Vercel / Netlify)
This project is configured out-of-the-box for standard Vite deployments.

**Netlify:**
- Connect your GitHub repository to Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

**Vercel:**
- Import project from GitHub.
- Vercel will automatically detect Vite. Use default settings.

## Analytics Implementation
Analytics placeholders for Google Analytics (GA4) and Meta Pixel (Facebook Pixel) are actively integrated. The logic is centralized in `src/utils/analytics.js`.

**To activate tracking:**
1. Open `index.html` and ensure your `G-XXXXXXXXXX` and `META_PIXEL_ID` scripts are present.
2. Open `src/utils/analytics.js` and ensure the internal router is pushing to your specific `G-HXYRBS15LC` tag.
3. The tracking hooks here will interact with `window.gtag` and `window.fbq`.
4. Ensure you have the base standard script tags added to the `<head>` of your `index.html` as provided by Google and Meta. The tracking hooks here will interact with `window.gtag` and `window.fbq`.

### Where Events Are Triggered

- **Page Views**: Tracked automatically upon initial load inside `App.jsx` (`useEffect` hook). (Both GA4 and Meta Pixel).
- **Button Clicks (CTA)**: The `trackCTAClick()` function is bound to the "Get a Quote" (Navbar) and "Start Project/View Work" (Hero) buttons.
- **Form Submissions**: On successful submission and validation of the Contact Form (`src/components/ContactForm.jsx`), the `trackLead()` function fires, creating a `Lead` event for Meta Pixel and a `form_submit` event for GA4.










<img width="1910" height="897" alt="Screenshot 2026-04-03 082806" src="https://github.com/user-attachments/assets/a520b449-ba84-44b5-985c-9781b16b1e13" />

<img width="1918" height="890" alt="Screenshot 2026-04-03 082818" src="https://github.com/user-attachments/assets/d9f7c4d3-827a-482e-8e94-92e3f58d6668" />

<img width="1919" height="897" alt="Screenshot 2026-04-03 082829" src="https://github.com/user-attachments/assets/e0e0f94c-b979-42c1-851c-000d0ba7e50e" />

<img width="1918" height="890" alt="Screenshot 2026-04-03 082843" src="https://github.com/user-attachments/assets/3ca0de21-ff09-431e-9666-db9c9cca8ff4" />

<img width="1919" height="887" alt="Screenshot 2026-04-03 082850" src="https://github.com/user-attachments/assets/86c73582-f413-4e53-be94-c3fc97076e6f" />

<img width="1919" height="890" alt="Screenshot 2026-04-03 082859" src="https://github.com/user-attachments/assets/3e33ee05-c9b9-4af9-9298-e8dd59cca490" />



