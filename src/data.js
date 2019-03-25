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
    
   const value = dat[category];
   const year= dat.Year;
    dataCategory.push({Injures:value, Year: year});
  });
  return dataCategory;
}

//window.showCategory = showCategory;
