//Visibilidad de secciones
document.getElementById('section1').style.display='block';
document.getElementById('section2').style.display='none';
document.getElementById('section3').style.display='none';
//Botones cifrar y descifrar
let msgIn=document.getElementById('msg');
let keyNumber=document.getElementById('key');
let buttonMsgIn=document.getElementById('enco');
let buttonMsgOut=document.getElementById('deco');
let msgOut=document.getElementById('result');
//Correr función cifrar
buttonMsgIn.addEventListener('click', ()=>{
if (keyNumber.value=='' || msgIn.value==''){
  alert('Sin clave o mensaje no es posible el camuflaje (-_-)ゞ゛');
} else{
  msgOut.innerHTML=cipher.encode(parseInt(keyNumber.value),msgIn.value);
  document.getElementById('personalresult').innerHTML='Listo! ya es secreto ( ͡° ͜ʖ ͡°)';
  document.getElementById('section1').style.display='none';
  document.getElementById('section2').style.display='block';
  document.getElementById('key').value="";
  document.getElementById('msg').value="";
}});
//Correr función descifrar
buttonMsgOut.addEventListener('click', ()=>{
  if (keyNumber.value=='' || msgIn.value==''){
    alert('Sin clave o mensaje no es posible el camuflaje (-_-)ゞ゛');
  } else {
  msgOut.innerHTML=cipher.decode(parseInt(keyNumber.value),msgIn.value);
  document.getElementById('personalresult').innerHTML='Uyuyuy! qué interesante ( ͡° ͜ʖ ͡°)';
  document.getElementById('section1').style.display='none';
  document.getElementById('section2').style.display='block';
  document.getElementById('key').value="";
  document.getElementById('msg').value="";
}});
//Botón enviar texto copiado por Web.Whatsapp
document.getElementById('send').addEventListener('click', ()=>{
  if (window.matchMedia("(max-width: 500px)").matches) { 
    document.getElementById('result').select();
    document.execCommand("copy");
    window.open("https://api.whatsapp.com","_blank")
  } else {
    document.getElementById('result').select();
    document.execCommand("copy");
    window.open("https://web.whatsapp.com/","_blank")
  }
});
//Botón retornar al Menú
document.getElementById('start').addEventListener('click', ()=>{
  document.getElementById('section2').style.display='none';
  document.getElementById('section1').style.display='block';
});
//Botón ocultarse
document.getElementById('hide').addEventListener('click', ()=>{
   document.title = 'Me encanta estudiar :V';
   document.body.style.backgroundImage = 'none';
   document.body.style.backgroundColor = '#000000';
   document.getElementById('section2').style.display='none';
   document.getElementById('section3').style.display='block';
});
//"Continuar" -> "Volver al encryptioner"
document.getElementById('continue').addEventListener('click', ()=>{
  document.getElementById('section3').style.display='none';
  document.getElementById('section2').style.display='block';
  document.body.style.background = 'url(https://preview.ibb.co/ha0Jjq/Anti-Teacher-Background.png)';
  document.title = 'ANTI -TEACHER. My secreat classroom encryptioner';
});
//"Quiero estudiar"
document.getElementById('study').addEventListener('click', ()=>{
  window.open("https://es.wikipedia.org/wiki/Alan_Turing","_self")
});
