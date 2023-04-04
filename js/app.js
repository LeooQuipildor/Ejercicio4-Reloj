function actualizarReloj() {
  let fechaActual = new Date();
  let formatoHora = fechaActual.getHours();
  let ampm;

  if (formatoHora > 12) {
    formatoHora = formatoHora - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  

  let pFecha = document.getElementById("actualizarFecha");
  pFecha.innerHTML = `${
    diasSemana[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    meses[fechaActual.getMonth()]
  } de ${fechaActual.getFullYear()}`;

  let pHora = document.getElementById("actualizarHora");
  pHora.innerHTML = `${formatoHora}: ${fechaActual.getMinutes()}`;

  let pAmPm = document.getElementById("ampm");
  pAmPm.innerHTML = `${ampm}`;

  let pSegundos = document.getElementById("actualizarSegundos");

  pSegundos.innerHTML = `${fechaActual.getSeconds() < 10 ? '0' : ''}${fechaActual.getSeconds()}`

}

setInterval(actualizarReloj, 100);

