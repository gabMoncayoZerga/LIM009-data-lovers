
global.window = global;
require('../src/data.js');

const input = [
  {
    totalInjuredPersonsRailroadTrainAccidents: null,
    totalInjuredPersonsPedalcyclists: null,
    totalInjuredPersonsMotorcyclists: null,
    totalInjuredPersonsPassengerCarOccupants: null,
    totalInjuredPersonsBusOccupants: null,
    TotalInjuredPersonsOtherIncident: null,
    Year: '1965-01-04'
  },
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

const outputFilterYear = [
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

const outputShowCategory = [
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '2007',
    Injuries: 211
  },
];

const inputSortData = [
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
];

const outputSortData = [
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
];

const outputSortDescending = [
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '1991',
    Injuries: 82
  },
];

const inputCompute = [
  {
    Year: '2007',
    Injuries: 211
  },
  {
    Year: '1991',
    Injuries: 82
  },
  {
    Year: '1995',
    Injuries: 138
  },
  {
    Year: '1965',
    Injuries: 'Register not found'
  },
];

const outputCompute = 431;

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
    expect(global.filterByYear(input, yearSelect)).toEqual(outputFilterYear);
  });
});

describe('showCategory ', () => {
  it('debería ser una función', () => {
    expect(typeof showCategory).toBe('function');
  });
  it('debería retornar', () => {
    expect(window.showCategory(input, 'totalInjuredPersonsRailroadTrainAccidents')).toEqual(outputShowCategory);
  });
});

describe('sortData ', () => {
  it('debería ser una función', () => {
    expect(typeof window.sortData).toBe('function');
  });
  it('ordenado ascendente por Injuries ', () => {
    expect(window.sortData(inputSortData, 'Injuries', 'A')).toEqual(outputSortData);
  });
  it('ordenado descendente por Injuries ', () => {
    expect(window.sortData(inputSortData, 'Injuries', 'D')).toEqual(outputSortDescending);
  });
});

describe('computeStats ', () => {
  it('debería ser una función', () => {
    expect(typeof window.computeStats).toBe('function');
  });
  it('debería retornar', () => {
    expect(window.computeStats(inputCompute)).toEqual(outputCompute);
  });
});

