window.cipher = {
//Cifrar mensaje
function cifrar(){
  let word=document.getElementById("x").value;
  let code=parseInt(document.getElementById("y").value);
  let vao=new Array();
    for(let position=0;position<word.length;position+=1){
      let total=word.charCodeAt(position);
          if(word.charCodeAt(position)===32){
       vao.push(" ");
       } else  
        vao.push(String.fromCharCode(`${(total-65+code)%26+65}`));}
            document.getElementById("z").innerHTML=vao.join("");
            document.getElementById("section1").style.display="none";
            document.getElementById("section2").style.display="block";
}
//Descifrar mensaje
function descifrar(){
  let word=document.getElementById("x").value;
  let code=parseInt(document.getElementById("y").value);
  let vao=new Array();
    for(let position=0;position<word.length;position+=1){
      let total=word.charCodeAt(position);
          if(word.charCodeAt(position)===32){
       vao.push(" ");
       } else
        vao.push(String.fromCharCode(`${(total-65-code)%26+65}`));}
            document.getElementById("z").innerHTML=vao.join("");
            document.getElementById("section1").style.display="none";
            document.getElementById("section2").style.display="block";
    }
};
