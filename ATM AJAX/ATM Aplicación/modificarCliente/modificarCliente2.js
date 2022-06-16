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

$("#btnAceptarModificarPersona2").click(function() {
    let modificacion = {
        idCliente: frmModificacionPersona.txtIdModificarCliente.value.trim(),
        telefono: frmModificacionPersona2.txtTelefonoCliente.value.trim(),
        email: frmModificacionPersona2.txtEmail.value.trim(),
        direccion: frmModificacionPersona2.txtDireccionCliente.value.trim(),
    };

      $.ajax({
        url: "modificarCliente/modificarCliente2.php",
        data: "datos=" + JSON.stringify(modificacion),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaModificarCliente
    });
});
  
function respuestaModificarCliente(respuesta) {
    console.log(respuesta);
    let datos = JSON.parse(respuesta);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
    } else {
        alert(datos["mensaje"]);
        frmModificacionPersona.reset();
        $("#frmModificacionPersona").parent().hide("normal");
    }
}

