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
  msgOut.innerHTML=encode(parseInt(keyNumber.value),msgIn.value);
  document.getElementById('personalresult').innerHTML='Listo! ahora es secreto ( ͡° ͜ʖ ͡°)';
  document.getElementById('section1').style.display='none';
  document.getElementById('section2').style.display='block';
});
//Correr función descifrar
buttonMsgOut.addEventListener('click', ()=>{
  msgOut.innerHTML=decode(parseInt(keyNumber.value),msgIn.value);
  document.getElementById('personalresult').innerHTML='Uy! que interesante ( ͡° ͜ʖ ͡°)';
  document.getElementById('section1').style.display='none';
  document.getElementById('section2').style.display='block';
});
//Botón retornar al Menú
document.getElementById('start').addEventListener('click', ()=>{
  document.getElementById('section2').style.display='none';
  document.getElementById('section1').style.display='block';
});
//Botón ocultarse
document.getElementById('hide').addEventListener('click', ()=>{
   document.title = 'Me gusta estudiar :v';
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
});
//"Quiero estudiar"
document.getElementById('study').addEventListener('click', ()=>{
  document.getElementById('section3').style.display='none';
});
//https://web.whatsapp.com/
