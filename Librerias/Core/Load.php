<?php 

  $controlador = ucwords($controlador);
  $controladorFile = "Controlador/".$controlador.".php";

	  if (file_exists($controladorFile)) {

	  	require_once($controladorFile);
	  	$controlador = new $controlador();

	  	if (method_exists($controlador, $metodo)) {
	  		
	  		$controlador->{$metodo}($parametros);
	  	}else{
	  		require_once("Controlador/Error.php");
	  	}
	  	
	  }else{
	  		require_once("Controlador/Error.php");
	  }


 ?>