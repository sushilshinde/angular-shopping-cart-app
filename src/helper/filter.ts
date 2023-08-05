export const filterData = (
    array = [],
    filterBy = [],
    searchQuery = '',
    sortby = 'select'
) => {
    let shallowCopy = array.slice();
    if (filterBy.length === 2) {
        shallowCopy = shallowCopy.filter(
            item => item['price'] >= filterBy[0] && item['price'] <= filterBy[1]
        )
    }
    if (searchQuery !== '' && searchQuery) {
        shallowCopy = shallowCopy.filter(item =>
            item['title'].toLowerCase().includes(searchQuery.toLowerCase())
        )
    }
    if (sortby !== 'select') {
        shallowCopy = sortArray(shallowCopy, sortby)
    }
    return shallowCopy.slice()
}

export const sortArray = (array, sortText) => {
    if (sortText.includes('price')) {
        const sort = sortText.split('-')[0]
        if (sortText.includes('low')) {
            return array.sort((a, b) => a[sort] - b[sort]);
        }
        else {
            return array.sort((a, b) => b[sort] - a[sort]);
        }
    }
    return array.sort((a, b) => b[sortText] - a[sortText]);
};