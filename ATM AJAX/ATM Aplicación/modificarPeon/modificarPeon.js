rellenarCombo();

$("#btnAceptarModificarPeon").click(function() {
  // Oculto todos los formularios menos este
  $("table").parent("div").hide("normal");
  $("form:not('#frmModificacionPeon2')").parent("div").hide("normal");

  // Verifico si ya he cargado el formulario antes
  // if ($('#frmModificacionPersona').size() == 0) {
  if (document.querySelector("#frmModificacionPeon2") == null){
      $("<div>").appendTo('#formularios').load("modificarPeon/modificarPeon2.html",
          function() {
              $.getScript("modificarPeon/modificarPeon2.js");
          });

  } else {
      // Lo muestro si está oculto
      $('#frmModificacionPeon2').parent().show("normal");
  }
});
  



  function rellenarCombo(oEVento) {
    let oE = oEVento || window.event;
  
  
    $.get("modificarPeon/getModificarPeon.php", null, rellenaComboPeones, 'xml');
    
  
  }
  
  function rellenaComboPeones(data, status, oXHRS) {
  
    console.log(data);
  
  
    var oOptions = data.querySelectorAll("peon");
    var sOptions="";
    console.log(oOptions);
    console.log(sOptions);
  
    //Cargar options
    for (var i = 0; i < oOptions.length; i++) {
        sOptions += '<option value="' + oOptions[i].querySelector("id").textContent;
        sOptions += '">' + oOptions[i].querySelector("nombre").textContent;
        sOptions += "</option>";
        
    }
    
  
    document.getElementById("txtIdModificarPeon").innerHTML=sOptions;
  
  }