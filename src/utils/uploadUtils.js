import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from '../firebase';

/**
 * Uploads a file to Firebase Storage.
 * @param {File} file - The file object to upload.
 * @param {string} folder - The folder path (e.g., 'bulletins', 'posters').
 * @returns {Promise<{url: string, path: string, name: string}>} - The download URL and metadata.
 */
export const uploadFile = async (file, folder) => {
    if (!file) return null;

    // Create a unique file name using timestamp to prevent overwrites
    const fileName = `${Date.now()}_${file.name}`;
    const fullPath = `${folder}/${fileName}`;
    const storageRef = ref(storage, fullPath);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return {
            url: downloadURL,
            path: fullPath,
            name: file.name
        };
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

/**
 * Uploads multiple files to Firebase Storage.
 * @param {File[]} files - Array of files to upload.
 * @param {string} folder - The folder path.
 * @returns {Promise<Array<{url: string, path: string, name: string}>>} - Array of upload results.
 */
export const uploadMultipleFiles = async (files, folder) => {
    if (!files || files.length === 0) return [];

    try {
        const uploadPromises = Array.from(files).map(file => uploadFile(file, folder));
        const results = await Promise.all(uploadPromises);
        return results;
    } catch (error) {
        console.error("Error uploading multiple files:", error);
        throw error;
    }
};

/**
 * Deletes a file from Firebase Storage.
 * @param {string} datePath - The full path of the file to delete (e.g., 'bulletins/123456_file.pdf') or the HTTP URL.
 * If URL is provided, it attempts to extract the ref. Ideally pass the storage path.
 */
export const deleteFile = async (filePath) => {
    if (!filePath) return;

    // Create a reference to the file to delete
    const fileRef = ref(storage, filePath);

    try {
        await deleteObject(fileRef);
        console.log("File deleted successfully:", filePath);
    } catch (error) {
        console.error("Error deleting file:", error);
        // We can optionally ignore 'object-not-found' if that's desired behavior
    }
};
