global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');


let DATOS_FILTRADOS_TEST_1;
let DATOS_FILTRADOS_AÑOS;
beforeEach(() => {

DATOS_FILTRADOS_TEST_1 = [

]

DATOS_FILTRADOS_AÑOS = [

]

});

describe('showCategory', () => {

  it('debería ser una función', () => {
    assert.equal(typeof showCategory, 'function');
  });

  it('Test 1', () => {
    assert.deepEqual(showCategory('Total_Injured_Persons'), DATOS_FILTRADOS_TEST_1);
  });
})


describe('FilterYear', () => {

  it('debería ser una función', () => {
    assert.equal(typeof FilterYear, 'function');
  });

  it('Test 1', () => {
    assert.deepEqual(FilterYear(1991), DATOS_FILTRADOS_AÑOS);
  });
})
