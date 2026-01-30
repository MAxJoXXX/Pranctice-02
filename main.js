document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsSection = document.getElementById('results-section');
    const featuredSection = document.getElementById('featured-section');

    // Hardcoded database for restaurant recommendations
    const restaurantData = {
        "로마역 맛집": [
            {
                name: "Trattoria da Enzo",
                address: "Via dei Vascellari, 29, 00153 Roma RM, Italy",
                category: "이탈리안",
                rating: 4.5,
                description: "현지인과 관광객 모두에게 사랑받는 정통 로마 요리 전문점. 대표 메뉴인 까르보나라와 소꼬리찜이 일품입니다.",
                image: "https://source.unsplash.com/400x300/?pasta,rome"
            },
            {
                name: "Roscioli Salumeria con Cucina",
                address: "Via dei Giubbonari 21, 00186 Roma RM, Italy",
                category: "델리 & 와인바",
                rating: 4.6,
                description: "최고급 햄, 치즈와 함께 훌륭한 파스타를 맛볼 수 있는 곳. 예약은 필수이며, 와인 애호가들의 성지입니다.",
                image: "https://source.unsplash.com/400x300/?wine,charcuterie"
            },
            {
                name: "Da Francesco",
                address: "Piazza del Fico, 29, 00186 Roma RM, Italy",
                category: "피자",
                rating: 4.4,
                description: "나보나 광장 근처에 위치한 인기 피자 레스토랑. 특히 화덕에서 구운 바삭한 트러플 피자가 유명합니다.",
                image: "https://source.unsplash.com/400x300/?pizza"
            }
        ],
        "뉴욕 타임스퀘어 맛집": [
            {
                name: "Joe's Pizza",
                address: "1435 Broadway, New York, NY 10018",
                category: "피자",
                rating: 4.5,
                description: "뉴욕을 대표하는 클래식 슬라이스 피자. 저렴한 가격으로 정통 뉴욕 피자를 맛볼 수 있어 항상 붐빕니다.",
                image: "https://source.unsplash.com/400x300/?new-york,pizza"
            },
            {
                name: "Los Tacos No. 1",
                address: "229 W 43rd St, New York, NY 10036",
                category: "멕시칸",
                rating: 4.7,
                description: "첼시 마켓에서 시작된 유명 타코 전문점. 신선한 재료로 만든 타코와 퀘사디아가 일품입니다.",
                image: "https://source.unsplash.com/400x300/?tacos"
            }
        ]
    };

    // Render featured restaurants on page load
    renderFeatured();

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        renderResults(query);
    });

    function renderFeatured() {
        const allRestaurants = Object.values(restaurantData).flat();
        const shuffled = allRestaurants.sort(() => 0.5 - Math.random());
        const featured = shuffled.slice(0, 2); // Get first 2 random restaurants

        featured.forEach(restaurant => {
            const card = createRestaurantCard(restaurant);
            featuredSection.appendChild(card);
        });
    }

    function renderResults(query) {
        // Find a key in restaurantData that contains the query
        const matchingKey = Object.keys(restaurantData).find(key => key.toLowerCase().includes(query));
        const results = restaurantData[matchingKey];

        resultsSection.innerHTML = ''; // Clear previous results

        if (results) {
            results.forEach(restaurant => {
                const card = createRestaurantCard(restaurant);
                resultsSection.appendChild(card);
            });
        } else {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = `'${query}'에 대한 맛집 정보를 찾을 수 없습니다. '로마역' 또는 '뉴욕' 등으로 검색해보세요.`;
            resultsSection.appendChild(noResultsMessage);
        }
    }

    function createRestaurantCard(restaurant) {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        
        const title = document.createElement('h3');
        title.textContent = restaurant.name;

        const details = document.createElement('p');
        details.className = 'restaurant-details';
        details.textContent = `카테고리: ${restaurant.category} | 평점: ${restaurant.rating} ★`;
        
        const description = document.createElement('p');
        description.textContent = restaurant.description;

        const image = document.createElement('img');
        image.src = restaurant.image;
        image.alt = restaurant.name;
        image.className = 'restaurant-image';

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(details);
        card.appendChild(description);
        return card;
    }
});