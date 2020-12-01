const { getName } = require('./getName');

describe('getName', () => {

    it('return the spot from the array', () => {
        const spot = {
            name: 'spot',
            age: 5,
            weight: '20 lbs'
        };
        
        const name = getName(spot);

        expect(name)
            .toEqual('spot')

    });

    it('return the character from the array', () => {
        
        const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
        getName(character) // returns Aang

        const name = getName(character);

        expect(name)
            .toEqual('Aang')

    });
});