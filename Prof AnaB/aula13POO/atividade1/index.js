import Usuario from "./usuario.js";

const usuario1 = new Usuario("Mavi", 18, "olivr.mavis@gmail.com")
usuario1.setName("Mavis");
let nameUsuario = usuario1.getName();
console.log(nameUsuario);