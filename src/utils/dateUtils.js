/**
 * Parses various date formats into a Date object.
 * @param {any} dateValue 
 * @returns {Date|null}
 */
export const parseDate = (dateValue) => {
    if (!dateValue) return null;
    if (dateValue instanceof Date) return dateValue;
    if (dateValue.toDate && typeof dateValue.toDate === 'function') return dateValue.toDate();
    if (dateValue.seconds !== undefined) return new Date(dateValue.seconds * 1000);
    const date = new Date(dateValue);
    return isNaN(date.getTime()) ? null : date;
};

/**
 * Safely formats a date value into ko-KR locale string.
 * Handles Firestore Timestamps, Date objects, numeric timestamps, and strings.
 * @param {any} dateValue - The date value to format.
 * @param {string} fallback - The fallback value if dateValue is null or undefined.
 * @returns {string} - Formatted date string.
 */
export const formatDate = (dateValue, fallback = '') => {
    if (!dateValue) return fallback;

    // If it's already a string, return it (e.g. "2024.03.01")
    if (typeof dateValue === 'string') return dateValue;

    const date = parseDate(dateValue);
    if (date) {
        return date.toLocaleDateString('ko-KR');
    }

    return String(dateValue);
};

/**
 * Gets today's date in YYYY-MM-DD format.
 * @returns {string}
 */
export const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
