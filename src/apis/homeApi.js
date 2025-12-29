/**
 * Mock API for Home page data (Hero Slides)
 */

const heroSlides = [
    {
        id: 1,
        image: `${import.meta.env.BASE_URL}images/slide1.jpg`,
    },
    {
        id: 2,
        image: `${import.meta.env.BASE_URL}images/slide2.jpg`,
    },
    {
        id: 3,
        image: `${import.meta.env.BASE_URL}images/slide3.jpg`,
    }
];

export const fetchHeroSlides = async () => {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(heroSlides);
        }, 500);
    });
};

export const fetchSermonInfo = async () => {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                thumbnail: `${import.meta.env.BASE_URL}images/sermon_thumb.jpg`,
                videoUrl: "https://www.youtube.com/embed/LpWmmk8GCOI",
                title: "주일예배설교",
                moreLink: "https://www.youtube.com/playlist?list=PLb5IL80VvnmxMVgz1wzTuttlCCSqVxnJw"
            });
        }, 500);
    });
};
