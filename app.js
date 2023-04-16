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
var emailError = document.getElementById("emailError");
var telError = document.getElementById("telError");
var profError = document.getElementById("profError");
var motiError = document.getElementById("motiError");
var form = document.getElementById("formulario");
var carta = document.getElementById("carta");
var btn = document.getElementById("btn");
var cont = 0;
rut.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (rut.value === null || rut.value === "") {
    rutError.innerHTML = "Ingresa tu RUT";
  } else if (rut.value.length < 9 || rut.value.length > 10) {
    rutError.innerHTML = "Ingresa un RUT válido <br>(Entre 9 y 10 caracteres)";
  } else {
    rutError.innerHTML = "<br></br>";
    cont++;
  }
});
nombre.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (nombre.value === null || nombre.value === "") {
    nombreError.innerHTML = "Ingresa tu Nombre";
  } else if (nombre.value.length < 3 || nombre.value.length > 20) {
    nombreError.innerHTML = "Nombre Inválido <br>(Entre 3 y 20 caracteres)";
  } else {
    nombreError.innerHTML = "<br></br>";
    cont++;
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
  } else {
    appaternoError.innerHTML = "<br></br>";
    cont++;
  }
});
apmaterno.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (apmaterno.value === null || apmaterno.value === "") {
    apmaternoError.innerHTML = "Ingresa tu Apellido Materno";
  } else if (apmaterno.value.length < 3 || apmaterno.value.length > 20) {
    apmaternoError.innerHTML =
      "Apellido Materno Inválido <br>(Entre 3 y 20 caracteres)";
  } else {
    apmaternoError.innerHTML = "<br></br>";
    cont++;
  }
});
fecnac.addEventListener("blur", function (evt) {
  evt.preventDefault();
  const fechaNacimiento = new Date(fecnac.value);
  const fechaActual = new Date();
  const diferenciaTiempo = fechaActual.getTime() - fechaNacimiento.getTime();
  const ed = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365));

  if (fecnac.value === null || fecnac.value === "") {
    fecnacError.innerHTML = "Ingresa tu Fecha de Nacimiento";
  } else if (ed < 18 || ed > 35) {
    edadError.innerHTML = "Debes ser mayor a 18 años y<br> menor a 35 años";
  } else {
    fecnacError.innerHTML = "<br></br>";
    edadError.innerHTML = "<br></br>";
    cont++;
  }
  edad.value = ed;
});
email.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (email.value === null || email.value === "") {
    emailError.innerHTML = "Ingresa el Correo";
  } else {
    emailError.innerHTML = "<br></br>";
    cont++;
  }
});
tel.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (tel.value === null || tel.value === "") {
    telError.innerHTML = "Ingresa tu Telefono";
  } else if (tel.value.length < 9 || tel.value.length > 10) {
    telError.innerHTML = "Telefono Invalido <br>(Entre 9 y 10 números)";
  } else {
    telError.innerHTML = "<br></br>";
    cont++;
  }
});
prof.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (prof.value === null || prof.value === "") {
    profError.innerHTML = "Ingresa tu Profesión";
  } else {
    profError.innerHTML = "<br></br>";
    cont++;
  }
});
moti.addEventListener("blur", function (evt) {
  evt.preventDefault();
  if (moti.value === null || moti.value === "") {
    moti.innerHTML = "Ingresa que te motivó a postular al Trabajo";
  } else {
    cont++;
  }
});
btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  carta.innerHTML =
    "RUT: " + rut.value +
    "\nNombre: " + nombre.value +
    "\nApellido Paterno: " + appaterno.value +
    "\nApellido Materno: " + apmaterno.value +
    "\nFecha de Nacimiento: " + fecnac.value +
    "\nEdad: " + edad.value +
    "\nGenero: " + genero.value +
    "\nCorreo: " + email.value +
    "\nTeléfono: " + tel.value +
    "\nProfesión: " + prof.value +
    "\nMotivo: " + moti.value;
});
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (cont === 10) {
    form.submit();
  }
});
console.log(nombre.value);
