global.window = global;
require('../src/data.js');


const input = [
  {
    totalInjuredPersonsRailroadTrainAccidents: 82,
    totalInjuredPersonsPedalcyclists: 67088,
    totalInjuredPersonsMotorcyclists: 80435,
    totalInjuredPersonsPassengerCarOccupants: 2234594,
    totalInjuredPersonsBusOccupants: 20959,
    TotalInjuredPersonsOtherIncident: 14716,
    Year: '1991-01-04'
  },
  {
    totalInjuredPersonsRailroadTrainAccidents: 138,
    totalInjuredPersonsPedalcyclists: 66572,
    totalInjuredPersonsMotorcyclists: 57480,
    totalInjuredPersonsPassengerCarOccupants: 2469358,
    totalInjuredPersonsBusOccupants: 19214,
    TotalInjuredPersonsOtherIncident: 14716,
    Year: '1995-01-04'
  },
  {
    totalInjuredPersonsRailroadTrainAccidents: 211,
    totalInjuredPersonsPedalcyclists: 43481,
    totalInjuredPersonsMotorcyclists: 102994,
    totalInjuredPersonsPassengerCarOccupants: 1379181,
    totalInjuredPersonsBusOccupants: 12141,
    TotalInjuredPersonsOtherIncident: 14716,
    Year: '2007-01-04'
  }
];

const yearSelect = '1995';

const output = [
  {
    Year: '1995-01-04',
    totalInjuredPersonsBusOccupants: 19214,
    totalInjuredPersonsMotorcyclists: 57480,
    totalInjuredPersonsPassengerCarOccupants: 2469358,
    totalInjuredPersonsPedalcyclists: 66572,
    totalInjuredPersonsRailroadTrainAccidents: 138,
    TotalInjuredPersonsOtherIncident: 14716
  }
];

describe('INJURIES - global ', () => {
  it('debería ser un objeto', () => {
    expect(typeof global).toBe('object');
  });
});


describe('filterByYear ', () => {
  it('debería ser una función', () => {
    expect(typeof global.filterByYear).toBe('function');
  });
  it('debería retornar un tipo de dato objeto', () => {
    expect(typeof global.filterByYear(input, yearSelect)).toBe('object');
  });
  it('debería retorna un array de objeto', () => {
    expect(global.filterByYear(input, yearSelect)).toEqual(output);
  });
});

// describe('showCategory ', () => {
//   it('debería ser una función', () => {
//     expect(typeof showCategory).toBe('function');
//   });
//   it('debería retornar', () => {
//     expect(typeof showCategory()).toEqual('');
//   });
// });
//
// describe('sortData ', () => {
//   it('debería ser una función', () => {
//     expect(typeof sortData).toBe('function');
//   });
//   it('debería retornar', () => {
//     expect(typeof sortData()).toEqual('');
//   });
// });
//
// describe('computeStats ', () => {
//   it('debería ser una función', () => {
//     expect(typeof computeStats()).toBe('function');
//   });
//   it('debería retornar', () => {
//     expect(typeof computeStats()).toEqual('');
//   });
// });
