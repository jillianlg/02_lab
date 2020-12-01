const { getName } = require('./getName');

describe('getName', () => {
    it('return the name from the array', () => {
        const name = getName('spot');

        expect(name)
            .toEqual('spot')

    });
});