# Blueprint for Dinner Menu Recommender

## Overview
This project is a simple web application that recommends a dinner menu to the user. It features a single button that, when clicked, displays a random dinner menu suggestion. The application is built using plain HTML, CSS, and JavaScript, following modern web development practices.

## Style, Design, and Features Implemented

### HTML Structure (`index.html`)
-   A main container (`.container`) to hold the title, button, and recommendation display.
-   A prominent title "오늘 저녁 뭐 먹지?" (What to eat for dinner today?).
-   A button (`#recommendButton`) to trigger menu recommendations.
-   A display area (`#menuRecommendation`) to show the recommended menu.

### CSS Styling (`style.css`)
-   **Overall Aesthetics**: Modern, clean, and visually balanced design with a focus on user experience.
-   **Layout**: Centered content using Flexbox, responsive to different screen sizes.
-   **Colors**: A palette including shades of grey, blue, and purple, with linear gradients for backgrounds and buttons for a vibrant look.
-   **Typography**: 'Arial', sans-serif for readability, with varied font sizes and weights for emphasis.
-   **Container Styling**: White background, rounded corners, and a subtle box-shadow for a "lifted" effect.
-   **Button Styling**: Gradient background, white text, rounded corners, padding, and interactive hover/active states with subtle animations (translateY, box-shadow, and a radial background ripple effect).
-   **Menu Card Styling**: Light blue background, rounded corners, inner box-shadow, strong font for the menu text, and a slight gradient overlay for visual depth.
-   **Animations**:
    -   `fadeInSlideUp` for the initial appearance of the container.
    -   `textAppear` for the menu recommendation text to fade in.

### JavaScript Logic (`main.js`)
-   **Event Listener**: Attaches an event listener to the "메뉴 추천받기!" button.
-   **Dinner Menus Array**: A comprehensive list of Korean and international dinner menu options.
-   **Random Recommendation**: Upon button click, a random menu is selected from the `dinnerMenus` array.
-   **Display Update**: The selected menu is displayed in the `#menuRecommendation` div.
-   **Animation Reset**: Resets and reapplies the text animation to ensure it plays every time a new menu is recommended.

## Plan for Current Requested Change
The user requested to delete all existing project files and create a new website for dinner menu recommendations, then prepare it for deployment. This task is now complete.

### Steps Taken:
1.  **Deleted Existing Files**: All non-essential files (`best.html`, `blueprint.md`, `contact.html`, `effects.js`, `GEMINI.md`, `index.html`, `install.cmd`, `main.js`, `new.html`, `sale.html`, `style.css`) were removed from the project root. Essential configuration files (`.git/`, `.idx/dev.nix`, `.idx/mcp.json`, `.vscode/`) were preserved.
2.  **Created `index.html`**: Set up the basic HTML structure with a title, a button, and a div for displaying recommendations.
3.  **Created `style.css`**: Applied modern CSS to enhance the visual appeal, including responsive design, appealing color schemes, interactive elements, and subtle animations.
4.  **Created `main.js`**: Implemented the core logic for randomly selecting and displaying dinner menus.
5.  **Verified `.idx/mcp.json`**: Confirmed that the Firebase `mcp.json` configuration is correct and ready for potential deployment within the Firebase Studio environment.

The project is now a functional and aesthetically pleasing dinner menu recommender, ready for user interaction.
