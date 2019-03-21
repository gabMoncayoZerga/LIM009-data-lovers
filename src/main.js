/* Manejo del DOM */
const btnEnter = document.getElementById("btn_enter");
// const train = document.getElementById("btn_train");
// const pedalcyclists = document.getElementById("btn_pedacyclists");
// const motorcyclist = document.getElementById("btn_motorcyclists");
// const car = document.getElementById("btn_car");
// const bus = document.getElementById("btn_bus");
const tablaTrain = document.getElementById("table_train");
const tablapedalcyclists = document.getElementById("table_pedalcyclists");
const tablaMotocyclists = document.getElementById("table_motocyclists");
const tablaCar = document.getElementById("table_car");
const tablaBus = document.getElementById("table_bus");
const comeback=document.getElementById("comeback");


const sectionLogin = document.getElementById("login");
const sectionHome = document.getElementById("home");
const sectionFilterYear= document.getElementById("year_section");

sectionLogin.classList.toggle("classShow");
// sectionHome.classList.toggle("classShow");

btnEnter.addEventListener("click",() => {
    const user = document.getElementById("username").value;
    if (user == ""){
        alert("please, enter your name");
      } else {
          document.getElementById("name_user").innerHTML = user;
          sectionLogin.classList.toggle("classShow");
          sectionHome.classList.toggle("classShow");
          sectionFilterYear.classList.toggle("classShow");
         }
});


comeback.addEventListener("click",()=>{
  sectionLogin.classList.toggle("classShow");
  sectionHome.classList.toggle("classShow");
  sectionFilterYear.classList.toggle("classShow");
  comeback.classList.toogle("classShow");
})


const btnSearch = document.getElementById("search");
//creo un evento para que cumpla la funcion filtrar por año
btnSearch.addEventListener("click",viewYearTable);

function viewYearTable(){
    let selectYear = document.getElementById("selected_year").value;
    const arrayFilterYear = FilterYear(selectYear);

    arrayFilterYear.forEach(function(i){
        const tableYear= document.getElementById("table_year");
        //console.log(i);
        tableYear.innerHTML="<td>Train:</td> <td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";
        tableYear.innerHTML="<td>Pedalcyclists:</td> <td>"+i.Total_Injured_Persons_Pedalcyclists+"</td>";
        tableYear.innerHTML="<td>Motocyclists:</td> <td>"+i.Total_Injured_Persons_Motorcyclists+"</td>";
        tableYear.innerHTML="<td>Car:</td> <td>"+i.Total_Injured_Persons_Passenger_Car_Occupants+"</td>";
        tableYear.innerHTML="<td>Bus:</td> <td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";

    })
}
