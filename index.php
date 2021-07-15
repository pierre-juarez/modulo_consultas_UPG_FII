<?php
	
	require_once 'config/config.php';
	require_once "Helpers/Helpers.php";
      
	$url = !empty($_GET['ruta']) ? $_GET['ruta'] : "home/home";

	$arrayUrl = explode("/", $url);

	$controlador = $arrayUrl[0];
	$metodo 	   = $arrayUrl[0];
	$parametros  = "";

	
	if (!empty($arrayUrl[1])) {

		if ($arrayUrl[1] != "") {						
			$metodo = $arrayUrl[1];
		}
	}

	if (!empty($arrayUrl[2])) {

		if ($arrayUrl[2] != "") {
						
			for ($i=2; $i < count($arrayUrl) ; $i++) { 				
				$parametros .= $arrayUrl[$i].",";
			}

			$parametros = trim($parametros, ",");			

		}
	
	}

	require_once ("Librerias/Core/Autoload.php");

	require_once("Librerias/Core/Load.php");

	  
?>