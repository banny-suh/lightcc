import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Fetch Gallery data (Posters, Bulletins, Prayers) from Firebase
 */
export const fetchGalleryData = async () => {
    try {
        // Fetch Posters
        const postersQuery = query(collection(db, 'posters'), orderBy('createdAt', 'desc'), limit(5));
        const postersSnap = await getDocs(postersQuery);
        const posters = postersSnap.docs.map(doc => doc.data().fileUrl || doc.data().url);

        const now = new Date();
        const sevenDaysAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));

        // Fetch Bulletins
        const bulletinsQuery = query(collection(db, 'bulletins'), orderBy('date', 'desc'), limit(4));
        const bulletinsSnap = await getDocs(bulletinsQuery);
        const bulletins = bulletinsSnap.docs.map(doc => {
            const data = doc.data();
            const itemDate = data.date ? new Date(data.date) : null;
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
                date: data.date,
                isNew: !!isNew,
                pages: pages
            };
        });

        // Fetch Prayers
        const prayersQuery = query(collection(db, 'prayers'), orderBy('date', 'desc'), limit(4));
        const prayersSnap = await getDocs(prayersQuery);
        const prayers = prayersSnap.docs.map(doc => {
            const data = doc.data();
            let dateStr = data.date;
            let itemDate = null;

            if (data.date && data.date.toDate) {
                itemDate = data.date.toDate();
                dateStr = itemDate.toLocaleDateString('ko-KR');
            } else if (data.date && data.date.seconds) {
                itemDate = new Date(data.date.seconds * 1000);
                dateStr = itemDate.toLocaleDateString('ko-KR');
            } else if (data.date) {
                itemDate = new Date(data.date);
            }

            const isNew = itemDate && itemDate > sevenDaysAgo;

            return {
                id: doc.id,
                title: data.title,
                date: dateStr,
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
