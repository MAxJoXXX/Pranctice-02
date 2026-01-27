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

### Planned

*   **Dark Mode:** A user-toggleable dark theme.

## Plan for Current Request

1.  **Modify `index.html`:** Add a dark mode toggle button to the header.
2.  **Modify `style.css`:** Define dark mode color variables and apply them using a `data-theme` selector.
3.  **Modify `main.js`:**
    *   Implement the logic for the theme-switching toggle.
    *   Use `localStorage` to persist the chosen theme.
    *   Ensure Web Components adapt to the theme change.
4.  **Commit and Push:** Add, commit, and push the changes to the repository.
