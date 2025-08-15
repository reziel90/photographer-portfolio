# Photographer Portfolio

This project is a responsive portfolio site for a photographer built with **Angular**, **PrimeNG** and **Tailwind CSS**.  It is inspired by the elegant fine‑art aesthetic of Jovana Rikalo’s website, where ethereal images and subtle pastel colours take centre stage【960980889287577†L84-L93】.  The design keeps navigation simple, uses light animations and provides a dark/light theme toggle for user comfort.

## Features

- **Responsive layout** – mobile‑first pages adapt gracefully to tablets and desktops.
- **Hero carousel** – the landing page features a full‑screen slider for showcasing signature images.
- **About section** – share your biography and artistic philosophy, emphasising emotional storytelling and connection【960980889287577†L84-L93】.
- **Separate galleries** – dedicated pages for photographs and paintings with category filters and a lightbox.
- **Lazy‑loading images** – a custom directive uses the IntersectionObserver API so images load only when visible, improving performance【260357107566376†L109-L124】.
- **Dark/light mode** – a toggle stores the user’s preference in localStorage and switches Tailwind’s dark variants on and off【158837813946145†L56-L71】.
- **Contact form** – visitors can send messages via a simple form and find your email, phone and social links.

## Getting started

> **Note:** This repository includes only the source code. Before running the project locally you need to install the dependencies.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Tailwind CSS peer dependencies (if not already installed globally):

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

3. Generate the Tailwind configuration (already included in this repo):

   ```bash
   npx tailwindcss init
   ```

### Running in development

Use the Angular CLI to start a development server with hot reload:

```bash
ng serve --open
```

The site will open in your default browser at `http://localhost:4200`.

### Building for production

To build a production version into the `dist/` directory:

```bash
ng build --configuration production
```

The output can be hosted on any static web server or deployed to a platform like Netlify or Vercel.

### Customising images

The `src/assets/images` folder contains placeholder images. Replace these files with your own photographs and paintings, keeping the file names the same or adjusting the paths in the components. Using high‑quality JPG or PNG images will provide the best results.

### Theme and colours

Tailwind’s `darkMode: 'class'` option is enabled in `tailwind.config.js`.  A `DarkModeService` stores the user’s preference in `localStorage` and toggles the `dark` class on `<html>`, following the approach outlined in Joey McKenzie’s article on Angular dark mode with Tailwind【158837813946145†L56-L71】.  You can adjust the pastel palette or extend the theme in `tailwind.config.js`.

## Acknowledgements

- The dreamy, emotional style of this template draws inspiration from the biography of fine‑art photographer Jovana Rikalo, who combines models with nature to create ethereal images【960980889287577†L84-L93】.
- The dark mode service is adapted from examples demonstrating how to implement a dark/light toggle in Angular using Tailwind【158837813946145†L56-L71】.
- Lazy‑loading images leverages the IntersectionObserver API to improve performance when scrolling long galleries【260357107566376†L109-L124】.

Feel free to adapt and extend this portfolio to suit your personal style and needs.  Happy shooting!