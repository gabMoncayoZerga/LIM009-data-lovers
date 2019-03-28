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
const selectYear = document.getElementById("selected_year");
const sectionFooter = document.querySelector("footer");
sectionLogin.classList.toggle("classShow");
sectionFooter.classList.toggle("classHidden");

btnEnter.addEventListener("click",(e) => {
    e.preventDefault();
    const user = document.getElementById("username").value;
    if (user == ""){
        alert("Please, enter your name");
      } else {
          document.getElementById("name_user").innerHTML = user;
          sectionLogin.classList.toggle("classShow");
          sectionFooter.classList.toggle("classHidden");
          sectionHome.classList.toggle("classShow");
          sectionFilterYear.classList.toggle("classShow");
         }
});


btnSearch.addEventListener("click",()=>{
    let selectYear = document.getElementById("selected_year").value;
    const arrayFilterYear = filterByYear(data, selectYear);
    const tableYear= document.getElementById("table_year");
    tableYear.innerHTML="";
    for (let i = 0; i < arrayFilterYear.length; i++) {
      tableYear.innerHTML+=
        `
        <tr><td>Train:</td><td>${arrayFilterYear[i].Total_Injured_Persons_Railroad_Train_Accidents}</td></tr>
        <tr><td>Train:</td><td>${arrayFilterYear[i].Total_Injured_Persons_Pedalcyclists}</td></tr>
        <tr><td>Train:</td><td>${arrayFilterYear[i].Total_Injured_Persons_Motorcyclists}</td></tr>
        <tr><td>Train:</td><td>${arrayFilterYear[i].Total_Injured_Persons_Passenger_Car_Occupants}</td></tr>
        <tr><td>Train:</td><td>${arrayFilterYear[i].Total_Injured_Persons_Bus_Occupants}</td></tr>
        `;
    }

});

const viewYear = (data, selectYear) =>{
  let valueYear=selectYear.value;
  const arrayFilterYear= filterByYear(data,valueYear);
  console.log(arrayFilterYear);
}
//CREAMOS A LA FUNCION VIEWCATEGORY PARA MOSTRAR CATEGORIAS LLAMANDO A showCategory DESDE DATA.JS//
const  viewCategory =(idCategory, categoryName)=>{
    document.getElementById(idCategory).classList.toggle("classShow");
    const data = showCategory(categoryName);
    sectionFilterYear.classList.add("classShow");
    const tableCategory = document.getElementById("table_category");
    tableCategory.innerHTML = "";
    for(let i=0; i<data.length;i++){
      tableCategory.innerHTML += `
        <td>${data[i].Year}</td>
        <td>${data[i].Injures}</td>
      `;
    }

}

btnTrain.addEventListener("click",()=>{
  viewCategory("train",train);// seccion HTML , constante con el string
});

btnPedalcyclists.addEventListener("click",()=>{
    document.getElementById("train").classList.toggle("classShow");
    viewCategory("pedalcyclists",pedalcyclists);
    sectionFilterYear.classList.toggle("classShow");
});

btnMotorcyclist.addEventListener("click",()=>{
    document.getElementById("pedalcyclists").classList.toggle("classShow");
    viewCategory("motocyclists",motorcyclists);
});

btnCar.addEventListener("click",()=>{
    document.getElementById("motocyclists").classList.toggle("classShow");
    viewCategory("car",car);
});

btnBus.addEventListener("click",()=>{
    document.getElementById("car").classList.toggle("classShow");
    viewCategory("bus",bus);
});
