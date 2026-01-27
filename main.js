class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = document.getElementById('product-card-template');
        // The new template is defined within the component itself for better encapsulation
        const newTemplate = document.createElement('template');
        newTemplate.innerHTML = this.getTemplate();
        
        this.shadowRoot.appendChild(newTemplate.content.cloneNode(true));
        
        this.populateData();
        this.startCountdown();
    }

    populateData() {
        const shadow = this.shadowRoot;
        shadow.querySelector('.product-title').textContent = this.getAttribute('data-name');
        shadow.querySelector('.product-image img').src = this.getAttribute('data-image');
        shadow.querySelector('.product-image img').alt = this.getAttribute('data-name');
        
        const rating = parseInt(this.getAttribute('data-rating'), 10);
        const ratingContainer = shadow.querySelector('.product-rating');
        ratingContainer.innerHTML = '★'.repeat(rating) + '☆'.repeat(5 - rating);

        const originalPrice = parseFloat(this.getAttribute('data-original-price'));
        const finalPrice = parseFloat(this.getAttribute('data-final-price'));
        const discountRate = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);

        shadow.querySelector('.discount-rate').textContent = `${discountRate}%`;
        shadow.querySelector('.final-price').textContent = `\\${finalPrice.toLocaleString()}`;
        shadow.querySelector('.original-price').textContent = `\\${originalPrice.toLocaleString()}`;
    }

    startCountdown() {
        const countdownEl = this.shadowRoot.querySelector('.countdown');
        let timeLeft = parseInt(this.getAttribute('data-time-left'), 10);

        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                countdownEl.textContent = "Offer Ended!";
                return;
            }

            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            countdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;
        }, 1000);
    }
    
    getTemplate() {
        return `
            <style>
                :host {
                    display: block;
                    border-radius: 15px;
                    background: var(--white, #fff);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                :host(:hover) {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
                }
                .product-image {
                    overflow: hidden;
                }
                .product-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    aspect-ratio: 1 / 1;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }
                :host(:hover) .product-image img {
                    transform: scale(1.1);
                }
                .product-info {
                    padding: 1rem;
                }
                .product-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin: 0 0 0.5rem;
                }
                .product-rating {
                    color: oklch(80% 0.2 85); /* Gold color */
                    margin-bottom: 0.5rem;
                }
                .product-price {
                    display: flex;
                    align-items: baseline;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                .discount-rate {
                    color: var(--accent-color, oklch(75% 0.3 330));
                    font-size: 1.5rem;
                    font-weight: 900;
                }
                .final-price {
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                .original-price {
                    text-decoration: line-through;
                    color: #999;
                    font-size: 1rem;
                }
                .product-timer {
                    padding: 0 1rem 1rem;
                    text-align: center;
                    font-weight: 700;
                }
                .product-timer .countdown {
                    color: var(--primary-color, oklch(65% 0.25 260));
                    margin-left: 0.5rem;
                }
                .add-to-cart-button {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: var(--white, #fff);
                    border: none;
                    width: 100%;
                    padding: 1rem;
                    font-size: 1.2rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: filter 0.3s, box-shadow 0.3s;
                    text-transform: uppercase;
                }
                .add-to-cart-button:hover {
                    filter: brightness(1.1);
                    box-shadow: 0 5px 15px var(--primary-color, oklch(65% 0.25 260 / 50%));
                }
            </style>
            <div class="product-card">
                <div class="product-image">
                    <img src="" alt="Product Image">
                </div>
                <div class="product-info">
                    <h3 class="product-title"></h3>
                    <div class="product-rating"></div>
                    <div class="product-price">
                        <span class="discount-rate"></span>
                        <span class="final-price"></span>
                        <span class="original-price"></span>
                    </div>
                </div>
                <div class="product-timer">
                    <span>⏳ Time Left:</span>
                    <span class="countdown"></span>
                </div>
                <button class="add-to-cart-button">Add to Cart</button>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);

const products = [
    {
        name: 'Modern Stylish Jacket',
        image: 'https://picsum.photos/seed/fashion1/400/400',
        rating: 4,
        originalPrice: 150000,
        finalPrice: 89000,
        timeLeft: 7200 // 2 hours
    },
    {
        name: 'Classic Leather Boots',
        image: 'https://picsum.photos/seed/fashion2/400/400',
        rating: 5,
        originalPrice: 250000,
        finalPrice: 175000,
        timeLeft: 18000 // 5 hours
    },
    {
        name: 'Elegant Wrist Watch',
        image: 'https://picsum.photos/seed/fashion3/400/400',
        rating: 5,
        originalPrice: 450000,
        finalPrice: 399000,
        timeLeft: 3600 // 1 hour
    },
    {
        name: 'Designer Sunglasses',
        image: 'https://picsum.photos/seed/fashion4/400/400',
        rating: 4,
        originalPrice: 120000,
        finalPrice: 99000,
        timeLeft: 86400 // 24 hours
    },
    {
        name: 'Chic Handbag',
        image: 'https://picsum.photos/seed/fashion5/400/400',
        rating: 3,
        originalPrice: 180000,
        finalPrice: 120000,
        timeLeft: 4200
    },
    {
        name: 'Comfy Knit Sweater',
        image: 'https://picsum.photos/seed/fashion6/400/400',
        rating: 5,
        originalPrice: 95000,
        finalPrice: 55000,
        timeLeft: 9000
    }
];

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    const productCard = document.createElement('product-card');
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-image', product.image);
    productCard.setAttribute('data-rating', product.rating);
    productCard.setAttribute('data-original-price', product.originalPrice);
    productCard.setAttribute('data-final-price', product.finalPrice);
    productCard.setAttribute('data-time-left', product.timeLeft);
    productGrid.appendChild(productCard);
});
