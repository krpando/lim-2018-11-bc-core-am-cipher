window.cipher = {
//Función Cifrar
  encode : (offset, string) => {
    let textOut=new Array();
     for(let i=0;i<string.length;i+=1){
        let coded=parseInt(string.charCodeAt(i));
          if(string.charCodeAt(i)===32){
            textOut.push(' ');
          } else if(string.charCodeAt(i)===46){
            textOut.push('.');
          } else if(string.charCodeAt(i)===44){
            textOut.push(',');
          } else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
            textOut.push(String.fromCharCode(`${(coded-97+offset)%26+97}`));
          } else
            textOut.push(String.fromCharCode(`${(coded-65+offset)%26+65}`));
     } return textOut.join('');
   },
//Función Descifrar
  decode : (offset, string) => {
    let textOut=new Array();
     for(let i=0;i<string.length;i+=1){
        let coded=parseInt(string.charCodeAt(i));
          if(string.charCodeAt(i)===32){
            textOut.push(' ');
          } else if(string.charCodeAt(i)===46){
            textOut.push('.');
          } else if(string.charCodeAt(i)===44){
            textOut.push(',');
          } else if(string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
            textOut.push(String.fromCharCode(`${(coded-122-offset)%26+122}`));
          } else
            textOut.push(String.fromCharCode(`${(coded-90-offset)%26+90}`));
     } return textOut.join('');
  }
};
