const capitalizeAndFilter = (array) => {

    return array
    .filter(item => !item.startsWith('f'))
    .map(item => item.toUpperCase())   
}

module.exports = {
    capitalizeAndFilter
};

// const capitalizeAndFilter = (array) => {

//     return array
//     .filter(item => {
//         return !item.startsWith('f');
//     })
//     .map(item => {
//         return item.toUpperCase();
//     })   
// }