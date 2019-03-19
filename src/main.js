/* Manejo del DOM */
const btnEnter = document.getElementById("btn_enter");
// const train = document.getElementById("btn_train");
// const pedalcyclists = document.getElementById("btn_pedacyclists");
// const motorcyclist = document.getElementById("btn_motorcyclists");
// const car = document.getElementById("btn_car");
// const bus = document.getElementById("btn_bus");

const sectionLogin = document.getElementById("login");
const sectionHome = document.getElementById("home");

sectionLogin.classList.toggle("classShow");
// sectionHome.classList.toggle("classShow");

btnEnter.addEventListener("click",() => {
    const user = document.getElementById("user").value;
    if (user == ""){
        alert("please, enter your name");
      } else {
          document.getElementById("name_user").innerHTML = user;
          sectionLogin.classList.toggle("classShow");
          sectionHome.classList.toggle("classShow");
         }
});
