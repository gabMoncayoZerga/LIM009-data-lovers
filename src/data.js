//const data = INJURIES;

const filterByYear = (data,selectYear)=>{
    const dataYear = data.filter(dat=>dat.Year.substr(0,4)===selectYear)
    return dataYear;
  }

const showCategory=(data,category) => {
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

//calculo
const computeStats= (data) =>{
  let arr= [];
  for (let i = 0; i < data.length; i++) {
    if(!(data[i].Injuries=='Register not found')){
      arr.push(data[i].Injuries);
      }
  }
  let suma=0;

  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;

}

window.filterByYear= filterByYear;
window.showCategory = showCategory;
window.sortData=sortData;
window.computeStats=computeStats;
