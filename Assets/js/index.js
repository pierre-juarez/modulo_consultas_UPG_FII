function mostrarNota(){

    let cod_postulante = $("#txtCodigoPostulante").val();
            
    if(cod_postulante.length === 5 && cod_postulante !== ""){       
        validaNota(cod_postulante);
    }else{     
        mostrarAlerta('El código de postulante debe tener 5 dígitos','error','Oh, cierto');        
        $("#divMuestraCard .cards-information").hide(500);
        $("#cardInformacion .card-notice").hide(500);
    }

}

function validaNota(cod_postulante){
    $.ajax({
        url   : base_url+"home/getNotas",
        type  : 'POST',
        data  : {cod_postulante:cod_postulante} ,
        dataType: "JSON",
        success: function(rpta){            
            (rpta.estado) ? printCard(rpta.data) : mostrarAlerta(rpta.msg,'error','Revisaré');
        }                                                    
    }); 
}

function printCard(data){

    let card, temaColor, modalidad, formatoModalidad, cardInformacion, formatoInfo;

    temaColor = data.admision_estado === "INGRESÓ" ? "green" : "red" ;

    modalidad = data.admision_nota_maestria === "0" ||data.admision_nota_maestria === null ? "Regular" : "Pre-Maestría";

    formatoModalidad = `<div class="items-center lg:flex">              
                            <div class="w-full flex justify-start sm:justify-center my-1">
                                <p class="mt-2 mb-3 text-gray-600 dark:text-gray-300 font-medium text-xl">Modalidad: ${modalidad}</p>
                            </div>                                                  
                        </div>`;

    if(modalidad === "Regular"){ 
        formatoInfo = `<div class="mx-3 my-1">
                            <span class="font-semibold text-blue-500 dark:text-blue-400">Información</span>
                            <p class="text-sm text-gray-600 dark:text-gray-200">Para el cálculo del RESULTADO FINAL se consideró lo siguiente: <br> 
                                <span> ✓ Eval. Aptitud en Escala 25 pts. (A)</span><br>
                                <span> ✓ Eval. Conocimientos UPG en Escala 25 pts. (C)  </span><br>
                                <span> ✓ Eval. Conocimientos (D) </span><br>
                                <span> ✓ Entrevista (E)</span><br>
                                <span> ✓ Evaluación de CV (F)</span> <br> <br>
                                <span> ✓ D = A+C</span><br>
                                <span> ✓ E = D en Escala de 20 pts.</span><br><br>
                                <span> ✓ RESULTADO FINAL = D + E + F </span>
                            </p>                                         
                        </div>`;

        formatoNota = ` <div class="items-center lg:flex">              
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud: ${data.admision_nota_aptitud}</p>
                            </div>            
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud - Escala 25(A): ${data.admision_nota_aptitud_escalada === null ? "—" : data.admision_nota_aptitud_escalada}</p>
                            </div>            
                        </div>
                     
                        <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Conocimientos UPG: ${data.admision_nota_conocimientos === null ? "—" : data.admision_nota_conocimientos}</p>
                            </div>
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Conocimientos UPG - Escala 25(C): ${data.admision_nota_conocimientos_escalada === "0" ? "—" : data.admision_nota_conocimientos_escalada}</p>
                            </div>
                        </div>`;
    }else{
        formatoInfo = `<div class="mx-3 my-1">
                            <span class="font-semibold text-blue-500 dark:text-blue-400">Información</span>                                
                            <p class="text-sm text-gray-600 dark:text-gray-200">Para el cálculo del RESULTADO FINAL se consideró lo siguiente: <br> 
                                <span> ✓ Eval. Pre-Maestría - Escala 50 (B)</span><br>
                                <span> ✓ Eval. Conocimientos (D) </span><br>
                                <span> ✓ Entrevista (E)</span><br>
                                <span> ✓ Evaluación de CV (F)</span> <br> <br>
                                <span> ✓ D = B</span><br>
                                <span> ✓ E = D en Escala de 20 pts.</span><br><br>
                                <span> ✓ RESULTADO FINAL = D + E + F </span>
                            </p>                
                        </div>`;

        formatoNota = ` <div class="items-center lg:flex">              
                            <div class="w-full flex justify-start sm:justify-center my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud: ${data.admision_nota_aptitud}</p>
                            </div>                                                  
                        </div>

                        <div class="items-center lg:flex">              
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Pre-Maestría: ${data.admision_nota_maestria === null || data.admision_nota_maestria === "0" ? "—" : data.admision_nota_maestria}</p>
                            </div>            
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Pre-Maestría - Escala 50(B): ${ data.admision_nota_maestria_escalada === "0" ? "—" : data.admision_nota_maestria_escalada}</p>
                            </div>            
                        </div>`;
    }
    
    cardInformacion = `<div class="card-notice mb-10 mt-5 flex w-11/12 max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 sm:w-full"  style="display: none;">
                        <div class="flex items-center justify-center w-12 bg-blue-500">
                            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"/>
                            </svg>
                        </div>
                        
                        <div class="px-4 py-2 -mx-3">
                            ${formatoInfo}
                        </div>
                    </div>`;

    card = `<div class="cards-information max-w-2xl px-8 py-4 my-4 mx-10 bg-${temaColor}-200 rounded-lg shadow-md dark:bg-gray-800 sm:mx-auto" style="display: none;">

                <div class="grid items-center justify-between sm:flex">
                    <span class="text-md font-bold text-gray-600 dark:text-gray-400">COD: ${data.admision_codigo_postulante}</span>            
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform border border-${temaColor}-800 text-${temaColor}-800 rounded cursor-pointer my-2 sm:mt-0">ORDEN DE MÉRITO: N°${data.admision_orden_merito}</a>
                </div>
               
                <div class="mt-2">  

                    <div class="grid justify-center sm:justify-start">
                        <p  class="text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200">${data.admision_nombres} ${data.admision_ape_paterno} ${data.admision_ape_materno}</p>
                        <p class="mb-4 text-gray-700 font-bold">${data.maestria_nombre}</p>
                    </div>

                  ${formatoModalidad}

                  ${formatoNota}
                         
                </div>           

                <hr class="my-2 border-${temaColor}-800 dark:border-gray-800">

                <div class="mt-2">            
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Conocimientos (D): ${data.admision_nota_conocimientos_final === null ? "0" : data.admision_nota_conocimientos_final}</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Evaluación de CV (F): ${data.admision_nota_curricular === null ? "0" : data.admision_nota_curricular}</p>
                        </div>            
                    </div>
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Entrevista Personal(E): ${data.admision_nota_entrevista === null ? "0" : data.admision_nota_entrevista}</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-bold uppercase">RESULTADO FINAL: ${data.admision_resultado === null ? "0" : data.admision_resultado}</p>
                        </div>
                    </div>            
                </div>

                <div class="items-center lg:flex">
                    <div class="w-full my-2 flex justify-center mt-8 mb-4">
                        <p class="px-3 py-1 text-lg font-bold text-gray-100 transition-colors duration-200 transform bg-${temaColor}-800 rounded">ESTATUS <span class="hidden sm:inline">DEL POSTULANTE</span> : ${data.admision_estado} <span class="hidden sm:inline">AL PROGRAMA</span></p>
                    </div>
                </div>
                
            </div>`;

    $("#cardInformacion").html(cardInformacion);
    $("#divMuestraCard").html(card);
    $("#cardInformacion .card-notice").show(500);
    $("#divMuestraCard .cards-information").show(500);
    $("#txtCodigoPostulante").val("");

}

