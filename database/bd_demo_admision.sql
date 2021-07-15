-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-07-2021 a las 01:00:05
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_demo_admision`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_admision`
--

DROP TABLE IF EXISTS `tb_admision`;
CREATE TABLE `tb_admision` (
  `admision_codigo` int(11) NOT NULL,
  `admision_maestria_codigo` int(11) NOT NULL,
  `admision_semestre_codigo` int(11) NOT NULL,
  `admision_codigo_postulante` int(11) NOT NULL,
  `admision_ape_paterno` varchar(100) NOT NULL,
  `admision_ape_materno` varchar(100) NOT NULL,
  `admision_nombres` varchar(100) NOT NULL,
  `admision_orden_merito` int(11) NOT NULL,
  `admision_nota_aptitud` varchar(10) DEFAULT NULL,
  `admision_nota_aptitud_escalada` float DEFAULT NULL,
  `admision_nota_maestria` float DEFAULT NULL,
  `admision_nota_maestria_escalada` float DEFAULT NULL,
  `admision_nota_conocimientos` float DEFAULT NULL,
  `admision_nota_conocimientos_escalada` float DEFAULT NULL,
  `admision_nota_conocimientos_final` float DEFAULT NULL,
  `admision_nota_curricular` float DEFAULT NULL,
  `admision_nota_entrevista` float DEFAULT NULL,
  `admision_resultado` float DEFAULT NULL,
  `admision_estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tb_admision`
--

INSERT INTO `tb_admision` (`admision_codigo`, `admision_maestria_codigo`, `admision_semestre_codigo`, `admision_codigo_postulante`, `admision_ape_paterno`, `admision_ape_materno`, `admision_nombres`, `admision_orden_merito`, `admision_nota_aptitud`, `admision_nota_aptitud_escalada`, `admision_nota_maestria`, `admision_nota_maestria_escalada`, `admision_nota_conocimientos`, `admision_nota_conocimientos_escalada`, `admision_nota_conocimientos_final`, `admision_nota_curricular`, `admision_nota_entrevista`, `admision_resultado`, `admision_estado`) VALUES
(1, 1, 1, 12345, 'Juarez', 'Urpeque', 'Pierre', 1, '40.4', 20.1, NULL, 0, 40, 30, 14, 14, 18, 20, 'INGRESÓ'),
(2, 4, 1, 54321, 'Juarez', 'Urpeque', 'Jean', 999, '10', 0, 20, 10, NULL, 0, 13, 14, 13, 12, 'NO INGRESÓ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_maestria`
--

DROP TABLE IF EXISTS `tb_maestria`;
CREATE TABLE `tb_maestria` (
  `maestria_codigo` int(11) NOT NULL,
  `maestria_nombre` varchar(200) NOT NULL,
  `maestria_siglas` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tb_maestria`
--

INSERT INTO `tb_maestria` (`maestria_codigo`, `maestria_nombre`, `maestria_siglas`) VALUES
(1, 'Maestría en Ingeniería Industrial', 'MII'),
(2, 'Maestría en Dirección de Empresas Industriales y de Servicios', 'MDEIS'),
(3, 'Maestría en Gestión de Operaciones y Servicios Logísticos', 'MGOSL'),
(4, 'Maestría Profesional en Prevención de Riesgos Laborales y Ambientales', 'MPRLA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_semestre`
--

DROP TABLE IF EXISTS `tb_semestre`;
CREATE TABLE `tb_semestre` (
  `semestre_codigo` int(11) NOT NULL,
  `semestre_nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tb_semestre`
--

INSERT INTO `tb_semestre` (`semestre_codigo`, `semestre_nombre`) VALUES
(1, '2021-I');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tb_admision`
--
ALTER TABLE `tb_admision`
  ADD PRIMARY KEY (`admision_codigo`),
  ADD KEY `admision_semestre_codigo` (`admision_semestre_codigo`),
  ADD KEY `admision_maestria_codigo` (`admision_maestria_codigo`);

--
-- Indices de la tabla `tb_maestria`
--
ALTER TABLE `tb_maestria`
  ADD PRIMARY KEY (`maestria_codigo`);

--
-- Indices de la tabla `tb_semestre`
--
ALTER TABLE `tb_semestre`
  ADD PRIMARY KEY (`semestre_codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tb_admision`
--
ALTER TABLE `tb_admision`
  MODIFY `admision_codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tb_admision`
--
ALTER TABLE `tb_admision`
  ADD CONSTRAINT `tb_admision_ibfk_1` FOREIGN KEY (`admision_semestre_codigo`) REFERENCES `tb_semestre` (`semestre_codigo`),
  ADD CONSTRAINT `tb_admision_ibfk_2` FOREIGN KEY (`admision_maestria_codigo`) REFERENCES `tb_maestria` (`maestria_codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
