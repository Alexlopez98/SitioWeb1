$("#registroForm").on("submit", function(e) {
  e.preventDefault();

  let password = $("#password").val();
  let confirmPassword = $("#confirmPassword").val();
  let fechaNacimiento = new Date($("#fechaNacimiento").val());
  let hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let mes = hoy.getMonth() - fechaNacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  // Contraseñas iguales
  if (password !== confirmPassword) {
    alert("X Las contraseñas no coinciden");
    return;
  }

  // Contraseña segura
  let regexPass = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
  if (!regexPass.test(password)) {
    alert("X La contraseña debe tener entre 6 y 18 caracteres, incluir al menos una mayúscula y un número.");
    return;
  }

  // Edad mínima
  if (edad < 13) {
    alert("x Debes tener al menos 13 años para registrarte.");
    return;
  }

  alert(" Registro exitoso");
  this.reset();
});
