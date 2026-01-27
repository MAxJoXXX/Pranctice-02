document.addEventListener('DOMContentLoaded', () => {
    const flowerContainer = document.createElement('div');
    flowerContainer.id = 'flower-container';
    document.body.appendChild(flowerContainer);

    const flowers = ['🌸', '🌺', '🌼', '🌷', '🌻'];

    document.addEventListener('mousemove', (e) => {
        // A throttle to prevent too many elements from being created at once
        if (Math.random() > 0.5) {
            createFlower(e.clientX, e.clientY);
        }
    });

    function createFlower(x, y) {
        const flower = document.createElement('span');
        flower.classList.add('flower');
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Position at cursor
        flower.style.left = x + 'px';
        flower.style.top = y + 'px';

        // Randomize properties
        const size = Math.random() * 20 + 10; // 10px to 30px
        flower.style.fontSize = size + 'px';

        const animationDuration = Math.random() * 3 + 2; // 2s to 5s
        flower.style.animationDuration = animationDuration + 's';

        // Horizontal movement
        const sway = Math.random() * 200 - 100; // -100px to 100px
        flower.style.setProperty('--sway', sway + 'px');

        flowerContainer.appendChild(flower);

        // Remove flower after animation
        flower.addEventListener('animationend', () => {
            flower.remove();
        });
    }
});
