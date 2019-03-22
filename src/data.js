


//NARDA
// window.example = example;
const data =window.data;

//filtrar año
const FilterYear = (selectYear)=>{//filter
    // return year==selectYear;//
    const dataYear = data.filter(dat => dat.Year.substr(0,4) === selectYear);//year
    return dataYear;
  }

//filtrar por categoria: train

const showCategory=() => {
  let dataCategory = [];
  data.forEach(function (dat) {
    dataCategory.push({Injures:dat.Total_Injured_Persons_Railroad_Train_Accidents, Year: dat.Year});
  });
  return dataCategory;
}

showCategory().forEach(function(a){
  console.log(a);
})
