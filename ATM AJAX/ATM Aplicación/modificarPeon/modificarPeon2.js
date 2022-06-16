rellenarCombo();

function objetoXHR() {
    if (window.XMLHttpRequest) {
      // El navegador implementa la interfaz XHR de forma nativa
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      var versionesIE = new Array(
        "MsXML2.XMLHTTP.5.0",
        "MsXML2.XMLHTTP.4.0",
        "MsXML2.XMLHTTP.3.0",
        "MsXML2.XMLHTTP",
        "Microsoft.XMLHTTP"
      );
      for (var i = 0; i < versionesIE.length; i++) {
        try {
          return new ActiveXObject(versionesIE[i]);
        } catch (errorControlado) {} //Capturamos el error,
      }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

$("#btnAceptarModificarPeon2").click(function() {
    let modificacion = {
      idPeon: frmModificacionPeon.txtIdModificarPeon.value.trim(),
      telefono: frmModificacionPeon2.txtTelefonoPeon.value.trim(),
      email: frmModificacionPeon2.txtEmail.value.trim(),
      categoria: frmModificacionPeon2.txtCategoria.value.trim(),
    };

    $.ajax({
        url: "modificarPeon/modificarPeon2.php",
        data: "datos=" + JSON.stringify(modificacion),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaModificarPeon
    });
});
  
function respuestaModificarPeon(respuesta) {
    console.log(respuesta);
    let datos = JSON.parse(respuesta);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
        frmModificacionPeon.reset();
        rellenarCombo();
    } else {
        alert(datos["mensaje"]);
        frmModificacionPeon.reset();
        $("#frmModificacionPeon2").parent().hide("normal");
    }
}

function rellenarCombo(oEVento) {
    let oE = oEVento || window.event;
  
  
    $.get("modificarPeon/getCategorias.php", null, rellenaComboCategorias, 'xml');
    
  
}
  
function rellenaComboCategorias(data, status, oXHRS) {
  
    console.log(data);
  
  
    var oOptions = data.querySelectorAll("categoria");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
        sOptions += "</option>";
        
    }
    
  
    document.getElementById("txtCategoria").innerHTML=sOptions;
  
}