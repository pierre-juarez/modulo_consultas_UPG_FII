function mostrarNota() {
  let cod_postulante = $("#txtCodigoPostulante").val();

  if (cod_postulante.length === 6 && cod_postulante !== "") {
    validaNota(cod_postulante);
  } else {
    mostrarAlerta(
      "El código de postulante debe tener 6 dígitos",
      "error",
      "Oh, cierto"
    );
    $("#divMuestraCard .cards-information").hide(500);
    $("#cardInformacion .card-notice").hide(500);
  }
}

function validaNota(cod_postulante) {
  $.ajax({
    url: base_url + "home/getNotas",
    type: "POST",
    data: { cod_postulante: cod_postulante },
    dataType: "JSON",
    success: function (rpta) {
      rpta.estado
        ? printCard(rpta.data)
        : mostrarAlerta(rpta.msg, "error", "Revisaré");
    },
  });
}

function printCard(data) {
  let card,
    temaColor,
    modalidad,
    formatoModalidad,
    cardInformacion,
    formatoInfo;

  const {
    admision_estado,
    admision_nota_maestria,
    admision_nota_maestria_escalada,
    admision_nombres,
    admision_ape_paterno,
    admision_ape_materno,
    admision_nota_conocimientos,
    admision_nota_conocimientos_escalada,
    admision_nota_conocimientos_final,
    admision_codigo_postulante,
    admision_orden_merito,
    maestria_nombre,
    admision_nota_curricular,
    admision_nota_entrevista,
    admision_resultado,
  } = data;

  temaColor = admision_estado === "INGRESÓ" ? "green" : "red";

  modalidad =
    admision_nota_maestria === "0" || admision_nota_maestria === null
      ? "Regular"
      : "Pre-Maestrìa";

  nombres_completos =
    `${admision_nombres} ${admision_ape_paterno} ${admision_ape_materno}`.toUpperCase();

  formatoModalidad = `<div class="items-center lg:flex">              
                            <div class="w-full flex justify-start sm:justify-center my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium text-xl">Modalidad: ${modalidad}</p>
                            </div>                                                  
                        </div>`;

  formatoInfo = `<div class="mx-3 my-1">
                        <span class="font-semibold text-blue-500 dark:text-blue-400">Información</span>                                
                        <p class="text-sm text-gray-600 dark:text-gray-200">
                            <span> ✓ Examen de aptitud máximo 50 puntos. </span><br>
                            <span id="spnOpcionalMaestria"> ✓ Para los postulantes que siguieron la pre maestría: la nota de su examen de aptitud es la nota de la pre-maestría en escala de 50. <br></span>
                            <span> ✓ Solo aquellos que obtengan 27.5 puntos o más en el examen de aptitud continúan con el resto de evaluaciones. </span><br>
                            <span> ✓ Evaluación curricular: máximo 30 puntos. </span><br>
                            <span> ✓ Entrevista máximo 20 puntos. </span><br>
                            <span>✓ El resultado final es la sumatoria de todas las evaluaciones rendidas.</span> <br> 
                            <span> ✓ Se ingresa por órden de mérito entre los que obtengan un puntaje total igual o mayor a 55 puntos. </span>
                        </p>                
                    </div>`;

  if (modalidad === "Regular") {
    formatoNota = ` <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud UPG: ${
                                  admision_nota_conocimientos === null
                                    ? "—"
                                    : admision_nota_conocimientos
                                }</p>
                            </div>
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud UPG - Escala 25: ${
                                  admision_nota_conocimientos_escalada === "0"
                                    ? "—"
                                    : admision_nota_conocimientos_escalada
                                }</p>
                            </div>
                        </div>`;
  } else {
    formatoNota = ` <div class="items-center lg:flex">              
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Pre-Maestría: ${
                                  admision_nota_maestria === null ||
                                  admision_nota_maestria === "0"
                                    ? "—"
                                    : admision_nota_maestria
                                }</p>
                            </div>            
                            <div class="w-full lg:w-1/2 my-1">
                                <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Pre-Maestría - Escala 50: ${
                                  admision_nota_maestria_escalada === "0"
                                    ? "—"
                                    : admision_nota_maestria_escalada
                                }</p>
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
                    <span class="text-md font-bold text-gray-600 dark:text-gray-400">COD: ${admision_codigo_postulante}</span>            
                    <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform border border-${temaColor}-800 text-${temaColor}-800 rounded cursor-pointer my-2 sm:mt-0">ORDEN DE MÉRITO: N°${admision_orden_merito}</a>
                </div>
               
                <div class="mt-2">  

                    <div class="grid justify-center sm:justify-start">
                        <p  class="text-2xl font-bold text-gray-700 dark:text-white dark:hover:text-gray-200">${nombres_completos}</p>
                        <p class="mb-4 text-gray-700 font-bold">${maestria_nombre}</p>
                    </div>                  

                  ${formatoModalidad}
                                           
                </div>           

                <hr class="my-2 border-${temaColor}-800 dark:border-gray-800">

                <div class="mt-2">            
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Eval. de Aptitud: ${
                              admision_nota_conocimientos_final === null
                                ? "0"
                                : admision_nota_conocimientos_final
                            }</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Evaluación de CV: ${
                              admision_nota_curricular === null
                                ? "0"
                                : admision_nota_curricular
                            }</p>
                        </div>            
                    </div>
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-medium">Entrevista Personal: ${
                              admision_nota_entrevista === null
                                ? "0"
                                : admision_nota_entrevista
                            }</p>
                        </div>
                        <div class="w-full lg:w-1/2 my-1">
                            <p class="mt-2 text-gray-600 dark:text-gray-300 font-bold uppercase">RESULTADO FINAL: ${
                              admision_resultado === null
                                ? "0"
                                : admision_resultado
                            }</p>
                        </div>
                    </div>            
                </div>

                <div class="items-center lg:flex">
                    <div class="w-full my-2 flex justify-center mt-8 mb-4">
                        <p class="px-3 py-1 text-lg font-bold text-gray-100 transition-colors duration-200 transform bg-${temaColor}-800 rounded">ESTATUS <span class="hidden sm:inline">DEL POSTULANTE</span> : ${admision_estado} <span class="hidden sm:inline">AL PROGRAMA</span></p>
                    </div>
                </div>
                
            </div>`;

  $("#cardInformacion").html(cardInformacion);
  $("#divMuestraCard").html(card);
  $("#cardInformacion .card-notice").show(500);
  $("#divMuestraCard .cards-information").show(500);
  $("#txtCodigoPostulante").val("");

  sleep(0.3, () => {
    modalidad === "Regular"
      ? $("#spnOpcionalMaestria").css("display", "none")
      : $("#spnOpcionalMaestria").css("display", "block");
  });
}
