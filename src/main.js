/* Manejo del DOM */
const btnEnter = document.getElementById("btn_enter");
<<<<<<< HEAD
const train = document.getElementById("btn_train");
// const pedalcyclists = document.getElementById("btn_pedacyclists");
// const motorcyclist = document.getElementById("btn_motorcyclists");
// const car = document.getElementById("btn_car");
// const bus = document.getElementById("btn_bus");
const tablaTrain = document.getElementById("table_train");
const tablapedalcyclists = document.getElementById("table_pedalcyclists");
const tablaMotocyclists = document.getElementById("table_motocyclists");
const tablaCar = document.getElementById("table_car");
const tablaBus = document.getElementById("table_bus");



=======
const btnTrain = document.getElementById("btn_train");
const btnPedalcyclists = document.getElementById("btn_pedacyclists");
const btnMotorcyclist = document.getElementById("btn_motorcyclists");
const btnCar = document.getElementById("btn_car");
const btnBus = document.getElementById("btn_bus");
>>>>>>> 5f95b472b34813a86c38d56c9ffa05fc4482490c
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
const btnSearch = document.getElementById("search");
//creo un evento para que cumpla la funcion filtrar por año
btnSearch.addEventListener("click",viewYearTable);



function viewYearTable(){
    let selectYear = document.getElementById("selected_year").value;
    const arrayFilterYear = FilterYear(selectYear);

    arrayFilterYear.forEach(function(i){
        const tableYear= document.getElementById("table_year");
        //console.log(i);
<<<<<<< HEAD
        tableYear.innerHTML="<td>Train:</td> <td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";
        tableYear.innerHTML+="<td>Pedalcyclists:</td> <td>"+i.Total_Injured_Persons_Pedalcyclists+"</td>";
        tableYear.innerHTML+="<td>Motocyclists:</td> <td>"+i.Total_Injured_Persons_Motorcyclists+"</td>";
        tableYear.innerHTML+="<td>Car:</td> <td>"+i.Total_Injured_Persons_Passenger_Car_Occupants+"</td>";
        tableYear.innerHTML+="<td>Bus:</td> <td>"+i.Total_Injured_Persons_Bus_Occupants9+"</td>";

    })
}

//Para ver detalle de TRAIN

function viewTableDet(valor,nombre_tabla){
  //console.log(valor);
  //console.log(nombre_tabla);
    const arrayResultado = filterData(valor);//valor es niombre de indicador
        //console.log(arrayResultado);
    const tableHTML= document.getElementById(nombre_tabla);
    tableHTML.innerHTML="";// aca limpio la tabla , para luego cargarla con el array de resultado, cada vez que yo hago clic en  el boton correspondiente limpia la tabla para que cargue el valor de indicador difetente
    let cadenaHtml='';
    arrayResultado.forEach(function(i){
        cadenaHtml += "<tr><td>"+i.year+"</td> <td>"+i.value+"</td></tr>";
        //tableHTML.innerHTML+="<td>"+i.accidents+"</td><td>"+i.year+"</td> <td>"+i.value+"</td>";

    })
  //  console.log(cadena_html);
    tableHTML.innerHTML= cadenaHtml;
}

const btnTrainSearch = document.getElementById("Btn_train_search");
btnTrainSearch.addEventListener("click", () => {
  viewTableDet("Total_Injured_Persons_Railroad_Train_Accidents","show_table_train")
});
=======
        tableYear.innerHTML="<td>Train :</td>" +"<td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";
        tableYear.innerHTML+="<td>Pedalcyclists:</td>" +"<td>"+i.Total_Injured_Persons_Pedalcyclists+"</td>";
        tableYear.innerHTML+="<td>Motocyclists:</td>" +"<td>"+i.Total_Injured_Persons_Motorcyclists+"</td>";
        tableYear.innerHTML+="<td>Car:</td>" +"<td>"+i.Total_Injured_Persons_Passenger_Car_Occupants+"</td>";
        tableYear.innerHTML+="<td>Bus:</td>" +"<td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>"; 
    })
}
//creo un evento para que cumpla la funcion filtrar por categoria
btnTrain.addEventListener("click",viewCategory);

function viewCategory(){
    document.getElementById("train").classList.toggle("classShow");
    sectionFilterYear.classList.toggle("classShow");
    showCategory().forEach(function(a) {
        const tableCategory = document.getElementById("table_category");
        tableCategory.innerHTML+= "<td>"+a.Year+"</td>" +"<td>"+a.Injures+"</td>";
      });

}
>>>>>>> 5f95b472b34813a86c38d56c9ffa05fc4482490c
