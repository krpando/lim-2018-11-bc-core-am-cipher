window.cipher = {
//Función Cifrar
  encode : (offset, string) => {
    let textOut=new Array();
     for(let i=0;i<string.length;i+=1){
        let coded=parseInt(string.charCodeAt(i));
        if(string.charCodeAt(i)===32){
         textOut.push(' ');
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
        } else
         textOut.push(String.fromCharCode(`${(coded-90-offset)%26+90}`));
     } return textOut.join('');
  }
};
