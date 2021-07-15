<?php
class Opers extends Conexion{

    private $cnx;
    private $query;
    private $values;

    function __construct(){
    
    $this->cnx = new Conexion();
    $this->cnx = $this->cnx->conectar();
    
    }
    
    //Insertar un registro
    public function insertar($query, $values){
    
       $this->query = $query;
       $this->values = $values;
       
       
       $insert = $this->cnx->prepare($this->query);
       $result = $insert->execute($this->values);


       if($result){
       
           $return = true;
       
       }else{
       
           $return = false;
       
       }

       return $return;
       
    }
   
   //Selecciona/Busca un único registro
    public function selectOne($query){
    
       $this->query = $query;
       
       
       $select = $this->cnx->prepare($this->query);
       $select->execute();
       $result = $select->fetch(PDO::FETCH_ASSOC);
       return $result;
       
    }
    
    //Busca/Selecciona todos los registros
    public function selectAll($query){
    
        $this->query = $query;
        
        $select = $this->cnx->prepare($this->query);
        $select->execute();
        $result = $select->fetchAll(PDO::FETCH_ASSOC);
        return $result;
        
    }
    
    //Actualiza un registro
    public function actualizar($query,$values){
         
        $this->query  = $query;
        $this->values = $values;
        
        $update = $this->cnx->prepare($this->query);
        $result = $update->execute($this->values);
        return $result;
        
    }
    
    //Eliminar un usuario
    public function eliminar($query,$values){
     
        $this->query = $query;
        $this->values = $values;
        
        $delete = $this->cnx->prepare($this->query);
        $result = $delete->execute($this->values);
        return $result;
     
    }
   
}//End class Opers
?>