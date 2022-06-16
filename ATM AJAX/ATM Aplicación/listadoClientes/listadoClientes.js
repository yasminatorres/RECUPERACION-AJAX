"use strict"

getLista();

function getLista(){
    $.get(
        "listadoClientes/listadoClientes.php",
        null,
        procesoRespuesta,
        "html"
    );
}

function procesoRespuesta(datos, textStatus, jqXHR){
    let divL = document.querySelector('#listados');
    divL.innerHTML = "";
    divL.innerHTML = datos;
}

document.querySelector("#mnuListaClientes").addEventListener("click", getLista, false);