rellenarCombo();


function rellenarCombo(oEVento) {
    let oE = oEVento || window.event;
  
  
    $.get("modificarCita/getModificarCita.php", null, rellenaComboCitas, 'xml');
    
  
  }
  
  function rellenaComboCitas(data, status, oXHRS) {
  
    console.log(data);
  
  
    var oOptions = data.querySelectorAll("cita");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("id").textContent;
        sOptions += "</option>";
        
    }
    
  
    document.getElementById("txtIDModificarCita").innerHTML=sOptions;
  
  }

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

  $("#btnBuscarModificarCita").click(function() {
    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmModificarCita2')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificacionPersona').size() == 0) {
    if (document.querySelector("#frmModificarCita2") == null){
        $("<div>").appendTo('#formularios').load("modificarCita/modificarCita2.html",
            function() {
                $.getScript("modificarCita/modificarCita2.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificarCita2').parent().show("normal");
    }

    rellenarInputs();
    
  });

function rellenarInputs(){
    
    let id = frmModificarCita.txtIDModificarCita.options[frmModificarCita.txtIDModificarCita.options.selectedIndex];

    frmModificarCita2.txtFechaCita.value= id.dataset.fecha;
    frmModificarCita2.txtTipoReforma.value=id.dataset.reforma;

}
  