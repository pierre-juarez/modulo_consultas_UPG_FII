<?php 
class Publico extends Controladores{

	public function __construct(){		 
		
		parent::__construct();
	}


	public function getInformacionSemestre(){

    $arrayData = $this->model->getInformacionSemestre();
    
		if(!$arrayData){
			$arrayRpta = array('estado' => false, 'msg' => 'No se pudo obtener alguna información.');
		}else{
			$arrayRpta = array('estado' => true, 'data' => $arrayData);
		}

		echo json_encode($arrayRpta,JSON_UNESCAPED_UNICODE);
			
		die();
		
	}


}

	
	



 ?>