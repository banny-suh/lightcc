import { collection, getDocs, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Fetch church bulletin data from Firebase
 * @returns {Promise<Array>} Array of bulletin objects
 */
export const fetchBulletins = async () => {
    try {
        const q = query(collection(db, 'bulletins'), orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                title: data.title,
                date: data.date,
                // Map Firebase 'files' array to local 'pages' array of URLs
                pages: data.files ? data.files.map(file => file.url) : (data.fileUrl ? [data.fileUrl] : [])
            };
        });
    } catch (error) {
        console.error('Error fetching bulletins from Firestore:', error);
        return [];
    }
};

/**
 * Fetch bulletin by ID from Firebase
 * @param {string} id - Bulletin ID
 * @returns {Promise<Object|null>} Bulletin object or null if not found
 */
export const fetchBulletinById = async (id) => {
    try {
        const docRef = doc(db, 'bulletins', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                id: docSnap.id,
                title: data.title,
                date: data.date,
                pages: data.files ? data.files.map(file => file.url) : (data.fileUrl ? [data.fileUrl] : [])
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching bulletin by ID:', error);
        return null;
    }
};
