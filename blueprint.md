# Project Blueprint

## Overview

This project is a modern web application designed to showcase a "home shopping" style user interface. It will feature a product-focused layout with visually appealing elements, demonstrating the use of modern web technologies like Web Components, advanced CSS, and ES Modules.

## Design and Features

### Implemented

*   **Layout:** A responsive grid layout for product cards.
*   **Header:** A simple header with a logo and navigation.
*   **Product Card Web Component (`<product-card>`):**
    *   Encapsulated styling with Shadow DOM.
    *   Product Image with hover effects, Title, Pricing, Rating, and Countdown timer.
*   **Styling:**
    *   Modern color palette (`oklch`), typography, and effects (shadows, textures).
*   **Interactivity:**
    *   Hover effects and interactive buttons.
*   **Dark Mode:** A user-toggleable dark theme that persists in `localStorage`.
*   **Pages:**
    *   Home (`index.html`)
    *   Best (`best.html`)
    *   New (`new.html`)
    *   Sale (`sale.html`)

## Plan for Current Request

1.  **Create New HTML Pages:** Create `best.html`, `new.html`, and `sale.html`.
2.  **Update Navigation:** Ensure navigation links in the header of all HTML files point to the correct pages.
3.  **Differentiate Content (Optional):** Add unique titles or slightly different product selections for each page. For now, they will share the same product grid but have a unique H1 title.
4.  **Commit and Push:** Add, commit, and push the new pages to the repository to deploy them via GitHub Pages.
