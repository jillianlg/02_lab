const { getName } = require('./getName');

describe('getName', () => {
    const spot = {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
    };

    it('return the name from the array', () => {
        const name = getName(spot);

        expect(name)
            .toEqual('spot')

    });
});