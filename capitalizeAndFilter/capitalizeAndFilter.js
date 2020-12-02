const capitalizeAndFilter = (array) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        console.log(item);
        const capitalItem = item.toUpperCase();
        console.log(capitalItem);
    }

    return newArray
};

module.exports = {
    capitalizeAndFilter
};