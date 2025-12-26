/**
 * Mock API for Event Gallery data
 */

const eventGalleryData = [
    {
        id: 1,
        title: '2024 성탄절 예배',
        date: '2024-12-25',
        image: `${import.meta.env.BASE_URL}images/church_event1.jpg`
    },
    {
        id: 2,
        title: '추수감사절',
        date: '2024-11-24',
        image: `${import.meta.env.BASE_URL}images/church_event2.jpg`
    },
    {
        id: 3,
        title: '여름수련회',
        date: '2024-08-15',
        image: `${import.meta.env.BASE_URL}images/church_event3.jpg`
    },
    {
        id: 4,
        title: '부활절 연합예배',
        date: '2024-03-31',
        image: `${import.meta.env.BASE_URL}images/church_event4.jpg`
    },
    {
        id: 5,
        title: '신년 기도회',
        date: '2025-12-25',
        image: `${import.meta.env.BASE_URL}images/church_event5.jpg`
    }
];

/**
 * Fetch event gallery data
 * @returns {Promise<Array>} Array of event objects
 */
export const fetchEventGallery = async () => {
    // Simulate API call delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(eventGalleryData);
        }, 300);
    });
};

/**
 * Fetch event by ID
 * @param {number} id - Event ID
 * @returns {Promise<Object|null>} Event object or null if not found
 */
export const fetchEventById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const event = eventGalleryData.find(e => e.id === id);
            resolve(event || null);
        }, 300);
    });
};
