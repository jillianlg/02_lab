const copyAndPush = (array, item) => {
    const copyArray = [...array, item];
    return copyArray;
};

module.exports = {
    copyAndPush
};