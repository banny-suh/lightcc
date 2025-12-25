/**
 * Mock API for Gallery data (Posters, Bulletins, Prayers)
 */

const galleryData = {
    posters: [
        `${import.meta.env.BASE_URL}images/poster1.png`,
        `${import.meta.env.BASE_URL}images/poster2.png`,
        `${import.meta.env.BASE_URL}images/poster3.png`,
        `${import.meta.env.BASE_URL}images/poster4.png`,
        `${import.meta.env.BASE_URL}images/poster5.png`,
    ],
    bulletins: [
        { title: '2025. 11. 30. 빛의주보', date: '2025-11-29' },
        { title: '2025. 11. 23 빛의주보', date: '2025-11-22' },
        { title: '2025. 11. 16 빛의주보', date: '2025-11-15' },
        { title: '2025. 11. 9. 빛의주보', date: '2025-11-08' },
    ],
    prayers: [
        { title: "오늘의 기도 71. '더 좋은 길로 인도하시는 분이십니다'", date: '20시간전', isNew: true },
        { title: "오늘의 기도 70. '말과 병거를 의지하지 않게 하소서'", date: '20시간전', isNew: true },
        { title: '오늘의 기도 69. 신중한 삶을 살아가게 하소서', date: '2025-12-01' },
        { title: '오늘의 기도 68. 새로운 기회를 주시니 감사합니다', date: '2025-12-01' },
    ]
};

export const fetchGalleryData = async () => {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(galleryData);
        }, 500);
    });
};
