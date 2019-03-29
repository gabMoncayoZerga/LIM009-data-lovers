global.window = global;
global.assert = require('chai').assert;
require('../src/data/injuries/injuries.js');
require('../src/data.js');


describe('Injuries', () => {
  it('debería de ser un objeto', () => {
    expect(typeof INJURIES).toBe('object');
  });

//const input = [{Year: '1960-01-04'}, {Year: '1965-01-04'}, {Year: '1970-01-04'}];
const input=[{
}];

const outputFilterYear=[
    {'Total_Injured_Persons_Recreational_Boating': 929,
    'Total_Injured_Persons_Train_Accidents_Rail_Roads': null,
    'Total_Injured_Persons_Transit_Non_Rail': null,
    'Total_Injured_Persons_Water': null,
    'Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties': null,
    'Total_Injured_Persons_Water_Vessel_Related': 97, },
];

const outputFilterCategory=[{ }];

const outputSortedData=[{ }];

const inputCompute =[{ }];

const outputCompute=[{ }];

/*TEST FUNCION DE FILTRO POR AÑO */
describe('FilterYear', () => {

  it('debería ser una función', () => {
    assert.toEqual(typeof filterByYear(), 'function');
  });

  it('debería retornar un array de objetos con categorias y su valor por año', () => {
    assert.toEqual(filterByYear(), outputFilterYear);
  });
});

/*TEST FUNCION DE FILTRO POR CATEGORIA */
describe('showCategory', () => {

  it('debería ser una función', () => {
    assert.toEqual(typeof showCategory(), 'function');
  });

  it('debería retornar un array de objetos con el año y valor del accidente', () => {
    assert.toEqual(showCategory('Total_Injured_Persons'), outputFilterCategory);
  });
});
