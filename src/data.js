const data = INJURIES;

const filterByYear = (data,selectYear)=>{
    const dataYear = data.filter(dat=>dat.Year.substr(0,4)===selectYear)
    return dataYear;
  }


const showCategory=(category) => {
  let dataCategory = [];
  data.forEach(function (dat) {
   const value = dat[category]== null ? "Register not found": dat[category];
   const year= dat.Year.substr(0,4);
    dataCategory.push({Injuries:value, Year: year});
  });
  return dataCategory;


}

const sortData=(data, sortBy, sortOrder)=> {
  const listOrdered = data.sort(function(a, b){
    if (a[sortBy] > b[sortBy]) {
      return 1;
    } else if (a[sortBy] < b[sortBy]) {
      return -1;
    } else if (a[sortBy] === b[sortBy]) {
      return 0;
    }
  });

  if (sortOrder == "A"){
    return listOrdered;
  }else if (sortOrder == "D"){
    return listOrdered.reverse();
  }
};

//Funcion màximo y mìnimo
const computeStats= (data) =>{
  /*//màximo
  if(tipo=='max'){
    let array_valor= [];
    for (var i = 0; i < data.length; i++) {
      if(!(data[i].Injuries=='Register not found')){
        array_valor.push(data[i].Injuries);
        //array_valor.push(parseInt(data[i].Injuries, 10));
      }
    }
    console.log(array_valor);
    let maximo_valor=Math.max(array_valor);
    console.log('maximoooo');
    console.log(maximo_valor);
  }
  else{
    console.log('minimoooo');
  }
  */
  let array_valor= [];
  for (var i = 0; i < data.length; i++) {
    if(!(data[i].Injuries=='Register not found')){
      array_valor.push(data[i].Injuries);
      //array_valor.push(parseInt(data[i].Injuries, 10));
    }
  }
  let suma=0;
  console.log(array_valor);
  for (var j = 0; j < array_valor.length; j++) {
    suma += array_valor[j];
  }
  return suma;
  console.log(suma);
}

window.filterByYear= filterByYear;
window.showCategory = showCategory;
window.sortData=sortData;
window.computeStats=computeStats;
