document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const mensajeForm = document.getElementById("mensajeForm");

  const nombre = document.getElementById("nombre");
  const usuario = document.getElementById("usuario");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const fechaNacimiento = document.getElementById("fechaNacimiento");

  const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,18}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // --- Validadores ---
  function validarNombre() {
    nombre.classList.remove("is-valid", "is-invalid");
    if (nombre.value.trim() === "") nombre.classList.add("is-invalid");
    else nombre.classList.add("is-valid");
  }

  function validarUsuario() {
    usuario.classList.remove("is-valid", "is-invalid");
    if (usuario.value.trim().length < 3) usuario.classList.add("is-invalid");
    else usuario.classList.add("is-valid");
  }

  function validarEmail() {
    email.classList.remove("is-valid", "is-invalid");
    if (!emailRegex.test(email.value.trim())) email.classList.add("is-invalid");
    else email.classList.add("is-valid");
  }

  function validarPassword() {
    password.classList.remove("is-valid", "is-invalid");
    if (!passRegex.test(password.value)) password.classList.add("is-invalid");
    else password.classList.add("is-valid");
    validarConfirmacion(); // revalidar confirmación al cambiar la principal
  }

  function validarConfirmacion() {
    confirmPassword.classList.remove("is-valid", "is-invalid");
    if (confirmPassword.value === "" || confirmPassword.value !== password.value) {
      confirmPassword.classList.add("is-invalid");
    } else confirmPassword.classList.add("is-valid");
  }

  function validarFecha() {
    fechaNacimiento.classList.remove("is-valid", "is-invalid");
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento.value);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
    if (isNaN(nacimiento.getTime()) || edad < 13) fechaNacimiento.classList.add("is-invalid");
    else fechaNacimiento.classList.add("is-valid");
  }

  // --- Eventos en vivo ---
  nombre.addEventListener("input", validarNombre);
  usuario.addEventListener("input", validarUsuario);
  email.addEventListener("input", validarEmail);
  password.addEventListener("input", validarPassword);
  confirmPassword.addEventListener("input", validarConfirmacion);
  fechaNacimiento.addEventListener("change", validarFecha);

  // --- Submit ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // forzar validación de todo al enviar
    validarNombre();
    validarUsuario();
    validarEmail();
    validarPassword();
    validarConfirmacion();
    validarFecha();

    const invalido = form.querySelector(".is-invalid");
    if (!invalido) {
      mensajeForm.className = "alert alert-success";
      mensajeForm.textContent = "✅ Registro exitoso.";
      mensajeForm.classList.remove("d-none");

      setTimeout(() => {
        form.reset();
        form.querySelectorAll(".is-valid").forEach(el => el.classList.remove("is-valid"));
      }, 1500);
    } else {
      mensajeForm.className = "alert alert-danger";
      mensajeForm.textContent = "❌ Corrige los errores antes de enviar.";
      mensajeForm.classList.remove("d-none");
    }
  });
});
