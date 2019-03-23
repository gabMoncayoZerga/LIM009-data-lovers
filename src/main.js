/*Manejo del DOM*/
const btnTrain = document.getElementById("btn_train");
const btnEnter = document.getElementById("btn_enter");
const btnPedalcyclists = document.getElementById("btn_pedalcyclists");
const btnMotorcyclist = document.getElementById("btn_motorcyclists");
const btnCar = document.getElementById("btn_car");
const btnBus = document.getElementById("btn_bus");
const sectionLogin = document.getElementById("login");
const sectionHome = document.getElementById("home");
const sectionFilterYear= document.getElementById("year_section");
const train = "Total_Injured_Persons_Railroad_Train_Accidents";
const car ="Total_Injured_Persons_Passenger_Car_Occupants";
const pedalcyclists ="Total_Injured_Persons_Pedalcyclists";
const bus = "Total_Injured_Persons_Bus_Occupants";
const motorcyclists = "Total_Injured_Persons_Motorcyclists";


sectionLogin.classList.toggle("classShow");
// sectionHome.classList.toggle("classShow");

btnEnter.addEventListener("click",(e) => {
    e.preventDefault();
    const user = document.getElementById("username").value;
    if (user == ""){
        alert("please, enter your name");
      } else {
          document.getElementById("name_user").innerHTML = user;
          sectionLogin.classList.toggle("classShow");
          sectionHome.classList.toggle("classShow");
          //sectionFilterYear.classList.toggle("classShow");
         }
});
const btnSearch = document.getElementById("search");
//creo un evento para que cumpla la funcion filtrar por año
btnSearch.addEventListener("click",viewYearTable);


//FUNCION PARA MOSTRAR LA DATA POR AÑOS//
function viewYearTable(){
    let selectYear = document.getElementById("selected_year").value;
    const arrayFilterYear = FilterYear(selectYear);

    arrayFilterYear.forEach(function(i){
        const tableYear= document.getElementById("table_year");
        //console.log(i);
        tableYear.innerHTML="<td>Train:</td> <td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";
        tableYear.innerHTML+="<td>Pedalcyclists:</td> <td>"+i.Total_Injured_Persons_Pedalcyclists+"</td>";
        tableYear.innerHTML+="<td>Motocyclists:</td> <td>"+i.Total_Injured_Persons_Motorcyclists+"</td>";
        tableYear.innerHTML+="<td>Car:</td> <td>"+i.Total_Injured_Persons_Passenger_Car_Occupants+"</td>";
        tableYear.innerHTML+="<td>Bus:</td> <td>"+i.Total_Injured_Persons_Bus_Occupants9+"</td>";

    })}

//creo un evento para que cumpla la funcion filtrar por categoria


function viewCategory(idCategory, categoryName){
    document.getElementById(idCategory).classList.toggle("classShow");

     const data = showCategory(categoryName);
    sectionFilterYear.classList.toggle("classShow");
    const tableCategory = document.getElementById("table_category");
     tableCategory.innerHTML = "";
    data.forEach(function(a) {
        tableCategory.innerHTML+= "<td>"+a.Year+"</td>" +"<td>"+a.Injures+"</td>";
      });
}

btnTrain.addEventListener("click",function(){
  viewCategory("train",train);
});

btnPedalcyclists.addEventListener("click",function(){
  viewCategory("pedalcyclists",pedalcyclists);
});
