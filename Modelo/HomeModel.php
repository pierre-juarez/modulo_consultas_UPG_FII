<?php 

class HomeModel extends Opers{

	public $cod_postulante; 
	

	function __construct(){		
                parent::__construct();
	}


	
	public function getNotas($cod_postulante){
        
                $this->cod_postulante = $cod_postulante;
                $query = "SELECT
                                tb_admision.*, 
                                tb_maestria.maestria_nombre
                        FROM
                                tb_admision
                        INNER JOIN
                                tb_maestria
                        ON 
                                tb_admision.admision_maestria_codigo = tb_maestria.maestria_codigo
                        WHERE 
                                tb_admision.admision_codigo_postulante = {$cod_postulante}";                
                $result = $this->selectOne($query);        
                return $result;

        }


}

?>