<?php 
class Home extends Controladores{

	public function __construct(){
		 
		session_start();
		
		parent::__construct();
	}


	public function home(){	
				   		
		$this->vistas->getVistas($this,"index");
		
	}

	public function getNotas($cod_postulante){

		if($_POST){
			$cod_postulante = $_POST['cod_postulante'];

			if(is_numeric($cod_postulante)){
				$arrayData = $this->model->getNotas($cod_postulante);

				if(!$arrayData){
					$arrayRpta = array('estado' => false, 'msg' => 'El código ingresado no presenta ningún registro');
				}else{
					$arrayRpta = array('estado' => true, 'data' => $arrayData);
				}

			}else{
				$arrayRpta = array('estado' => false, 'msg' => 'El código de postulante solo puede ser numérico');				
			}
									
			echo json_encode($arrayRpta,JSON_UNESCAPED_UNICODE);
			
		}
		die();

	}

	
	


} 
 ?>