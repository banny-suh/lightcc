import { collection, getDocs, query, orderBy, doc, getDoc, where } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Fetch event gallery data (from posters collection)
 * @returns {Promise<Array>} Array of event objects
 */
export const fetchEventGallery = async () => {
    try {
        const q = query(
            collection(db, 'posters'),
            where('deletedAt', '==', null),
            orderBy('createdAt', 'desc')
        );
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs
            .map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    title: data.title,
                    date: data.createdAt,
                    image: data.url, // Map 'url' to 'image' for component compatibility
                    deletedAt: data.deletedAt
                };
            });
    } catch (error) {
        console.error('Error fetching event gallery:', error);
        return [];
    }
};

/**
 * Fetch event by ID
 * @param {string} id - Event ID
 * @returns {Promise<Object|null>} Event object or null if not found
 */
export const fetchEventById = async (id) => {
    try {
        const docRef = doc(db, 'posters', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.deletedAt) return null;
            return {
                id: docSnap.id,
                title: data.title,
                date: data.createdAt,
                image: data.url
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching event by ID:', error);
        return null;
    }
};
