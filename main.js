document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío del formulario

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUsername = "usuario";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    window.location.href = "menu.html"; // Redirige al formulario
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
  }
});

function guardar() {
  const razonsocial = document.getElementById("razonsocial").value;
  let nit = document.getElementById("nit").value;
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let atlantico = document.getElementById("atlantico").value;
  let Barranquilla = document.getElementById("Barranquilla").value;

  alert(
    `Razon social: ${razonsocial}` +
      `\nNit : ${nit}` +
      `\nDireccion: ${direccion}` +
      `\nEmail: ${email}` +
      `\nTelefono: ${telefono}` +
      `\nDepartamento : ${atlantico}` +
      `\nMunicipio : ${Barranquilla}` +
      `\nDatos guardados con exito" ` +
      location.reload()
  );
}

function mclaro() {
  document.getElementById("form").style.backgroundColor = "rgb(225, 232, 238)";
  document.getElementById("form2").style.backgroundColor = "rgb(225, 232, 238)";
}

function moscuro() {
  document.getElementById("form").style.backgroundColor = "black";
  document.getElementById("form2").style.backgroundColor = "black";
}

function aleatorio() {
  document.getElementById("form").style.backgroundColor =
    generarColorAleatorio();
  document.getElementById("form2").style.backgroundColor =
    generarColorAleatorio();
  // document.querySelector("h1").innerText = document.body.style.backgroundColor;
}

function generarColorAleatorio() {
  let colorR = Math.random() * 255;
  let colorG = Math.random() * 255;
  let colorB = Math.random() * 255;
  return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function aleatorio() {
  let colorR = Math.random() * 255;
  let colorG = Math.random() * 255;
  let colorB = Math.random() * 255;
  return "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function registrar() {
  const razonsocial = document.getElementById("razonsocial").value;
  let nit = document.getElementById("nit").value;
  let direccion = document.getElementById("direccion").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let atlantico = document.getElementById("atlantico").value;
  let Barranquilla = document.getElementById("Barranquilla").value;
  document.getElementById("razonsocialt").textContent = razonsocial;
  document.getElementById("nitt").textContent = nit;
  document.getElementById("direcciont").textContent = direccion;
  document.getElementById("emailt").textContent = email;
  document.getElementById("telefonot").textContent = telefono;
  document.getElementById("atlanticot").textContent = atlantico;
  document.getElementById("Barranquillat").textContent = Barranquilla;
}

function limpiar() {
  location.reload();
}
