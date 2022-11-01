/*defino objetos*/

class Usuario{
    constructor (User, Nombre, Apellido, Email, Contrasena){
        this.User = User;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.Contrasena = Contrasena;
    }
}
//puedo crear un array que guarde estos nuevos usuarios?
let Usuarios = [];

Usuarios[0] = new Usuario("matrix", "matias", "hendrix", "p@gmail.com", "1234");
Usuarios[1] = new Usuario("neo", "anderson", "hendrix", "f@gmail.com", "123");
