/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example; 
const data = INJURIES;
//filtrar año
function FilterYear(selectYear){//filter
    // return year==selectYear;//
    const dataYear = data.filter(dat => dat.Year === selectYear);//year
return dataYear;
  }






