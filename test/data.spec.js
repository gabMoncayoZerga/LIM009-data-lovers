global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');


describe('injuries', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof INJURIES, 'object');
  });
});
