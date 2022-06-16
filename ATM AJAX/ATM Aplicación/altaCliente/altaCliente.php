<?php
    $servidor  = "localhost";
    $basedatos = "atm";
    $usuario   = "root";
    $password  = "";

    $datosJSON = $_GET["datosCliente"];

    $cliente = json_decode($datosJSON);

    $conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
    mysqli_set_charset($conexion,"utf8");


    $sql = "INSERT INTO clientes (idCliente, nombre, apellido, telefono, email, direccion) VALUES ('$cliente->idCliente','$cliente->nombre','$cliente->apellido','$cliente->telefono','$cliente->email','$cliente->direccion');";
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