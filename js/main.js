
/*
profe tuve muchas dificultades con javascript, no llegue en tiempo 
por eso tiene muy pocas funcionalidades la pagina
*/

let carrito = [];
//const DateTime = luxon.DateTime
//const key_actualizacion = "ultima_actualizacion";
//const key_carrito = "carrito";

let Buscar = document.getElementById("Buscador_Boton")
Buscar.onclick = ()=> { 
    let q = document.getElementById("Buscador").value; //en este caso capturo el vaor de un input, pero  podria  crearlo
    Busca_Productos(q);
};

let Abre = document.getElementById("AbreCarrito")
Abre.onclick = ()=> { 
    Muestra_Carrito(carrito);
};

let log = document.getElementById("acepta");
log.onclick = ()=>{
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    Valida_Usuario(usuario,contrasena);
};


/*
document.addEventListener('DOMContentLoaded', () => {

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    

    // Cargar el carrito con el localstorage, si no hay nada asignarle un array vacio
    carrito = JSON.parse( localStorage.getItem(key_carrito) ) || [];

    //let ingreso = localStorage.getItem(key_actualizacion);

    //ingreso ? console.log("Ultimo ingreso" + ingreso) : console.log("no esta registrado el ultimo ingreso");
    //carrito.iniciar();
})*/

//Swal.fire('Recuerde que ara navegar debe estar loggeado')



