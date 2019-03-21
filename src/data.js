
//NARDA

const data = window.data;


function FilterYear(selectYear){//filter
  // return year==selectYear;//
    const dataYear = data.filter(dat => dat.Year.substr(0,4)=== selectYear);//year
    return dataYear;
  }


//GABRIELA
  // Filtrando data por tipo a lo largo de los años//
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

  console.log(filterData(data,"Total_Injured_Persons_Railroad_Train_Accidents"));
