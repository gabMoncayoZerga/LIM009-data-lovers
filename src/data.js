/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };

// window.example = example; 

const data = INJURIES;


function FilterYear(){//filter
  
  let selectYear = document.getElementById("selected_year").value;
    // return year==selectYear;//
    const dataYear = data.filter(dat => dat.Year === selectYear);//year

console.log (dataYear);
  }

const btnSearch = document.getElementById("search");
//const btnMaritime =document.getElementById("Btn_maritime");
//const btnLand =document.getElementById("Btn_land");

btnSearch.addEventListener("click",FilterYear);
//creo una funcion que mostrará la seccion aereo





