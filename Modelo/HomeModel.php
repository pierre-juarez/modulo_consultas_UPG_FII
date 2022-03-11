<?php 

class HomeModel extends Opers{

	public $cod_postulante; 
	

	function __construct(){		
                parent::__construct();
	}

        public function getInformacionSemestre(){
        
                $query = "SELECT `semestre_nombre` FROM `tb_semestre` WHERE `semestre_estado` = 1  ORDER BY `semestre_codigo` DESC LIMIT 1;";                
                $result = $this->selectOne($query);        
                return $result;

        }


	
	public function getNotas($cod_postulante){
        
                $this->cod_postulante = $cod_postulante;   
                $semestre = $this->getInformacionSemestre();                                

                $query = "SELECT
                                tb_admision.*, 
                                tb_maestria.maestria_nombre                        
                        FROM
                                tb_admision
                        INNER JOIN
                                tb_maestria
                        ON 
                                tb_admision.admision_maestria_codigo = tb_maestria.maestria_codigo
                        INNER JOIN
                                tb_semestre
                        ON 
                                tb_admision.admision_semestre_codigo = tb_semestre.semestre_codigo
                        WHERE 
                                tb_admision.admision_codigo_postulante = {$this->cod_postulante}
                         AND
                             tb_semestre.semestre_nombre = '2021-I';";
                        //      tb_semestre.semestre_nombre = '{$semestre['semestre_nombre']}';";

                $result = $this->selectOne($query);        
                return $result;

        }


}

?>