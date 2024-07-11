
document.getElementById("app").addEventListener("hide.bs.collapse", function () {
  document.getElementById("acceder").textContent = "Acceder"
}
);

document.getElementById("app").addEventListener("show.bs.collapse", function () {
  document.getElementById("acceder").textContent = "Ocultar"
}
);

document.getElementById("filtro").addEventListener("change", function () {
  let color_elegido = document.querySelector("#app option:checked").value;
  let vuelos = document.querySelectorAll("#contenido .card");

  vuelos.forEach(card => {
    card.classList.add("oculto")
  })

  if (color_elegido == "todas") {
    vuelos.forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "rosa") {
    document.querySelectorAll("#contenido .rosa").forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "celeste") {
    document.querySelectorAll("#contenido .celeste").forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "verde") {
    document.querySelectorAll("#contenido .verde").forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "naranja") {
    document.querySelectorAll("#contenido .naranja").forEach(card => {
      card.classList.remove("oculto");
    });
  }

});

document.getElementById("filtro").addEventListener("change", function () {
  let color_elegido = document.querySelector("#app option:checked").value;
  let vuelos = document.querySelectorAll("#contenido2 .card");

  vuelos.forEach(card => {
    card.classList.add("oculto")
  })

  if (color_elegido == "todas") {
    vuelos.forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "rosa") {
    document.querySelectorAll("#contenido2 .rosa").forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "celeste") {
    document.querySelectorAll("#contenido2 .celeste").forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "verde") {
    document.querySelectorAll("#contenido2 .verde").forEach(card => {
      card.classList.remove("oculto");
    });
  } else if (color_elegido == "naranja") {
    document.querySelectorAll("#contenido2 .naranja").forEach(card => {
      card.classList.remove("oculto");
    });
  }

});

document.querySelector("#ingresar form").addEventListener("submit", function (e) {
  e.preventDefault();

  let destino_ingresado = destino.value;
  let numero_ingresado = numeroVuelo.value;
  let ida_ingresada = fechaIda.value;
  let vuelta_ingresada = fechaVuelta.value;
  let color_ingresado = document.querySelector("#colores option:checked").value;

  const nuevo_div = document.createElement("div");
  nuevo_div.classList.add("card", "m-2", "text-start", "d-inline-block", color_ingresado);

  nuevo_div.innerHTML = `<div class="card-header text-end">
                        <img src="imgs/tacho.svg" alt="eliminar" data-accion="eliminar"></div>
                        <div class="card-body">
                        <h3 class="card-title">Vuelos</h3>
                        <p class="card-text"><strong>Destino:</strong> <span>${destino_ingresado}</span></p>
                        <p class="card-text"><strong>N° de vuelo:</strong> <span>${numero_ingresado}</span></p>
                        <p class="card-text"><strong>Ida</strong> <span>${ida_ingresada}</span></p>
                        <p class="card-text"><strong>vuelta</strong> <span>${vuelta_ingresada}</span></p>
                        
                        </div>`;

  document.getElementById("contenido").prepend(nuevo_div);
  document.querySelector("#ingresar form").reset();

  let cards_actuales = document.getElementById('contenido').innerHTML;
  localStorage.setItem("destinos", cards_actuales);

})

document.querySelector("#ingresarHospedaje form").addEventListener("submit", function (e) {
  e.preventDefault();

  let nombre_hospedaje = nombreHospedaje.value;
  let direccion_hospedaje = direccionHospedaje.value;
  let fecha_entrada = fechaEntrada.value;
  let fecha_salida = fechaSalida.value;
  let color_hospedaje = document.querySelector("#colores_hospedaje option:checked").value;

  const nuevo_div = document.createElement("div");
  nuevo_div.classList.add("card", "m-2", "text-start", "d-inline-block", color_hospedaje);

  nuevo_div.innerHTML = `<div class="card-header text-end">
                    <img src="imgs/tacho.svg" alt="eliminar" data-accion="eliminar"></div>
                    <div class="card-body">
                    <h3 class="card-title">Hospedaje</h3>
                    <p class="card-text"><strong>Nombre:</strong> <span>${nombre_hospedaje}</span></p>
                    <p class="card-text"><strong>Dirección:</strong> <span>${direccion_hospedaje}</span></p>
                    <p class="card-text"><strong>Entrada:</strong> <span>${fecha_entrada}</span></p>
                    <p class="card-text"><strong>Salida:</strong> <span>${fecha_salida}</span></p>
                    </div>`;

  document.getElementById("contenido2").prepend(nuevo_div);
  document.querySelector("#ingresarHospedaje form").reset();

  let cards_actuales = document.getElementById('contenido2').innerHTML;
  localStorage.setItem("hoteles", cards_actuales);
});

document.getElementById("contenido").addEventListener("click", function (e) {
  if (e.target.dataset.accion == "eliminar") {
    let rta = confirm("¿Estás seguro que querés eliminar este vuelo?");

    if (rta) {
      e.target.parentElement.parentElement.remove();

      let cards_actuales = document.getElementById('contenido').innerHTML;
      localStorage.setItem("destinos", cards_actuales);

    }
  }
});

document.getElementById("contenido2").addEventListener("click", function (e) {
  if (e.target.dataset.accion == "eliminar") {
    let rta = confirm("¿Estás seguro que querés eliminar este hotel?");

    if (rta) {
      e.target.parentElement.parentElement.remove();

      let cards_actuales = document.getElementById('contenido2').innerHTML;
      localStorage.setItem("hoteles", cards_actuales);

    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let guardados = localStorage.getItem("destinos");

  if (guardados != null) {
    document.getElementById('contenido').innerHTML = guardados;
  }
})

document.addEventListener("DOMContentLoaded", function () {
  let guardados = localStorage.getItem("hoteles");

  if (guardados != null) {
    document.getElementById('contenido2').innerHTML = guardados;
  }
})
