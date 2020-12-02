const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush', () => {
    const numbers = [1, 2, 3];
    
    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const pushedNumber = copyAndPush(numbers, 4);

        expect(pushedNumber)
            .toEqual([1, 2, 3, 4])

    });

    it('returns a original array', () => {

        expect(numbers)
            .toEqual([1, 2, 3])

    });
});