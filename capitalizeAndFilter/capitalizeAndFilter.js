const capitalizeAndFilter = (array) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        const capitalItem = item.toUpperCase();

        if(capitalItem.startsWith('F')) {
            continue;
        }else {
            newArray.push(capitalItem)
        }
    }
    return newArray
};

module.exports = {
    capitalizeAndFilter
};