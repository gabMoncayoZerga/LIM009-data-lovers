/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*


*/
const data=INJURIES;

const filterData = (data, condition) => {

  // aqui se guardará un objeto
  let resultado = [];

  data.forEach(elem => {

    //se obtiene el valor del arreglo dada la condicion
    const value = elem[condition];
    const year = elem.Year;

   const data = { year: year, value: value };
    //se añade al objeto resultado
    resultado.push(data);

  });

  return resultado;
}

console.log(data,"Total_Injured_Persons_Recreational_Boating");





/*
const sortData=(data, firstYear, lastYear)=>{

  const getYearsOfArray=data.slice(firstYear(1960), lastYear(2016));

if (firstYear>lastYear) {
    return 1;
  }
  if (firstYear>lastYear) {
    return -1
  }
  return 0;
}

console.log(sortData);*/
