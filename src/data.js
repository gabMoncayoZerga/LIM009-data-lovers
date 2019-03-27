const data = INJURIES;

const FilterYear = (data,selectYear)=>{//filter
    // return year==selectYear;//
    //const dataYear = data.filter(compareYear(selectYear));//year
    const dataYear = data.filter(dat=>dat.Year.substr(0,4)===selectYear)
    return dataYear;
  }

//filtrar por categoria
const showCategory=(category) => {
  let dataCategory = [];
  data.forEach(function (dat) {
   const value = dat[category];
   const year= dat.Year.substr(0,4);
    dataCategory.push({Injures:value, Year: year});
  });
  return dataCategory;
}
//haciendo el sort

// let orderAscendente = data.sort(function(a, b){
const orderAscendente=() => {
  const dataFilter = window.dataFilter;
  const listOrdered = dataFilter.sort(function(a, b){
    if (a.Year > b.Year) {
      return 1;
    } else if (a.Year < b.Year) {
      return -1;
    } else if (a.Year === b.Year) {
      return 0;
    }
  })
  return listOrdered;
};

//window.showCategory = showCategory;



