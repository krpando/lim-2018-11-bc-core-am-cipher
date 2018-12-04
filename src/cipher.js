window.cipher = {
//Función Cifrar
  encode : (offset, string) => {
    let textOut = [];
    for(let i=0; i<string.length; i+=1){
      let coded = parseInt(string.charCodeAt(i));
      //Para el espacio
      if(string.charCodeAt(i) === 32){
        textOut.push(" ");
      //Para los símbolos y números
      } else if(string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64){
        textOut.push(String.fromCharCode(`${(coded-33+offset)%32+33}`));
      //Para el abecedario en minúsculas   
      } else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
        textOut.push(String.fromCharCode(`${(coded-97+offset)%26+97}`));
      //Para el abecedario en mayúsculas  
      } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
        textOut.push(String.fromCharCode(`${(coded-65+offset)%26+65}`));
      //Para todos los demás caracteres no considerados
      } else
        textOut.push(String.fromCharCode(coded+1));
    } return textOut.join("");
  },
//Función Descifrar
  decode : (offset, string) => {
    let textOut=[];
    for(let i=0; i<string.length; i+=1){
      let coded=parseInt(string.charCodeAt(i));
      //Para el espacio
      if(string.charCodeAt(i) === 32){
        textOut.push(" ");
      //Para los símbolos y números
      } else if(string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 64){
        textOut.push(String.fromCharCode(`${(coded-64-offset)%32+64}`));
      //Para el abecedario en minúsculas  
      } else if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
        textOut.push(String.fromCharCode(`${(coded-122-offset)%26+122}`));
      //Para el abecedario en mayúsculas  
      } else if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
        textOut.push(String.fromCharCode(`${(coded-90-offset)%26+90}`));
      //Para todos los demás caracteres no considerados
      } else
        textOut.push(String.fromCharCode(coded-1));
    } return textOut.join("");
  }
};