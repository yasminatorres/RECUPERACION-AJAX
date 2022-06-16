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

  $("#btnBuscarModificarCita2").click(function() {
    let modificacion = {
      idCita: frmModificarCita.txtIDModificarCita.value.trim(),
      fecha: frmModificarCita2.txtFechaCita.value.trim(),
      reforma: frmModificarCita2.txtTipoReforma.value.trim(),
    };
        
      $.ajax({
        url: "modificarCita/modificarCita2.php",
        data: "datos=" + JSON.stringify(modificacion),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaModificarCita
    });
    
  });
  
  function respuestaModificarCita(resultado) {
    console.log(resultado);
    let datos = JSON.parse(resultado);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
    } else {
        alert(datos["mensaje"]);
        frmModificarCita.reset();
        $("#frmModificarCita").parent("div").hide("normal");
        rellenarCombo();
    }
  }