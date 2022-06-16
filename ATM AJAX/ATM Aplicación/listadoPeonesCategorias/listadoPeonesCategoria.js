rellenarCombo();

document.getElementById("btnAceptarListadoPeones").addEventListener("click", muestraListadoGetXml, false);

function muestraListadoGetXml(oEVento) {
  let oE = oEVento || window.event;
  let categoria= frmListadoPeonesCategoria.txtCategoria.value.trim();

 
  $.ajax({
    url: "listadoPeonesCategorias/listadoPeonesCategoria.php",
    type: "GET",
    async: true,
    data: ("categoria=" + categoria),
    dataType: "xml",
    //success: respuestaJson2
}).done(listarPeones);

}


function listarPeones(data, status, oXHR){
  var oOptions = data.querySelectorAll("peon");
  console.log(oOptions);
  var table = "<table class='table table-dark'>";
  table += "<thead><tr><th scope='col'>ID Peón</th><th scope='col'>Nombre</th><th scope='col'>Apellido</th><th scope='col'>Telefono</th><th scope='col'>Email</th><th scope='col'>Categoría</th></thead>";

  for (let i = 0; i < oOptions.length; i++) {
    table +=
      "<tr><td scope='row'>" +
      oOptions[i].querySelector("idPeon").textContent +
      "</td><td scope='row'>" +
      oOptions[i].querySelector("nombre").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("apellido").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("telefono").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("email").textContent +
      "</td><td scope='row'>"+
      oOptions[i].querySelector("categoria").textContent +
      "</td></tr>";
  }
  table += "</table>";
  let divL = document.querySelector('#listados');
  divL.innerHTML = null;
  $("#listados").html(table);
  rellenarCombo();
  
}

function rellenarCombo(oEVento) {
  let oE = oEVento || window.event;


  $.get("listadoPeonesCategorias/getCategorias.php", null, rellenaComboCategorias, 'xml');
  

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