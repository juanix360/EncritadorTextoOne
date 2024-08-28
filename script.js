
let btnEncriptar = document.querySelector("#btn-encriptar");
const rules = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"}; /* rules = {Obj=valor del Obj}*/

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (Validar_ImputText (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click",function(){        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value="";

});

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
})

/* Funcion Validar Texto de Entrada*/
function Validar_ImputText (text) {
    
    let caracteres_especiales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let caracteres_mayusculas = /[A-Z]/g;  
    let sin_caracteres="";  
      
    if(text.match(caracteres_mayusculas)||text.match(caracteres_especiales)){
        alert("Caracteres especiales ni mayusculas, no son permitidos");
        return true; 
    }else if(text==sin_caracteres){
       alert("Ingrese un mensaje a encriptar");
        return true;
   }else {
        return false;
    }
}

/* Funcion para encriptar el texto de entrada*/
function encriptar (textImput) {
    let textEncriptado = "";
    for (const obj in rules) {
        textEncriptado = textImput.replaceAll(obj,rules[obj]);
        textImput = textEncriptado;   /*Se agregan las correciones al texto ingresado, para seguir con las siguientes*/        
    }
    return (textEncriptado);
}

/* Funcion para desencriptar texto de entrada*/
function desencriptar (textImput) {
    let textOriginal = "";
    for (const obj in rules) {
        textOriginal = textImput.replaceAll(rules[obj],obj);
        textImput = textOriginal;      
    }
    return (textOriginal);
}







