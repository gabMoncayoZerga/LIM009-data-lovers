/* Manejo del DOM */
/*JavaScript: Cómo filtrar un array de objetos basado en un atributo
El elemento filter arroja un array dada una condición
*/
 /*Capturando elementos de HTML*/
 const logIn=document.getElementById("login");
 const submitButton=document.getElementById("submit");
 const homePage=document.getElementById("home");
 const filterCategory=document.getElementById("category");
 const sortData=document.getElementById("select-order");
 const yearSection=document.getElementById("year-section");
 const airInjuries=document.getElementById("air-injuries");
 const maritimeInjuries=document.getElementById("maritime-injuries")
 const landInjuries=document.getElementById("land-injuries");
 const news=document.getElementById("news");

logIn.style.display="block";
submitButton.style.display="block"
homePage.style.display="none";
filterCategory.style.display="none";
sortData.style.display="none";
yearSection.style.display="none";
airInjuries.style.display="none";
maritimeInjuries.style.display="none";
landInjuries.style.display="none";
news.style.display="none";

 submitButton.addEventListener("click",()=>{
   logIn.style.display="none";
   submitButton.style.display="none";
   homePage.style.display="block";
   filterCategory.style.display="block";
   sortData.style.display="block";
   yearSection.style.display="block";
   airInjuries.style.display="block";
   maritimeInjuries.style.display="block";
   landInjuries.style.display="block";
 });
