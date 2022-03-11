<?php 

class PublicoModel extends Opers{

	public $cod_postulante; 
	

	function __construct(){		
                parent::__construct();
	}


	
	public function getInformacionSemestre(){
        
                $query = "SELECT `semestre_nombre` FROM `tb_semestre` WHERE `semestre_estado` = 1  ORDER BY `semestre_codigo` DESC LIMIT 1;";                
                $result = $this->selectOne($query);        
                return $result;

        }


}

?>