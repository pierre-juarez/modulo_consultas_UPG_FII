<?php 
class Errors extends Controladores{

	public function __construct(){
		
		parent::__construct();

	}

	public function notFound(){


		$data['title'] = "404 | ".nombre_sistema();
		$this->vistas->getVistas($this,"error",$data);

	}
	

} //End class Home

	$notFound = new Errors();
	$notFound->notFound();
 ?>