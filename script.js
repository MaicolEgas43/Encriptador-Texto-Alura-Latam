function validarCadena(cadena) {
    var patron = /^[a-z0-9\s]+$/;
    return patron.test(cadena);
}

function encriptar(){    
    var cadenaTexto = document.getElementById("cadenaTexto").value;
    if (validarCadena(cadenaTexto)){
        var stringEncripted = cadenaTexto.replaceAll('e', "enter").replaceAll('i',"imes").replaceAll('a',"ai").replaceAll('o',"ober").replaceAll('u',"ufat");
        document.getElementById("first-empty-output").innerHTML = stringEncripted;
        document.getElementById("first-empty-output").classList.add("nuevos-estilos");
        //document.getElementById("empty-output").style.display = "block";
    }
    else{
        document.getElementById("first-empty-output").innerHTML = "El texto \"" + cadenaTexto + "\" No debe contener caracteres especiales ni mayusculas";
        document.getElementById("first-empty-output").style.fontSize = '26px';
        // TO-DO Hacer que aparezce le boton :c 
        
    }
    
    document.getElementById("img-empty-output").style.display = 'none';
    document.getElementById("msj-empty-output").style.display = 'none';
    document.getElementById("empty-output").style.justifyContent  = 'start';
}
function  desencriptar(){
    var cadenaTexto = document.getElementById("cadenaTexto").value;    
    if (validarCadena(cadenaTexto)){
        var stringEncripted = cadenaTexto.replaceAll("enter", 'e').replaceAll("imes",'i').replaceAll("ai","a").replaceAll("ober",'o').replaceAll("ufat","u");
        document.getElementById("first-empty-output").innerHTML = stringEncripted;
        document.getElementById("first-empty-output").classList.add("nuevos-estilos");
        resultEncr.style.marginBottom = "auto";

        document.getElementById("btn-copiar").style.display = 'block';
    }
    else{
        document.getElementById("first-empty-output").innerHTML = "El texto \"" + cadenaTexto + "\" No debe contener caracteres especiales ni mayusculas";
    }
    //document.getElementById("img-empty-output").style.display = 'none';
    document.getElementById("msj-empty-output").style.display = 'none';
    document.getElementById("empty-output").style.justifyContent  = 'start';
}

function copiarTexto() {
    const texto = document.getElementById("texto").innerText;
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  }
  