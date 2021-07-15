<?php 
class Vistas{

	function getVistas($controlador,$vista,$data=""){

		$controlador = get_class($controlador);

		if ($controlador=="Home") {

			$vista = "Vistas/".$vista.".php";
			
		}else{
			$vista = "Vistas/".$controlador."/".$vista.".php";
		}

		require_once($vista);
	}
}

 ?>