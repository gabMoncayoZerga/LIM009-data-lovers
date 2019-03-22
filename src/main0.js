/* Manejo del DOM */
const btnEnter = document.getElementById("btn_enter");
const tablaTrain = document.getElementById("table_train");
const tablaMotocyclists = document.getElementById("table_motocyclists");
const tablaCar = document.getElementById("table_car");
const tablaBus = document.getElementById("table_bus");
const sectionLogin = document.getElementById("login");
const sectionHome = document.getElementById("home");
//const sectionFilterYear= document.getElementById("year_section");

//const sectionFilterpedalcyclists= document.getElementById("pedalcyclists");
//const sectionFiltemotocyclists= document.getElementById("motocyclists");
//const sectionFiltercar= document.getElementById("car");
//const sectionFilterbus= document.getElementById("bus");

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
          //sectionFilterYear.classList.toggle("classShow");
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

        tableYear.innerHTML="";
        tableYear.innerHTML+="<td>Train:</td> <td>"+i.Total_Injured_Persons_Railroad_Train_Accidents+"</td>";
        tableYear.innerHTML+="<td>Pedalcyclists:</td> <td>"+i.Total_Injured_Persons_Pedalcyclists+"</td>";
        tableYear.innerHTML+="<td>Motocyclists:</td> <td>"+i.Total_Injured_Persons_Motorcyclists+"</td>";
        tableYear.innerHTML+="<td>Car:</td> <td>"+i.Total_Injured_Persons_Passenger_Car_Occupants+"</td>";
        tableYear.innerHTML+="<td>Bus:</td> <td>"+i.Total_Injured_Persons_Bus_Occupants9+"</td>";
    })
}

//FUNCION PARA MOSTRAR TABLA POR CATEGORIA //

function viewTableDet(seccion,valor,nombreTabla){
  document.getElementById(seccion).classList.toggle("classShow");
  //console.log(valor);
  //console.log(nombre_tabla);
    const arrayResultado = filterData(valor);
    //console.log(arrayResultado);
    const tableHTML= document.getElementById(nombreTabla);
    tableHTML.innerHTML="";
    var cadena_html='';
    arrayResultado.forEach(function(i){
        cadena_html += "<tr><td>"+i.year+"</td> <td>"+i.value+"</td></tr>";
        //tableHTML.innerHTML+="<td>"+i.accidents+"</td><td>"+i.year+"</td> <td>"+i.value+"</td>";
    })
  //  console.log(cadena_html);
    tableHTML.innerHTML= cadena_html;
}

const btnTrainSearch = document.getElementById("Btn_train_search");
btnTrainSearch.addEventListener("click", () => {
  viewTableDet("train","Total_Injured_Persons_Railroad_Train_Accidents","show_table_train")
});

const btnPedacyclistsSearch=document.getElementById("Btn_pedalcyclists_search");
btnPedacyclistsSearch.addEventListener("click", () => {
  viewTableDet("pedalcyclists","Total_Injured_Persons_Pedalcyclists","show_table_pedalcyclist")
});
