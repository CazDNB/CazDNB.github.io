document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formBasico").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito tu nombre y apellido');
      return;
    }

    this.submit();
  }
  