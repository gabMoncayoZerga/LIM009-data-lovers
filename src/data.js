const data = INJURIES;

function FilterYear(){//filter

  let selectYear = document.getElementById("selected_year").value;
    // return year==selectYear;//
    const dataYear = data.filter(dat => dat.Year === selectYear);//year
    console.log(dataYear);
  }

const btnSearch = document.getElementById("search");
//const btnMaritime =document.getElementById("Btn_maritime");
//const btnLand =document.getElementById("Btn_land");

btnSearch.addEventListener("click",FilterYear);

const filterData = (data, condition) => {
  // aqui se guardará un objeto
  let resultado = [];

  data.forEach(elemento => {

    //se obtiene el valor del arreglo dada la condicion
  const value = elemento[condition];
  const year = elemento.Year;

   const data = { year: year, value: value };

    //se añade al objeto resultado
    resultado.push(data);

  });

  return resultado;
}

console.log(filterData(data,"Total_Injured_Persons_General_Aviation"));
