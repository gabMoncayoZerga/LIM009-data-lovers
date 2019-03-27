/*Manejo del DOM*/
const btnTrain = document.getElementById("btn_train");
const btnEnter = document.getElementById("btn_enter");
const btnPedalcyclists = document.getElementById("btn_pedalcyclists");
const btnMotorcyclist = document.getElementById("btn_motocyclists");
const btnCar = document.getElementById("btn_car");
const btnBus = document.getElementById("btn_bus");
const sectionLogin = document.getElementById("login");
const sectionHome = document.getElementById("home");
const btnSearch = document.getElementById("search");
const sectionFilterYear= document.getElementById("year_section");
const train = "Total_Injured_Persons_Railroad_Train_Accidents";
const pedalcyclists ="Total_Injured_Persons_Pedalcyclists";
const motorcyclists = "Total_Injured_Persons_Motorcyclists";
const car ="Total_Injured_Persons_Passenger_Car_Occupants";
const bus = "Total_Injured_Persons_Bus_Occupants";
const sectionFooter = document.querySelector("footer");
sectionLogin.classList.toggle("classShow");
sectionFooter.classList.toggle("classHidden");

btnEnter.addEventListener("click",(e) => {
    e.preventDefault();
    const user = document.getElementById("username").value;
    if (user == ""){
        alert("please, enter your name");
      } else {
          document.getElementById("name_user").innerHTML = user;
          sectionLogin.classList.toggle("classShow");
          sectionFooter.classList.toggle("classHidden");
          sectionHome.classList.toggle("classShow");
          sectionFilterYear.classList.toggle("classShow");
         }
});
btnSearch.addEventListener("click",(viewYearTable)=>{
    const data = INJURIES;
    let selectYear = document.getElementById("selected_year").value;
    const arrayFilterYear = FilterYear(data, selectYear);

    arrayFilterYear.forEach((i)=>{
        const tableYear= document.getElementById("table_year");
        //console.log(i);
        tableYear.innerHTML="<td>Train:</td> <td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";
        tableYear.innerHTML+="<td>Pedalcyclists:</td> <td>"+i.Total_Injured_Persons_Pedalcyclists+"</td>";
        tableYear.innerHTML+="<td>Motocyclists:</td> <td>"+i.Total_Injured_Persons_Motorcyclists+"</td>";
        tableYear.innerHTML+="<td>Car:</td> <td>"+i.Total_Injured_Persons_Passenger_Car_Occupants+"</td>";
        tableYear.innerHTML+="<td>Bus:</td> <td>"+i.Total_Injured_Persons_Bus_Occupants+"</td>";

    })
    });
    
let printYears=(data)=>{
    const tableCategory = document.getElementById("table_category");
    tableCategory.innerHTML = "";
    data.forEach(function(a) {
        tableCategory.innerHTML+= "<td>"+a.Year+"</td>" +"<td>"+a.Injures+"</td>";
      });
}

//CREAMOS A LA FUNCION VIEWCATEGORY PARA MOSTRAR CATEGORIAS LLAMANDO A showCategory DESDE DATA.JS//
function viewCategory(idCategory, categoryName){

    document.getElementById(idCategory).classList.toggle("classShow");

    const data = showCategory(categoryName);
    window.dataFilter = data
    sectionFilterYear.classList.add("classShow");
    printYears(data);
}
//CREAMOS A LA FUNCION VIEWCATEGORY PARA MOSTRAR CATEGORIAS LLAMANDO A showCategory DESDE DATA.JS//
function viewCategory(idCategory, categoryName){

    document.getElementById(idCategory).classList.toggle("classShow");

    const data = showCategory(categoryName);
    window.dataFilter = data
    sectionFilterYear.classList.add("classShow");
    printYears(data);
}

//LLAMAMOS A LA FUNCION VIEW CATEGORY PARA LA CATEGORIA TRAIN//
btnTrain.addEventListener("click",()=>{
  viewCategory("train",train);// seccion HTML , constante con el string que tiene le nombre del indicador
});

//LLAMAMOS A LA FUNCION VIEW CATEGORY PARA LA CATEGORIA PEDALCYCLIST//
btnPedalcyclists.addEventListener("click",()=>{
    document.getElementById("train").classList.toggle("classShow");
    viewCategory("pedalcyclists",pedalcyclists);
    sectionFilterYear.classList.toggle("classShow");
});

//LLAMAMOS A LA FUNCION VIEW CATEGORY PARA LA CATEGORIA MOTORCYCLIST//
btnMotorcyclist.addEventListener("click",()=>{
    document.getElementById("pedalcyclists").classList.toggle("classShow");
    viewCategory("motocyclists",motorcyclists);
});

//LLAMAMOS A LA FUNCION VIEW CATEGORY PARA LA CATEGORIA CAR//
btnCar.addEventListener("click",()=>{
    document.getElementById("motocyclists").classList.toggle("classShow");
    viewCategory("car",car);
});

//LLAMAMOS A LA FUNCION VIEW CATEGORY PARA LA CATEGORIA BUS//
btnBus.addEventListener("click",()=>{
    document.getElementById("car").classList.toggle("classShow");
    viewCategory("bus",bus);
});

//LLAMANDO A SORT //
let selectOrder=document.getElementById("select_order");

selectOrder.addEventListener("change", orderYear);


function orderYear(){
    let selectOrder = document.getElementById("select_order").value;
    let listOrder = []
    if(selectOrder=="ascendente"){
        listOrder = orderAscendente();
    }else if (selectOrder=="descendente"){
        listOrder = orderAscendente().reverse();
    }
    printYears(listOrder);
};
