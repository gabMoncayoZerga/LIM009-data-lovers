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

/*
const dinosaurs =[];

dinosaurs[0]="Tiranosaurio Rex";
dinosaurs[1]="Velociraptor";
dinosaurs[2]="Triceratops";
dinosaurs[3]="Estegosaurio";
dinosaurs[4]="Troodon";
dinosaurs[5]="Estiracousario"

dinosaurs[0]="T-Rex";

//Añadiendo elemento en el indice 33

dinosaurs[33]="Philosoraptor";
console.log(dinosaurs);

const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const nombresMasculinos=nombres.slice(1,3);
console.log(nombresMasculinos);
*/
/*let arr=[1,2,15];
const sortArr=arr.sort();
console.log(sortArr);

const compareNumeric=(a,b)=>{
  if (a>b) return  1
  if (a===b) return 0
return -1;
};

arr =[1,2,15];
console.log(arr.sort(compareNumeric));*/

/*var objs = [
    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
    { first_nom: 'Pig',    last_nom: 'Bodine'   },
    { first_nom: 'Pirate', last_nom: 'Prentice' }
];

function compare(a,b) {
  if (a.last_nom < b.last_nom)
    return -1;
  if (a.last_nom > b.last_nom)
    return 1;
  return 0;
}

console.log(objs.sort(compare));*/

/*const getData = INJURIES;
const accedientoElemento=data[2];
console.log(accedientoElemento);
/*
const value = elemento[condition];
const year = accedientoElemento.Year;
console.log(year);
const data = { year.value, value.value };*/

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

console.log(filterData(data,"Total_Injured_Persons_Railroad"));
console.log(filterData(data,"Total_Injured_Persons_General_Aviation"));




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
