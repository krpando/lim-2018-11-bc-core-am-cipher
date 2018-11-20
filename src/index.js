//Botones cifrar y descifrar
let textIn=document.getElementById('msg');
let keySet=document.getElementById('codi');
let buttonMsgOn=document.getElementById('cif');
let buttonMsgOff=document.getElementById('des');
let msgOut=document.getElementById('result');

buttonMsgOn.addEventListener('click', ()=>{
  msgOut.innerHTML=encode(parseInt(keySet.value),textIn.value);
});

buttonMsgOff.addEventListener('click', ()=>{
  msgOut.innerHTML=decode(parseInt(keySet.value),textIn.value);
});
//Botones "Seguir jugando" y "Quiero estudiar"
const jugando=document.getElementById('playing');
const estudiando=document.getElementById('studying');
jugando.addEventListener('click', ()=>{
  
});
