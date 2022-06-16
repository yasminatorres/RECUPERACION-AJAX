// Carga dinámica de formularios
$("#mnuAltaCategoria").click(abrirAltaCategoria);
$("#mnuAltaCliente").click(abrirAltaCliente);
$("#mnuModificarCliente").click(abrirModificarCliente);
$("#mnuAltaPeon").click(abrirAltaPeon);
$("#mnuModificarPeon").click(abrirModificarPeon);
$("#mnuAltaCita").click(abrirAltaCita);
$("#mnuModificarCita").click(abrirModificarCita);
$("#mnuListaClientes").click(abrirListaClientes);
$("#mnuCitasFechas").click(abrirListaCitasFechas);
$("#mnuListaPeonCategorias").click(abrirListaPeonCategorias);
$("#mnuCitasDia").click(abrirCitasDia);

function abrirAltaCategoria() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaCategoria')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaCategoria').size() == 0) {
    if (document.querySelector("#frmAltaCategoria") == null){
        $("<div>").appendTo('#formularios').load("altaCategoria/altaCategoria.html",
            function() {
                $.getScript("altaCategoria/altaCategoria.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCategoria').parent().show("normal");
    }
}

function abrirAltaCliente() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaCliente')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaCliente').size() == 0) {
    if (document.querySelector("#frmAltaCliente") == null){
        $("<div>").appendTo('#formularios').load("altaCliente/altaCliente.html",
            function() {
                $.getScript("altaCliente/altaCliente.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCliente').parent().show("normal");
    }
}

function abrirModificarCliente() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmModificacionPersona')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificacionPersona').size() == 0) {
    if (document.querySelector("#frmModificacionPersona") == null){
        $("<div>").appendTo('#formularios').load("modificarCliente/modificarCliente.html",
            function() {
                $.getScript("modificarCliente/modificarCliente.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificacionPersona').parent().show("normal");
    }
}

function abrirAltaPeon() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaPeon')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaPeon').size() == 0) {
    if (document.querySelector("#frmAltaPeon") == null){
        $("<div>").appendTo('#formularios').load("altaPeon/altaPeon.html",
            function() {
                $.getScript("altaPeon/altaPeon.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaPeon').parent().show("normal");
    }
}

function abrirModificarPeon() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmModificacionPeon')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificacionPersona').size() == 0) {
    if (document.querySelector("#frmModificacionPeon") == null){
        $("<div>").appendTo('#formularios').load("modificarPeon/modificarPeon.html",
            function() {
                $.getScript("modificarPeon/modificarPeon.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificacionPeon').parent().show("normal");
    }
}

function abrirAltaCita() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmAltaCita')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmAltaCita').size() == 0) {
    if (document.querySelector("#frmAltaCita") == null){
        $("<div>").appendTo('#formularios').load("altaCita/altaCita.html",
            function() {
                $.getScript("altaCita/altaCita.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCita').parent().show("normal");
    }
}

function abrirModificarCita() {

    // Oculto todos los formularios menos este
    $("table").parent("div").hide("normal");
    $("form:not('#frmModificarCita')").parent("div").hide("normal");
    

    // Verifico si ya he cargado el formulario antes
    // if ($('#frmModificarCita').size() == 0) {
    if (document.querySelector("#frmModificarCita") == null){
        $("<div>").appendTo('#formularios').load("modificarCita/modificarCita.html",
            function() {
                $.getScript("modificarCita/modificarCita.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmModificarCita').parent().show("normal");
    }
}

function abrirListaClientes() {

    // Oculto todos los formularios menos este
    $("form").parent("div").hide("normal");
    $("table").parent("div").show("normal");

    $.getScript("listadoClientes/listadoClientes.js");

    
}

function abrirListaCitasFechas() {

    // Oculto todos los formularios menos este
    $("form:not('#frmCitasFecha')").parent("div").hide("normal");
    let divL = document.querySelector('#listados');
    divL.innerHTML = null;
    $("table").parent("div").show("normal");


    // Verifico si ya he cargado el formulario antes
    // if ($('#frmCitasFecha').size() == 0) {
    if (document.querySelector("#frmCitasFecha") == null){
        $("<div>").appendTo('#formularios').load("listadoCitasEntreFechas/listadoCitas.html",
            function() {
                $.getScript("listadoCitasEntreFechas/listadoCitas.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmCitasFecha').parent().show("normal");
    }
}

function abrirListaPeonCategorias() {

    // Oculto todos los formularios menos este
    $("form:not('#frmListadoPeonesCategoria')").parent("div").hide("normal");
    let divL = document.querySelector('#listados');
    divL.innerHTML = null;
    $("table").parent("div").show("normal");


    // Verifico si ya he cargado el formulario antes
    // if ($('#frmListadoPedidos').size() == 0) {
    if (document.querySelector("#frmListadoPeonesCategoria") == null){
        $("<div>").appendTo('#formularios').load("listadoPeonesCategorias/listadoPeonesCategoria.html",
            function() {
                $.getScript("listadoPeonesCategorias/listadoPeonesCategoria.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmListadoPeonesCategoria').parent().show("normal");
    }
}

function abrirCitasDia() {
    // Oculto todos los formularios menos este
    $("form:not('#frmListadoCitasDia')").parent("div").hide("normal");
    let divL = document.querySelector('#listados');
    divL.innerHTML = null;
    $("table").parent("div").show("normal");


    // Verifico si ya he cargado el formulario antes
    // if ($('#frmListadoPedidos').size() == 0) {
    if (document.querySelector("#frmListadoCitasDia") == null){
        $("<div>").appendTo('#formularios').load("listadoCitasDia/listadoCitasDia.html",
            function() {
                $.getScript("listadoCitasDia/listadoCitasDia.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmListadoCitasDia').parent().show("normal");
    }
}