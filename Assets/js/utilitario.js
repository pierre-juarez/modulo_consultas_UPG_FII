$("input.number").bind("keypress", function (event) {
  let regex = new RegExp("^[0-9]+$");
  let key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
});

function mostrarAlerta(mensaje, tipo, btn = "Ok") {
  Swal.fire({
    title: `${nombre_sistema}`,
    html: `<h2 class="text-xl font-normal">${mensaje}</h2>`,
    type: tipo,
    confirmButtonText: btn,
  });
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function sleep(seconds, funcionCallback) {
  setTimeout(funcionCallback, seconds * 1000);
}
