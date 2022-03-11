<?php
//Retorna url del proyecto
function base_url(){
  return BASE_URL;
} 

function nombre_sistema(){
  return NOMBRE_SISTEMA;
}

function carpeta(){
  return CARPETA_ACTUAL;
}

function getFechaCopyright($year_creation){
  $year_current = date("Y");
  return ($year_creation === $year_current) ? $year_creation : $year_creation ."-".$year_current;
}

?>