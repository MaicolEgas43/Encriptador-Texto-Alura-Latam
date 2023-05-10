/*const divMostarTexto = document.querySelector(".view-text");
const divMostrarImg = document.querySelector("first-empty-output");
const oText = document.getElementById("oText");*/

function capturarCadenaTexto(){
    var cadenaTexto = document.getElementById("cadenaTexto").value;
    return cadenaTexto ;

function validarCadena(cadena) {
    var patron = /^[a-z0-9\s]+$/;
    return patron.test(cadena);
}

function encriptar(){    
    var cadenaTexto = capturarCadenaTexto();
    let stringEncripted = "";
    var resultEncr = document.getElementById("empty-output")
    if (validarCadena(cadenaTexto)){
        stringEncripted = cadenaTexto.replaceAll('e', "enter").replaceAll('i',"imes").replaceAll('a',"ai").replaceAll('o',"ober").replaceAll('u',"ufat");
        console.log(stringEncripted)

        resultEncr.innerHTML = stringEncripted;
        resultEncr.style.color = "#0A3871";
        resultEncr.style.fontSize = '26px';
        resultEncr.style.marginBottom = "auto";

        document.getElementById("btn-copiar").style.display = 'block';

    }
    else{
        resultEncr.innerHTML = "El texto " + " { " + cadenaTexto + " } " + " No debe contener caracteres especiales ni mayusculas";
        resultEncr.style.fontSize = '26px';
        resultEncr.style.marginBottom = "auto";
    }
    
    document.getElementById("img-empty-output").style.display = 'none';
    document.getElementById("msj-empty-output").style.display = 'none';
    document.getElementById("empty-output").style.justifyContent  = 'start';
}
function  desencriptar(){
    var cadenaTexto = capturarCadenaTexto();
    let stringEncripted = "";
    var resultEncr = document.getElementById("empty-output")
    if (validarCadena(cadenaTexto)){
        stringEncripted = cadenaTexto.replaceAll("enter", 'e').replaceAll("imes",'i').replaceAll("ai","a").replaceAll("ober",'o').replaceAll("ufat","u");
        console.log(stringEncripted)
        
        resultEncr.innerHTML = stringEncripted;
        resultEncr.style.color = "#0A3871";
        resultEncr.style.fontSize = '26px';
        resultEncr.style.marginBottom = "auto";

        document.getElementById("btn-copiar").style.display = 'block';
    }
    else{
        resultEncr.innerHTML = "El texto " + "{" + cadenaTexto + "}" + " No debe contener caracteres especiales ni mayusculas";
    }
    document.getElementById("img-empty-output").style.display = 'none';
    document.getElementById("msj-empty-output").style.display = 'none';
    document.getElementById("empty-output").style.justifyContent  = 'start';

 }

 function copiarTexto() {

    let copiarTexto = document.getElementById("btn-copiar");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); // celulares
  
    navigator.clipboard.writeText(copiarTexto.value);
  
    alert("Se ha copiado el texto: " + copiarTexto.value);
}