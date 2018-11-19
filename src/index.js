//Display inicial. Muestra solo el Menú Principal
document.getElementById("section1").style.display="block";
document.getElementById("section2").style.display="none";
document.getElementById("section3").style.display="none";
//Retornar a Menú Principal
function back(){
  document.getElementById("section1").style.display="block";
  document.getElementById("section2").style.display="none";
}
//Abrir sección para esconder actividad
function hide(){
  document.getElementById("section2").style.display="none";
  document.getElementById("section3").style.display="block";
}
//Retornar al mensaje
function playing(){
  document.getElementById("section3").style.display="none";
  document.getElementById("section2").style.display="block";
}
//Abrir sección para esconder actividad
function studying(){
  document.getElementById("section3").style.display="none";
}
