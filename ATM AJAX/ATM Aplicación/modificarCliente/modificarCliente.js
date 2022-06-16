rellenarCombo();

$("#btnAceptarModificarPersona").click(function() {
    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmModificacionPersona2')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificacionPersona').size() == 0) {
    if (document.querySelector("#frmModificacionPersona2") == null){
        $("<div>").appendTo('#formularios').load("modificarCliente/modificarCliente2.html",
            function() {
                $.getScript("modificarCliente/modificarCliente2.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificacionPersona2').parent().show("normal");
    }

});

function rellenarCombo(oEVento) {
    let oE = oEVento || window.event;
  
  
    $.get("modificarCliente/getClientesModificar.php", null, rellenaComboClientes, 'xml');
    
  
}
  
function rellenaComboClientes(data, status, oXHRS) {
  
    console.log(data);
  
  
    var oOptions = data.querySelectorAll("cliente");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
        sOptions += "</option>";
        
    }
    
  
    document.getElementById("txtIdModificarCliente").innerHTML=sOptions;
  
}

//instanciaXHR
function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}