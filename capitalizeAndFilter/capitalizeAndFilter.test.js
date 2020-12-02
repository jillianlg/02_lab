const { capitalizeAndFilter } = require('./capitalizeAndFilter');

describe('capitalizeAndFilter', () => {
    const dogs = ['spot', 'rover', 'bingo', 'fred'];
    
    it('returns an array of strings capitalize all strings and filter out any string that starts with the letter f.', () => {
        const newDogs = capitalizeAndFilter(dogs);

        expect(newDogs)
            .toEqual(['SPOT', 'ROVER', 'BINGO'])

    });

});