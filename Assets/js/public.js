getInformacionSemestre();

function getInformacionSemestre() {
  $.ajax({
    type: "POST",
    url: base_url + "publico/getInformacionSemestre",
    dataType: "JSON",
    success: function (rpta) {
      if (!rpta.estado) {
        console.log(rpta.msg);
      }
      printInformacionSemestre(rpta?.data?.semestre_nombre);
    },
  });
}

function printInformacionSemestre(semestre) {
  if (typeof semestre === "undefined") {
    semestre = new Date().getFullYear();
  }
  $("#spnInformacionSemestre").text(semestre);
}
