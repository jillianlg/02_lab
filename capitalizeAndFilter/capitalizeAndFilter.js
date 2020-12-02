const capitalizeAndFilter = (array) => {

    return array
    .filter(item => {
        return !item.startsWith('f');
    })
    .map(item => {
        return item.toUpperCase();
    })   
}

module.exports = {
    capitalizeAndFilter
};