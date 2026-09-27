
// modal
function crearModal(titulo, mensaje, textoBotonConfirmar, funcionAlConfirmar) {

  var fondoOscuro = document.createElement("div");
  fondoOscuro.setAttribute("id", "modalGenerado");
  fondoOscuro.setAttribute("class", "fondo-modal");
 
  var cajaModal = document.createElement("div");
  cajaModal.setAttribute("class", "caja-modal");
  
  var elementoTitulo = document.createElement("h2");
  elementoTitulo.textContent = titulo;
 
  var elementoMensaje = document.createElement("p");
  elementoMensaje.textContent = mensaje;
  
  var contenedorBotones = document.createElement("div");
  contenedorBotones.setAttribute("class", "botones-modal");
  
  var botonCancelar = document.createElement("button");
  botonCancelar.textContent = "Cancelar";
  botonCancelar.setAttribute("class", "boton-cancelar");

  botonCancelar.addEventListener("click", function () {
    fondoOscuro.remove();
  });
  
  var botonConfirmar = document.createElement("button");
  botonConfirmar.textContent = textoBotonConfirmar;
  botonConfirmar.setAttribute("class", "boton-confirmar");

  botonConfirmar.addEventListener("click", function () {
    fondoOscuro.remove();
    funcionAlConfirmar();
  });
  contenedorBotones.appendChild(botonCancelar);
  contenedorBotones.appendChild(botonConfirmar);

  cajaModal.appendChild(elementoTitulo);
  cajaModal.appendChild(elementoMensaje);
  cajaModal.appendChild(contenedorBotones);

  fondoOscuro.appendChild(cajaModal);
  document.body.appendChild(fondoOscuro);
}


// toast

function mostrarToast(mensaje, tipo, duracionEnMilisegundos) {

  var contenedorToasts = document.getElementById("contenedorToasts");

  if (contenedorToasts === null) {
    contenedorToasts = document.createElement("div");
    contenedorToasts.setAttribute("id", "contenedorToasts");
    document.body.appendChild(contenedorToasts);
  }

  var claseDeColor = "";
  var rutaIcono = "";

  if (tipo === "exito") {
    claseDeColor = "toast-exito";
    rutaIcono = "img/icono-exito.png";
  } else {
    if (tipo === "error") {
      claseDeColor = "toast-error";
      rutaIcono = "img/icono-error.png";
    } else {
     
      claseDeColor = "toast-advertencia";
      rutaIcono = "img/icono-advertencia.png";
    }
  }

  var toast = document.createElement("div");
  toast.setAttribute("class", "toast " + claseDeColor);

 
  var iconoToast = document.createElement("img");
  iconoToast.setAttribute("src", rutaIcono);
  iconoToast.setAttribute("class", "icono-toast");
  iconoToast.setAttribute("alt", tipo);


  var textoToast = document.createElement("span");
  textoToast.textContent = mensaje;
  toast.appendChild(iconoToast);
  toast.appendChild(textoToast);
  contenedorToasts.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, duracionEnMilisegundos);
}