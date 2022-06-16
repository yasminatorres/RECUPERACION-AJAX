localStorage.clear();
muestraClientesGetJson();

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
   

function muestraClientesGetJson(oEvento) {

    let oE = oEvento || window.event;

    if (localStorage["clientes"] != undefined) {
      let x= localStorage.getItem('clientes');
      let llenaLista= JSON.parse(x);
        var sOptions="";
        for (var i = 0; i < llenaLista.length; i++) {
          sOptions += '<option value="' + llenaLista[i].id;
          sOptions += '">' + llenaLista[i].nombre;
          sOptions += "</option>";
          
      }   
      document.getElementById("lstCliente").innerHTML=sOptions; 
    }
    
    else {
        oAJAX = objetoXHR();
        oAJAX.addEventListener("readystatechange", cargarLocalStorage1);
        oAJAX.open("GET", "altaCita/getClientes.php", true);
        oAJAX.send();
           
    }
    
}

function cargarLocalStorage1(data) {
    
    if (this.readyState == 4 && this.status == 200) {

        console.log(data);
        localStorage["clientes"]=data.target.response;
          let x= localStorage.getItem('clientes');
          let llenaLista= JSON.parse(x);
          var sOptions="";
          for (var i = 0; i < llenaLista.length; i++) {
            sOptions += '<option value="' + llenaLista[i].id;
            sOptions += '">' + llenaLista[i].nombre;
            sOptions += "</option>";
            
        }   
        document.getElementById("lstCliente").innerHTML=sOptions; 

    }

}


$("#btnAceptarCita").click(function() {
    let cita = {
        idCita: frmAltaCita.txtIDCita.value.trim(),
        cliente: frmAltaCita.lstCliente.value.trim(),
        fecha: frmAltaCita.txtFechaCita.value.trim(),
        reforma: frmAltaCita.txtTipoReforma.value.trim(),
    };
    
    if(cita.idCita.length == 0|| cita.cliente.length == 0|| cita.fecha.length == 0|| cita.reforma==false){
      alert("faltan datos por rellenar");
    }
    
    else{
      $.ajax({
        url: "altaCita/altaCita.php",
        data: "datos=" + JSON.stringify(cita),
        cache: false,
        async: true, // por defecto
        method: "POST",
        success: respuestaaltaCita
    });
    }
  });
  
  function respuestaaltaCita(resultado) {
    console.log(resultado);
    let datos = JSON.parse(resultado);
    console.log(datos);
    if (datos["error"]) {
        alert(datos["mensaje"]);
        frmAltaCita.reset();
    } else {
        alert(datos["mensaje"]);
        frmAltaCita.reset();
        $("#frmAltaCita").parent("div").hide("normal");
    }
  }