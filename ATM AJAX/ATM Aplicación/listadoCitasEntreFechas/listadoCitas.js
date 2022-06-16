document.getElementById("btnAceptarCitasFechas").addEventListener("click", muestraCitasFechas, false);

function muestraCitasFechas(oEVento) {
  let oE = oEVento || window.event;
  let fecha1= frmCitasFecha.txtFechaInicio.value.trim();
  let fecha2= frmCitasFecha.txtFechaFin.value.trim();

 
  $.ajax({
    url: "listadoCitasEntreFechas/listadoCitas.php",
    type: "GET",
    async: true,
    data: {fechainicio:fecha1, fechafin:fecha2},
    dataType: "xml",
    //success: respuestaJson2
}).done(listarCitas);

}


function listarCitas(data, status, oXHR){
  var oOptions = data.querySelectorAll("cita");
  console.log(oOptions);
  var table = "<table class='table table-dark'>";
  table += "<thead><tr><th scope='col'>ID de cita</th><th scope='col'>ID de cliente</th><th scope='col'>Fecha</th><th scope='col'>Reforma</th></thead>";

  for (let i = 0; i < oOptions.length; i++) {
    table +=
      "<tr><td scope='row'>" +
      oOptions[i].querySelector("idCita").textContent +
      "</td><td scope='row'>" +
      oOptions[i].querySelector("cliente").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("fecha").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("reforma").textContent +
      "</td></tr>";
  }
  table += "</table>";
  let divL = document.querySelector('#listados');
  divL.innerHTML = null;
  $("#listados").html(table);
  
}