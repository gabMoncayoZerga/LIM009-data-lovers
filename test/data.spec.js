global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');



describe('injuries', () => {
  it('debería de ser un objeto', () => {
    expect(typeof injuries).toBe('object');
  });
});
