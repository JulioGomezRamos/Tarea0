function mostrarDatos() {
    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var mensaje = document.getElementById('mensaje').value;

    alert("Nombres: " + nombres + "\n" +
          "Apellidos: " + apellidos + "\n" +
          "Número Telefónico: " + telefono + "\n" +
          "Correo Electrónico: " + email + "\n" +
          "Fecha de Nacimiento: " + fechaNacimiento + "\n" +
          "Mensaje: " + mensaje);
}
