const { fetchQuotes } = require('./fetchQuotes')

describe('fetchQuotes', () => {

    it('fetches the Futurama Quote API and to return a single quote with name, text and image', async() => {
        const quote = {
            name: 'Bender',
            text: 'I\'m a fraud. A poor, lazy, sexy fraud.',
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        }

        expect(quote).toEqual({
                name: 'Bender',
                text: 'I\'m a fraud. A poor, lazy, sexy fraud.',
                image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        });
    });
});