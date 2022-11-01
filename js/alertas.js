
function mostrar_notificacion (texto,duracion,posicion){


    // Mostramos un msg con el resultado de la operacion
    Toastify({
      text: texto,
      duration: duracion,
      gravity: posicion

  }).showToast();


};