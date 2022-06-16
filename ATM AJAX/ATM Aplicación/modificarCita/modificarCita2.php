<?php
// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "atm";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
$datosJSON = $_POST["datos"];
// Decodifico el objeto persona
$modificacion = json_decode($datosJSON);

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_report(MYSQLI_REPORT_OFF);

$sql = "UPDATE citas SET fecha='$modificacion->fecha',reforma='$modificacion->reforma' WHERE idCita='$modificacion->idCita'";
$resultado = mysqli_query($conexion,$sql);

/*$relleno = "SELECT fecha,reforma FROM citas WHERE idCita='$modificacion->idCita' FOR JSON AUTO";
$resultado2 = mysqli_query($conexion,$relleno);

$arrayRelleno = array();
$i=0;
while($row=$resultado2->fetch_assoc()) { 
    $arrayRelleno[$i] = $row; 
    $i++; 
} 

json_encode($arrayRelleno);

echo "<pre>";
print_r($arrayRelleno);
echo "</pre>";*/

if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Modificacion realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de modificacion: ".mysqli_error($conexion);
}

/*try{
    mysqli_query($conexion,$sql);
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
}
catch(Exception $e){
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".$e->getMessage();
}*/

echo json_encode($respuesta);

mysqli_close($conexion);
?>