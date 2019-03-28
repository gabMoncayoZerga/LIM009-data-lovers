const data = INJURIES;

const filterByYear = (data,selectYear)=>{
    const dataYear = data.filter(dat=>dat.Year.substr(0,4)===selectYear)
    return dataYear;
  }


const showCategory=(category) => {
  let dataCategory = [];
  data.forEach(function (dat) {
  const value = dat[category]==null?"Register not found":dat[category];
  const year= dat.Year.substr(0,4);
  dataCategory.push({Injures:value, Year: year});
  });
  return dataCategory;

}


const sortData= (data, sortBy, sortOrder)=>{



}

/*const computeStats= (data) =>{
máximo y minimo
}*/

window.filterYear= filterByYear;
window.showCategory = showCategory;
window.sortData=sortData;
//window.computeStats=computeStats;
