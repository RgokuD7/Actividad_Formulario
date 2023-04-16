var rut = document.getElementById("rut");
var nombre = document.getElementById("nombre");
var appaterno = document.getElementById("appaterno");
var apmaterno = document.getElementById("apmaterno");
var fecnac = document.getElementById("fecnac");
var edad = document.getElementById("edad");
var genero = document.getElementById("genero");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var prof = document.getElementById("prof");
var moti = document.getElementById("moti");
var rutError = document.getElementById("rutError");
var nombreError = document.getElementById("nombreError");
var appaternoError = document.getElementById("appaternoError");
var apmaternoError = document.getElementById("apmaternoError");
var fecnacError = document.getElementById("fecnacError");
var edadError = document.getElementById("edadError");
var generoError = document.getElementById("generoError");
var emailError = document.getElementById("emailError");
var telError = document.getElementById("telError");
var profError = document.getElementById("profError");
var motiError = document.getElementById("motiError");

rut.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (rut.value === null || rut.value === "") {
    rutError.innerHTML = "Ingresa tu RUT";
  } else if (rut.value.length < 9 || rut.value.length > 10) {
    rutError.innerHTML = "Ingresa un RUT válido <br>(Entre 9 y 10 caracteres)";
  }
});
nombre.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (nombre.value === null || nombre.value === "") {
    nombreError.innerHTML = "Ingresa tu Nombre";
  } else if (nombre.value.length < 3 || nombre.value.length > 20) {
    nombreError.innerHTML =
      "Nombre Inválido <br>(Entre 3 y 20 caracteres)";
  }
});
appaterno.addEventListener("blur", function (evt) {
  evt.preventDefault();
  appaterno.innerHTML = "Ingresa tu Apellido Paterno";
  if (appaterno.value === null || appaterno.value === "") {
    appaternoError.innerHTML = "Ingresa tu Apellido Paterno";
  } else if (appaterno.value.length < 3 || appaterno.value.length > 20) {
    appaternoError.innerHTML =
      "Apellido Paterno Inválido <br>(Entre 3 y 20 caracteres)";
  }
});
apmaterno.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (apmaterno.value === null || apmaterno.value === "") {
    apmaternoError.innerHTML = "Ingresa tu Apellido Materno";
  } else if (apmaterno.value.length < 3 || apmaterno.value.length > 20) {
    apmaternoError.innerHTML =
      "Apellido Materno Inválido <br>(Entre 3 y 20 caracteres)";
  }
});
fecnac.addEventListener("blur", function (evt) {
  evt.preventDefault();
  const edad = new Date(fecnac.value);
  console.log(edad.getFullYear());
  if (fecnac.value === null || fecnac.value === "") {
    fecnacError.innerHTML = "Ingresa tu Fecha de Nacimiento";
  } else if (apmaterno.value.length < 3 || apmaterno.value.length > 20) {
    fecnacError.innerHTML =
      "Apellido Materno Inválido <br>(Entre 3 y 20 caracteres)";
  }
});
var form = document.getElementById("formulario");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(rut.value.length);

  error.innerHTML = mensajesError.join("<br>");
  return false;
});
