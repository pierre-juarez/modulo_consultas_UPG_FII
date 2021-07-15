<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> <?= nombre_sistema();  ?> </title>
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  <link rel="shortcut icon" href="<?= base_url(); ?>assets/img/logo-unmsm.png" type="image/x-icon">
  <link rel="stylesheet" href="<?= base_url(); ?>assets/css/style.css">
</head>
<body class="bg-gray-100 dark:bg-gray-800">


    <!------ ------- Hero ------- ------> 
    
    <header class="bg-gray-100 dark:bg-gray-800">
        <nav class="border-b-4 border-green-500">
            <div class="container flex items-center justify-between px-6 py-3 mx-auto">
                <div>
                    <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#"><?= nombre_sistema(); ?></a>
                </div>                                
            </div>
        </nav>

        <div class="container px-6 py-0 mx-auto">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg">
                        <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Resultados Posgrado <span class="text-green-500">Proceso de Admisión 2021-I</span></h1>

                        <p class="mt-4 text-gray-600 dark:text-gray-400">Digite su código de postulante<span class="font-medium text-green-500"> código de postulante</span> para mostrarle información</p>

                        <div class="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                            <input id="txtCodigoPostulante" name="txtCodigoPostulante" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring mr-2 number" placeholder="12345" maxlength="5">
                            
                            <button onclick="mostrarNota();" class="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
                              <svg class="w-5 h-5 mx-1" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clipboard" class="svg-inline--fa fa-clipboard fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"></path>
                              </svg>
                                <span class="mx-1">Visualizar <span class="lowercase">nota</span></span>
                            </button>
                            
                        </div>
                    </div>
                </div>
        
                <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <img class="w-full h-full max-w-md" src="<?= base_url();?>assets/img/notebook_animate.svg" alt="#">
                </div>
            </div>
        </div>
    </header>
    <!------ ------- Hero ------- ------> 
    
     <!------ ------- Aviso ------- ------>     
     
    <div class="card-notice mb-10 mt-5 flex w-11/12 max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 sm:w-full"  style="display: none;">
        <div class="flex items-center justify-center w-12 bg-blue-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
            </svg>
        </div>
        
        <div class="px-4 py-2 -mx-3">
            <div class="mx-3 my-1">
                <span class="font-semibold text-blue-500 dark:text-blue-400">Información</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">Para el cálculo del examen de conocimientos se consideró lo siguiente: <br> 
                  <span> ✓ Modalidad Pre-Maestría:  D = B </span><br>
                  <span> ✓ Modalidad Regular: D = A+C</span><br>
                  <span> ✓ Entrevista Personal:  E = D - Escala de 20 pts</span>
                </p>                
            </div>
        </div>
    </div>
     <!------ ------- Aviso ------- ------> 

    <!------ ------- Card Información ------- ------> 
    <div id="divMuestraCard"></div>

    <!------ ------- Card Información ------- ------> 


    <!------ ------- Footer ------- ------> 
    <footer class="bg-gray-100 dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
    
            <hr class="my-2 dark:border-gray-500">

            <div class="sm:flex sm:items-center sm:justify-between">
                <p class="text-sm text-gray-400">© Copyright 2021. Todos los derechos reservados a <a href="https://industrial.unmsm.edu.pe/" target="_blank" class="text-bold text-green-700 hover:text-green-800">UEI - FII</a> </p>

                <div class="flex mt-3 -mx-2 sm:mt-0">
                    <a href="https://www.facebook.com/Industrial.UNMSM.Oficial" target="_blank" class="mx-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                        aria-label="Facebook">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    <!------ ------- Footer ------- ------> 

    <script>
        const nombre_sistema = "<?= nombre_sistema(); ?>";           
        const base_url = "<?= base_url(); ?>";           
    </script>

<!-- JQuery -->
<script src="<?= base_url(); ?>assets/js/jquery/vendor.bundle.base.js"></script>
<!-- Sweet Alert -->
<script src="<?=base_url(); ?>assets/js/sweetalert2/sweetalert2.all.min.js"></script>
<script src="<?= base_url();?>assets/js/utilitario.js"></script>
<script src="<?= base_url();?>assets/js/index.js"></script>
</body>
</html>