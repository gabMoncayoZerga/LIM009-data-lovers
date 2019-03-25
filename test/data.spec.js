global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');


describe('injuries', () => {
  it('debería de ser un objeto', () => {
    expect(typeof injuries).toBe('object');
  });

//const input = [{Year: '1960-01-04'}, {Year: '1965-01-04'}, {Year: '1970-01-04'}];
const input=[
    {

  }
]
const outputFilterYear=[
  {'Total_Injured_Persons_Recreational_Boating': 929,
   'Total_Injured_Persons_Train_Accidents_Rail_Roads': null,
   'Total_Injured_Persons_Transit_Non_Rail': null, Year: 1960},
  {'Total_Injured_Persons_Water': null, 'Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties': null, 'Total_Injured_Persons_Water_Vessel_Related': 97, Year: 1975},
];

const outputFilterCategory=

/*TEST FUNCION DE FILTRO POR AÑO */
describe('FilterYear', () => {

  it('debería ser una función', () => {
    assert.equal(typeof FilterYear, 'function');
  });

  it('debería retornar un array de objetos con categorias y su valor por año', () => {
    assert.toEqual(FilterYear(1991), outputFilterYear);
  });
})

/*TEST FUNCION DE FILTRO POR CATEGORIA */
describe('showCategory', () => {

  it('debería ser una función', () => {
    assert.toEqual(typeof showCategory, 'function');
  });

  it('debería retornar un array de objetos con el año y valor del accidente', () => {
    assert.toEqual(showCategory('Total_Injured_Persons'), outputFilterCategory);
  });
});
