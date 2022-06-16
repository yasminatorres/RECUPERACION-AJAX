<?php
    $servidor  = "localhost";
    $basedatos = "atm";
    $usuario   = "root";
    $password  = "";

    $datosJSON = $_GET["datosPeon"];

    $peon = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    mysqli_set_charset($conexion,"utf8");
    mysqli_report(MYSQLI_REPORT_OFF);


    $sql = "INSERT INTO peones (idPeon, nombre, apellido, telefono, email, categoria) VALUES ('$peon->idPeon','$peon->nombre','$peon->apellido','$peon->telefono','$peon->email','$peon->categoria');";
    $resultado = mysqli_query($conexion,$sql);

    if ($resultado){
        $respuesta["error"] = 0;
        $respuesta["mensaje"] = "Alta realizada"; 
    } else {
        $respuesta["error"] = 1;
        $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
    }
    echo json_encode($respuesta);

    mysqli_close($conexion);
?>