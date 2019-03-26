//NARDA
// window.example = example;
const data =window.data;

//filtrar año
const FilterYear = (selectYear)=>{//filter
    // return year==selectYear;//
    const dataYear = data.filter(dat => dat.Year.substr(0,4) === selectYear);//year
    return dataYear;
  }

//filtrar por categoria
const showCategory=(category) => {
  let dataCategory = [];
  data.forEach(function (dat) {

   const value = dat[category]==null?0:dat[category];
   const year= dat.Year;
    dataCategory.push({Injuries:value, Year: year});
  });
  return dataCategory;
}

//window.showCategory = showCategory;
/*
const sortData = (arrayData) =>{
  //console.log(array_data);

  //Declarar array de Fechas
  let arrayDate=[];
  //Recorremos el array de data
  for(let i=0; i<arrayData.length; i++) {
      arrayDate.push(arrayData[i].Year);
   }

   //Declarar array de Años
   let arrayAño=[];
   //Recorremos el array de Fechas
   for(let i=0; i<arrayDate.length; i++){
     //Declaramos varianle "año"
     let año = arrayDate[i].substr(0,4); // substr es exclusivo paar string
     arrayAño.push(año);
   }

// el sort por defecto ordema de menor a mayor
   console.log("Ordenando de menor a mayor");
   let sortAscendente=arrayAño.sort();
   console.log(sortAscendente);

   console.log("Ordenando de mayor a menor");
   console.log(sortAscendente.reverse());

};

// Aplicamos nuestra función en el array//
sortData(arrayData);*/
