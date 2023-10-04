/**
 * Filters an array based on specified criteria.
 * @param {Array} array - The input array to be filtered.
 * @param {Array} filterBy - An array containing filter range [min, max].
 * @param {string} searchQuery - The search query to filter items by title.
 * @param {string} sortby - The sorting criteria.
 * @returns {Array} - The filtered and sorted array.
 */
export const filterData = (array = [], filterBy = [], searchQuery = '', sortby = 'select') => {
    let shallowCopy = array.slice();

    // Filter by price range if both filter values are provided
    if (filterBy.length === 2) {
        shallowCopy = shallowCopy.filter(
            item => item['price'] >= filterBy[0] && item['price'] <= filterBy[1]
        );
    }

    // Filter by title based on search query
    if (searchQuery !== '' && searchQuery) {
        shallowCopy = shallowCopy.filter(item =>
            item['title'].toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Sort the array based on the specified criteria
    if (sortby !== 'select') {
        shallowCopy = sortArray(shallowCopy, sortby);
    }

    return shallowCopy.slice(); // Return a shallow copy of the filtered and sorted array
};

/**
 * Sorts an array based on the specified sorting criteria.
 * @param {Array} array - The array to be sorted.
 * @param {string} sortText - The sorting criteria.
 * @returns {Array} - The sorted array.
 */
export const sortArray = (array, sortText) => {
    if (sortText.includes('price')) {
        const sort = sortText.split('-')[0];

        // Sort by price in ascending or descending order
        if (sortText.includes('low')) {
            return array.sort((a, b) => a[sort] - b[sort]);
        } else {
            return array.sort((a, b) => b[sort] - a[sort]);
        }
    }

    // Sort by other criteria
    return array.sort((a, b) => b[sortText] - a[sortText]);
};
