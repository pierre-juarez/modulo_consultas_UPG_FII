function mostrarNota(){
    $(".card-notice").hide(500);
    let cod_postulante = $("#txtCodigoPostulante").val();

        
    if(cod_postulante.length === 5 && cod_postulante !== ""){       
        validaNota(cod_postulante);
    }else{     
        mostrarAlerta('El código de postulante debe tener 5 dígitos','error','Oh, cierto');
        // $(".card-notice").hide(500);
        $("#divMuestraCard .cards-information").hide(500);
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

    let card, temaColor;

    temaColor = data.admision_estado === "INGRESÓ" ? "green" : "red" ;
    
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
        
                    
                    <div class="items-center lg:flex">              
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud: ${data.admision_nota_aptitud}</p>
                        </div>            
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud - Escala 25(A): ${data.admision_nota_aptitud_escalada === null ? "—" : data.admision_nota_aptitud_escalada}</p>
                        </div>            
                    </div>

                    <div class="items-center lg:flex">              
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Pre-Maestría: ${data.admision_nota_maestria === null || data.admision_nota_maestria === "0" ? "—" : data.admision_nota_maestria}</p>
                        </div>            
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Pre-Maestría - Escala 50(B): ${ data.admision_nota_maestria_escalada === "0" ? "—" : data.admision_nota_maestria_escalada}</p>
                        </div>            
                    </div>

                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Conocimientos: ${data.admision_nota_conocimientos === null ? "—" : data.admision_nota_conocimientos}</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Conocimientos - Escala 25(C): ${data.admision_nota_conocimientos_escalada === "0" ? "—" : data.admision_nota_conocimientos_escalada}</p>
                        </div>
                    </div>            
                </div>           

                <hr class="my-2 border-${temaColor}-800 dark:border-gray-800">

                <div class="mt-2">            
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Conocimientos Final (D): ${data.admision_nota_conocimientos_final === null ? "0" : data.admision_nota_conocimientos_final}</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Evaluación Curricular: ${data.admision_nota_curricular === null ? "0" : data.admision_nota_curricular}</p>
                        </div>            
                    </div>
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Entrevista Personal(E): ${data.admision_nota_entrevista === null ? "0" : data.admision_nota_entrevista}</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-bold uppercase">Promedio: ${data.admision_resultado === null ? "0" : data.admision_resultado}</p>
                        </div>
                    </div>            
                </div>

                <div class="items-center lg:flex">
                    <div class="w-full my-2 flex justify-center mt-8 mb-4">
                        <p class="px-3 py-1 text-lg font-bold text-gray-100 transition-colors duration-200 transform bg-${temaColor}-800 rounded cursor-pointer">ESTATUS <span class="hidden sm:inline">DEL POSTULANTE</span> : ${data.admision_estado} <span class="hidden sm:inline">AL PROGRAMA</span></p>
                    </div>
                </div>
                
            </div>`;

    $("#divMuestraCard").html(card);
    $("#txtCodigoPostulante").val("");
    $(".card-notice").show(500);
    $("#divMuestraCard .cards-information").show(500);

}

