import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';
import { db } from '../firebase';
import { parseDate } from '../utils/dateUtils';

/**
 * Fetch Gallery data (Posters, Bulletins, Prayers) from Firebase
 */
export const fetchGalleryData = async () => {
    try {
        // Fetch Posters
        const postersQuery = query(
            collection(db, 'posters'),
            where('deletedAt', '==', null),
            orderBy('createdAt', 'desc'),
            limit(5)
        );
        const postersSnap = await getDocs(postersQuery);
        const posters = postersSnap.docs.map(doc => {
            const data = doc.data();
            return data.fileUrl || data.url;
        });

        const now = new Date();
        const sevenDaysAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));

        // Fetch Bulletins
        const bulletinsQuery = query(
            collection(db, 'bulletins'),
            where('deletedAt', '==', null),
            orderBy('createdAt', 'desc'),
            limit(4)
        );
        const bulletinsSnap = await getDocs(bulletinsQuery);
        const bulletins = bulletinsSnap.docs.map(doc => {
            const data = doc.data();
            const itemDate = parseDate(data.createdAt);
            const isNew = itemDate && itemDate > sevenDaysAgo;

            // Handle legacy structure: files array vs fileUrl
            let pages = [];
            if (data.files && Array.isArray(data.files)) {
                pages = data.files.map(f => f.url);
            } else if (data.fileUrl) {
                pages = [data.fileUrl];
            } else if (data.url) {
                pages = [data.url];
            }

            return {
                id: doc.id,
                title: data.title,
                createdAt: data.createdAt,
                isNew: !!isNew,
                pages: pages
            };
        });

        // Fetch Prayers
        const prayersQuery = query(
            collection(db, 'prayers'),
            where('deletedAt', '==', null),
            orderBy('createdAt', 'desc'),
            limit(4)
        );
        const prayersSnap = await getDocs(prayersQuery);
        const prayers = prayersSnap.docs.map(doc => {
            const data = doc.data();
            const itemDate = parseDate(data.createdAt);
            const isNew = itemDate && itemDate > sevenDaysAgo;

            return {
                id: doc.id,
                title: data.title,
                createdAt: data.createdAt,
                isNew: !!isNew,
                content: data.content || ''
            };
        });

        return {
            posters,
            bulletins,
            prayers
        };
    } catch (error) {
        console.error('Error fetching gallery data from Firestore:', error);
        return {
            posters: [],
            bulletins: [],
            prayers: []
        };
    }
};
