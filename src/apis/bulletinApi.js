/**
 * Mock API for Church Bulletin data
 * Each bulletin has 6 pages
 */

const bulletinData = [
    {
        id: 1,
        title: '2025. 01. 26 빛의주보',
        date: '2025-01-26',
        pages: [
            `${import.meta.env.BASE_URL}/bulletin/20251221-1.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-2.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-3.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-4.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-5.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-6.jpg`
        ]
    },
    {
        id: 2,
        title: '2025. 01. 19 빛의주보',
        date: '2025-01-19',
        pages: [
            `${import.meta.env.BASE_URL}/bulletin/20251221-1.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-2.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-3.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-4.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-5.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-6.jpg`
        ]
    },
    {
        id: 3,
        title: '2025. 01. 12 빛의주보',
        date: '2025-01-12',
        pages: [
            `${import.meta.env.BASE_URL}/bulletin/20251221-1.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-2.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-3.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-4.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-5.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-6.jpg`
        ]
    },
    {
        id: 4,
        title: '2025. 01. 05 빛의주보',
        date: '2025-01-05',
        pages: [
            `${import.meta.env.BASE_URL}/bulletin/20251221-1.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-2.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-3.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-4.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-5.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-6.jpg`
        ]
    },
    {
        id: 5,
        title: '2024. 12. 29 빛의주보',
        date: '2024-12-29',
        pages: [
            `${import.meta.env.BASE_URL}/bulletin/20251221-1.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-2.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-3.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-4.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-5.jpg`,
            `${import.meta.env.BASE_URL}/bulletin/20251221-6.jpg`
        ]
    }
];

/**
 * Fetch church bulletin data
 * @returns {Promise<Array>} Array of bulletin objects
 */
export const fetchBulletins = async () => {
    // Simulate API call delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bulletinData);
        }, 0);
    });
};

/**
 * Fetch bulletin by ID
 * @param {number} id - Bulletin ID
 * @returns {Promise<Object|null>} Bulletin object or null if not found
 */
export const fetchBulletinById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const bulletin = bulletinData.find(b => b.id === id);
            resolve(bulletin || null);
        }, 0);
    });
};
