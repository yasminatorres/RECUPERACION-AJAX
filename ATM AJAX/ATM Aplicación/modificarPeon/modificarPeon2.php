<?php
// Configuraci�n BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "atm";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
//Decodifico el objeto persona
$modificacion = json_decode($datosJSON);

// Creamos la conexi�n al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");


$sql = "UPDATE peones SET telefono='$modificacion->telefono',email='$modificacion->email',categoria='$modificacion->categoria' WHERE idPeon='$modificacion->idPeon'";

$resultado = mysqli_query($conexion, $sql);

if ($resultado) {
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Modificacion realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de modificacion: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
?>