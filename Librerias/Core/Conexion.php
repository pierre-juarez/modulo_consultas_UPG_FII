<?php

class Conexion{

    private $conexion;
    
    public function __construct(){
  
        $utf8 = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'); 

       $cnxString = "mysql:hos=".HOST.";dbname=".DATABASE.";";
       
        try{
            
            $this->conexion = new PDO($cnxString,USER,PASSWORD,$utf8);                         
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);  
           
            //echo "Me conectaste bien! :v";           
        
        }catch(Exception $e){
            $this->conexion = "Error de Conexión";
            echo "ERROR: " . $e->getMessage();
        }
    
    }
    
    public function conectar(){
        return $this->conexion;
    }
}


?>