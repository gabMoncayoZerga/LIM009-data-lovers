/* Manejo del DOM */
/*JavaScript: Cómo filtrar un array de objetos basado en un atributo
El elemento filter arroja un array dada una condición
*/

const copiadeData=INJURIES.slice();

const arrNullBoating=copiadeData.filter(function mostrandoIndicador(elemento) {
  return(elemento.Total_Injured_Persons_Recreational_Boating==="null")
});


console.log(arrNullBoating);

/*
const arr =[
  {
    "home-id":"1",
    "price":"925",
    "sqtf":"1100",
    "num_of_beds":"2",
    "num_of_baths": "2.0",
  },
  {
    "home-id":"2",
    "price":"1425",
    "sqtf":"1900",
    "num_of_beds":"4",
    "num_of_baths":"2.5"
  }
];
const arrPrice = arr.filter(function (elemento) {
return(elemento.price==="1425");
});
console.log(arrPrice);*/
