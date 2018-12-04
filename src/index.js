//Visibilidad de secciones
document.getElementById("welcome").style.display="block";
document.getElementById("results").style.display="none";
document.getElementById("hiding-place").style.display="none";
//Botones cifrar y descifrar
let msgIn=document.getElementById("msg-in");
let keyNumber=document.getElementById("key");
let btnEnco=document.getElementById("enco");
let btnDeco=document.getElementById("deco");
let msgOut=document.getElementById("msg-out");
//Correr función cifrar
btnEnco.addEventListener("click", () => {
  if (keyNumber.value === "" || msgIn.value === ""){
    alert("Sin clave o mensaje no es posible el camuflaje (-_-)ゞ゛");
  } else {
      if(keyNumber.value < 0){
        msgOut.innerHTML=cipher.decode(parseInt(keyNumber.value*-1),msgIn.value);
      } else {
        msgOut.innerHTML=cipher.encode(parseInt(keyNumber.value),msgIn.value);}
    document.getElementById("personalresult").innerHTML="Listo! ya es secreto ( ͡° ͜ʖ ͡°)";
    document.getElementById("welcome").style.display="none";
    document.getElementById("results").style.display="block";
    document.getElementById("key").value="";
    document.getElementById("msg-in").value="";
}});
//Correr función descifrar
btnDeco.addEventListener("click", () => {
  if (keyNumber.value === "" || msgIn.value === ""){
    alert("Sin clave o mensaje no es posible el camuflaje (-_-)ゞ゛");
  } else {
      if(keyNumber.value < 0){
        msgOut.innerHTML=cipher.encode(parseInt(keyNumber.value*-1),msgIn.value);
      } else {
        msgOut.innerHTML=cipher.decode(parseInt(keyNumber.value),msgIn.value);}
    document.getElementById("personalresult").innerHTML="Uyuyuy! qué interesante ( ͡° ͜ʖ ͡°)";
    document.getElementById("welcome").style.display="none";
    document.getElementById("results").style.display="block";
    document.getElementById("key").value="";
    document.getElementById("msg-in").value="";
  }});
//Botón enviar texto copiado por Web.Whatsapp
document.getElementById("send").addEventListener("click", ()=>{
  document.getElementById("msg-out").select();
  document.execCommand("copy");
  if (window.matchMedia("(max-width: 500px)").matches) { 
    window.open("https://api.whatsapp.com/send?","_blank")
  } else {
    window.open("https://web.whatsapp.com/","_blank")
  }
});
//Botón retornar al Menú
document.getElementById("start").addEventListener("click", ()=>{
  document.getElementById("results").style.display="none";
  document.getElementById("welcome").style.display="block";
});
//Botón ocultarse
document.getElementById("hide").addEventListener("click", ()=>{
   document.title = "Me encanta estudiar :V";
   document.body.style.backgroundImage = "none";
   document.body.style.backgroundColor = "#000000";
   document.getElementById("results").style.display="none";
   document.getElementById("hiding-place").style.display="block";
});
//"Continuar" -> "Volver al encryptioner"
document.getElementById("continue").addEventListener("click", ()=>{
  document.getElementById("hiding-place").style.display="none";
  document.getElementById("results").style.display="block";
  document.body.style.background = "url(https://preview.ibb.co/ha0Jjq/Anti-Teacher-Background.png)";
  document.title = "ANTI -TEACHER. My secreat classroom encryptioner";
});
//"Quiero estudiar"
document.getElementById("study").addEventListener("click", ()=>{
  window.open("https://es.wikipedia.org/wiki/Alan_Turing","_self")
});
