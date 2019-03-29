global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');

describe('injuries', () => {
  it('debería de ser un objeto', () => {
    assert(typeof injuries).equal('object');
  });
});
