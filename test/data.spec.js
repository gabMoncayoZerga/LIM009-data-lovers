const data = require('../src/data.js');
require('../src/data/injuries/injuries.js');

describe('injuries', () => {
      it('is a object', () => {
        expect(typeof data).toBe('object');
      });
    })