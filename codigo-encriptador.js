const mensajeEntrada = document.querySelector(".mensaje");
const mensajeResuelto = document.querySelector(".final");

//Encriptar
function finalEncriptar(){
    if(mensajeEntrada.value==""){
        alert ("Debe ingresar un texto");
    }
    else{
    const mensajeEncriptado = encriptar(mensajeEntrada.value)
    mensajeResuelto.value = mensajeEncriptado
    mensajeEntrada.value = "";
    document.getElementById("vacio").style.display = "none";
    document.getElementById("solucion").style.display = "inline-block";
    }
    return
}

function encriptar(encriptado){
    let matrizCambio =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    encriptado = encriptado.toLowerCase()

    for(let i=0; i < matrizCambio.length; i++){
        if(encriptado.includes(matrizCambio[i][0])){
            encriptado = encriptado.replaceAll(matrizCambio[i][0],matrizCambio[i][1])
        }
    }
    return encriptado
}

//Desencriptar
function finalDesencriptar(){
    if(mensajeEntrada.value==""){
        alert ("Debe ingresar un texto");
    }
    else{
        const mensjaeDesencriptado = desencriptar(mensajeEntrada.value)
        mensajeResuelto.value = mensjaeDesencriptado
        mensajeEntrada.value = "";
        document.getElementById("vacio").style.display = "none";
        document.getElementById("solucion").style.display = "inline-block";
    }
    return
}

function desencriptar(desencriptado){
    let matrizCambio =[["u","ufat"], ["o","ober"],["a","ai"],["i","imes"],["e","enter"]]
    desencriptado = desencriptado.toLowerCase()
    
    for(let i=0; i < (matrizCambio.length); i++){
        if(desencriptado.includes(matrizCambio[i][1])){
            desencriptado = desencriptado.replaceAll(matrizCambio[i][1],matrizCambio[i][0])
        }
    }
    return desencriptado
}


//copiar

const respuesta = document.querySelector(".final");
const botonCopiar = document.querySelector(".boton-copiar");
  
botonCopiar.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(respuesta.value);
    } catch (err) {
      console.error(err.name, err.message);
    }
  });