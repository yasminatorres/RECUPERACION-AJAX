-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2018 a las 00:23:23
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 5.6.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `atm`
--
CREATE DATABASE `atm` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `atm`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `idCategoria` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `experiencia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`idCategoria`, `nombre`, `experiencia`) VALUES
(1, 'Fontaneria', '22 años'),
(2, 'Alicatado', '27 años'),
(3, 'Electricidad', '19 años'),
(4, 'Carpinteria', '27 años'),
(5, 'Enfoscado', '27 años');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE `clientes` (
  `idCliente` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `telefono` int(9) NOT NULL,
  `email` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`idCliente`, `nombre`, `apellido`, `telefono`, `email`, `direccion`) VALUES
(991, 'Paula', 'Cortez', 612233445, 'paulacortez12@gmail.com', 'Calle Espartero, 12'),
(663, 'Joaquin', 'Velasco', 678899098, 'joaquinvelasco33@gmail.com', 'Calle Pasaje, 2'),
(776, 'Araceli', 'Gomez', 655432624, 'araceligomez76@gmail.com', 'Calle Cisne, 32'),
(883, 'Pedro', 'Salguero', 671234567, 'pedrosalguero13@gmail.com', 'Calle La Viña, 127'),
(119, 'Marta', 'Pastor', 611232312, 'martapastor11@gmail.com', 'Calle Curtidores, 3'),
(332, 'Francisco', 'Ibiza', 671911719, 'franciscoibiza98@gmail.com', 'Calle Semblate, 6');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peones`
--

DROP TABLE IF EXISTS `peones`;
CREATE TABLE `peones` (
  `idPeon` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `telefono` int(9) NOT NULL,
  `email` varchar(50) NOT NULL,
  `categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `peones`
--

INSERT INTO `peones` (`idPeon`, `nombre`, `apellido`, `telefono`, `email`, `categoria`) VALUES
(111, 'Antonio', 'Torres', 612233555, 'antoniotorres11@gmail.com', 2),
(222, 'Roberto', 'Martin', 678899777, 'robertomartin22@gmail.com', 4),
(333, 'Miguel', 'Torres', 65548565, 'migueltorres33@gmail.com', 3),
(444, 'Riva', 'Barbero', 671911211, 'rivabarbero444@gmail.com', 1);


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

DROP TABLE IF EXISTS `citas`;
CREATE TABLE `citas` (
  `idCita` int(11) NOT NULL,
  `cliente` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `reforma` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`idCita`, `cliente`, `fecha`, `reforma`) VALUES
(1, 663, '22-05-22', 'alicatar el baño'),
(2, 776, '16-06-22', 'arreglar la fachada'),
(3, 119, '17-06-22', 'reformar cocina'),
(4, 883, '26-06-22', 'instalación de luz exterior');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`idCliente`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `peones`
  ADD PRIMARY KEY (`idPeon`),
  ADD KEY `FK_categorias` (`categoria`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`idCita`),
  ADD KEY `FK_clientes` (`cliente`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `peones`
--
ALTER TABLE `peones`
  ADD CONSTRAINT `FK_categorias` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`idCategoria`);
COMMIT;

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `FK_clientes` FOREIGN KEY (`cliente`) REFERENCES `clientes` (`idCliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
