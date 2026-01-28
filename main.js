document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsSection = document.getElementById('results-section');

    // Hardcoded database for restaurant recommendations
    const restaurantData = {
        "로마역 맛집": [
            {
                name: "Trattoria da Enzo",
                address: "Via dei Vascellari, 29, 00153 Roma RM, Italy",
                image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Carbonara",
                reason: "사람들의 댓글에 따르면, '진정한 로마의 맛을 느낄 수 있는 곳'이라며 현지인과 관광객 모두에게 극찬을 받습니다. 특히 까르보나라 파스타와 소꼬리찜(코다 알라 바치나라)은 인생 요리라는 평이 많습니다."
            },
            {
                name: "Roscioli Salumeria con Cucina",
                address: "Via dei Giubbonari 21, 00186 Roma RM, Italy",
                image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Deli+Cheese",
                reason: "이곳은 '신선한 재료의 끝판왕'으로 불립니다. 댓글을 보면 '살라미와 치즈의 풍미가 잊을 수 없다'는 칭찬이 자자하며, 예약 없이는 방문이 거의 불가능할 정도로 인기가 높습니다."
            },
            {
                name: "Da Francesco",
                address: "Piazza del Fico, 29, 00186 Roma RM, Italy",
                image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Roman+Pizza",
                reason: "'피자가 생각날 때 무조건 가야 할 곳'이라는 댓글이 많습니다. 특히 화덕에서 갓 구운 트러플 피자는 '한 입 먹는 순간 천상의 맛을 경험했다'는 후기가 지배적입니다."
            },
            {
                name: "Felice a Testaccio",
                address: "Via Mastro Giorgio, 29, 00153 Rome, Lazio, Italy",
                image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Cacio+e+Pepe",
                reason: "카초 에 페페(Cacio e Pepe) 파스타의 성지로 알려져 있습니다. '직원이 눈앞에서 치즈를 비벼주는 퍼포먼스와 그 맛은 로마 여행의 하이라이트'라는 댓글이 이 식당의 인기를 증명합니다."
            },
            {
                name: "Trapizzino",
                address: "Via Giovanni Giolitti 36, 00185 Roma RM, Italy",
                image: "https://via.placeholder.com/150/FF6347/FFFFFF?text=Trapizzino",
                reason: "로마식 길거리 음식을 현대적으로 재해석한 곳입니다. '피자 도우 안에 다양한 속을 채워 넣은 트라피지노는 가성비와 맛을 모두 잡았다'는 댓글이 많으며, 간단하면서도 특별한 한 끼로 강력 추천됩니다."
            }
        ]
    };

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        renderResults(query);
    });

    function renderResults(query) {
        const results = restaurantData[query];
        resultsSection.innerHTML = ''; // Clear previous results

        if (results) {
            results.forEach(restaurant => {
                const card = document.createElement('div');
                card.className = 'restaurant-card';
                
                const title = document.createElement('h3');
                title.textContent = restaurant.name;

                const address = document.createElement('p');
                address.className = 'restaurant-address';
                address.textContent = restaurant.address;

                const image = document.createElement('img');
                image.src = restaurant.image;
                image.alt = restaurant.name;
                image.className = 'restaurant-image';
                
                const reason = document.createElement('p');
                reason.className = 'reason';
                reason.textContent = restaurant.reason;

                card.appendChild(title);
                card.appendChild(address);
                card.appendChild(image);
                card.appendChild(reason);
                resultsSection.appendChild(card);
            });
        } else {
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = `'${query}'에 대한 맛집 정보를 찾을 수 없습니다. '로마역 맛집'으로 검색해보세요.`;
            resultsSection.appendChild(noResultsMessage);
        }
    }
}); // ADDED THIS MISSING CLOSING BRACE

