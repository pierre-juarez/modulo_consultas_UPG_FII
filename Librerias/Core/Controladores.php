<?php 
class Controladores{

	public function __construct(){

		$this->vistas = new Vistas();
		$this->cargaModelo();

	}

	public function cargaModelo(){

		//HomeModel
		$model = get_class($this)."Model";
		$routClass = "Modelo/".$model.".php";

		if (file_exists($routClass)) {
		 	
		 	require_once($routClass);
		 	$this->model = new $model();
		 } 
	}
}

 ?>