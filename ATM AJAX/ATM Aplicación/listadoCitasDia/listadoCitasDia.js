document.getElementById("btnAceptarListadoCitas").addEventListener("click", muestraListadoGetXml, false);

function muestraListadoGetXml(oEVento) {
  let oE = oEVento || window.event;
  let fecha1= frmListadoCitasDia.txtFechaPedido.value.trim();

 
  $.ajax({
    url: "listadoCitasDia/listadoCitasDia.php",
    type: "GET",
    async: true,
    data: ("fecha1=" + fecha1),
    dataType: "xml",
    //success: respuestaJson2
}).done(listarCitas);

}


function listarCitas(data, status, oXHR){
  var oOptions = data.querySelectorAll("cita");
  console.log(oOptions);
  var table = "<table class='table table-dark'>";
  table += "<thead><tr><th scope='col'>ID Cita</th><th scope='col'>ID Cliente</th><th scope='col'>Fecha</th><th scope='col'>Reforma</th></thead>";

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