<?php 

	  spl_autoload_register ( function($clase){

	  	if (file_exists("Librerias/Core/".$clase.".php")) {

	  		//Requiere: Librerias/Core/Home.php

	  		require_once ("Librerias/Core/".$clase.".php");
	  	
	  	}

	  });


 ?>