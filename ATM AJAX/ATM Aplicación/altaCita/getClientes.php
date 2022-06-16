<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "atm";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "SELECT idCliente,nombre FROM clientes";

$resultados = mysqli_query($conexion,$sql);

$arrayClientes=array();

while($fila=mysqli_fetch_assoc($resultados)){

$arrayClientes[]=$fila;

}

echo json_encode($arrayClientes);

mysqli_close($conexion);

?>