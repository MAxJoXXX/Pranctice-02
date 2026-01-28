document.addEventListener('DOMContentLoaded', () => {
    const recommendButton = document.getElementById('recommendButton');
    const menuRecommendation = document.getElementById('menuRecommendation');

    const dinnerMenus = [
        '김치찌개',
        '된장찌개',
        '비빔밥',
        '불고기',
        '제육볶음',
        '삼겹살',
        '치킨',
        '피자',
        '파스타',
        '초밥'
    ];

    recommendButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const recommendedMenu = dinnerMenus[randomIndex];
        menuRecommendation.textContent = `오늘의 추천 메뉴: ${recommendedMenu}`;
    });
});
