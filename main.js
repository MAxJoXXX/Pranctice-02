class LottoBall extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');

        const number = document.createElement('span');
        number.textContent = this.getAttribute('number');

        const style = document.createElement('style');
        style.textContent = `
            .lotto-ball {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                font-weight: bold;
                color: var(--white, #fff);
                background-color: var(--secondary-color, #f5a623);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(ball);
        ball.appendChild(number);
    }

    static get observedAttributes() {
        return ['number'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'number') {
            this.shadowRoot.querySelector('span').textContent = newValue;
        }
    }
}

customElements.define('lotto-ball', LottoBall);

const lottoNumbersContainer = document.getElementById('lotto-numbers-container');
const drawButton = document.getElementById('draw-button');

drawButton.addEventListener('click', () => {
    drawLottoNumbers();
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers);
}

function drawLottoNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = generateLottoNumbers();

    numbers.forEach((number, index) => {
        setTimeout(() => {
            const lottoBall = document.createElement('lotto-ball');
            lottoBall.setAttribute('number', number);
            lottoNumbersContainer.appendChild(lottoBall);
        }, index * 300);
    });
}

// Initial draw
drawLottoNumbers();
