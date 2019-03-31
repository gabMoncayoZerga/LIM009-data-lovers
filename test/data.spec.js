const data = require('../src/data.js');
require('../src/data/injuries/injuries.js');

describe('injuries', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof INJURIES, 'object');
  });
});

