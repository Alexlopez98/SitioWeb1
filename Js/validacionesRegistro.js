$(document).ready(function() {
  $("#registroForm").submit(function(e) {
    e.preventDefault();

    $("#errorMsg").addClass("d-none").text("");
    $("#successMsg").addClass("d-none").text("");

    let nombre = $("#nombre").val().trim();
    let usuario = $("#usuario").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();
    let fechaNacimiento = $("#fechaNacimiento").val();

    // Validaciones
    if (!nombre || !usuario || !email || !password || !confirmPassword || !fechaNacimiento) {
      $("#errorMsg").removeClass("d-none").text("Por favor, completa todos los campos obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      $("#errorMsg").removeClass("d-none").text("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      $("#errorMsg").removeClass("d-none").text("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

 
    $("#successMsg").removeClass("d-none").text("¡Registro enviado correctamente!");
    $(this)[0].reset();
  });
});
