/*class Cliente {
    constructor(nombre, fechaNacimiento, sexo) {
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.sexo = sexo;
      this.id = this.crearIDaleatorio();
    }
  
    verDatos() {
      return `ID: ${this.id}
      Nombre: ${this.nombre}
      Fecha de Nacimiento: ${this.fechaNacimiento.toLocaleDateString()}
      Sexo: ${this.sexo}
      Edad: ${this.calcularEdad()}`;
    }
  
    crearIDaleatorio() {
      return Math.floor(Math.random() * 1000);
    }
  
    calcularEdad() {
      let hoy = new Date();
      let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
      let m = hoy.getMonth() - this.fechaNacimiento.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
        edad--;
      }
      return `${edad} años`;
    }
  }
  
  class Usuario {
    constructor(nombre) {
      this.nombre = nombre;
      this.usuarios = [];
    }
  
    agregarClientes(usuario) {
      this.usuarios.push(usuario);
    }
  
    verDatos() {
      return `Usuarios: ${this.nombre}
      Cantidad de usuarios: ${this.usuarios.length}`;
    }
  
    verUsuarios() {
      let datosUsuarios = "";
      this.usuarios.forEach(usuario => {
        datosUsuarios += `${usuario.verDatos()}\n`;
      });
      return datosUsuarios;
    }

    verUsuario(id) {
        let usuario = this.usuarios.find(usuario => usuario.id === id);
        if (usuario) {
          return usuario.verDatos();
        } else {
          return `No existe el usuario buscado`;
        }
      }
    }

    function administrarClientes() {
        let usuario = new Usuario("Mejores clientes");
        let opcion = "";
        let cliente = null;
      
        do {
          opcion = prompt(`Seleccione una opción:
              1. Agregar cliente
              2. Ver datos del cliente
              3. Listar todos los clientes
              4. Filtrar por nombre de cliente
              5. Ver datos de un usuario
              99. Salir`);
      
          switch (opcion) {
            case "1":
              let nombre = prompt("Ingrese tu nombre");
              let fechaIngresada = prompt("Coloque su fecha de nacimiento (YYYY-MM-DD)");
              let fechaNacimiento = new Date(fechaIngresada);
              let sexo = prompt("Indique su sexo");
              cliente = new Cliente(nombre, fechaNacimiento, sexo);
              usuario.agregarClientes(cliente);
              break;
      
            case "2":
              if (cliente) {
                alert(cliente.verDatos());
              } else {
                alert("No se ha agregado ningún cliente aún.");
              }
              break;
      
            case "3":
              alert(usuario.verUsuarios());
              break;
      
            case "4":
              let filtroNombre = prompt("Ingrese el nombre del cliente a filtrar:");
              alert(usuario.verUsuarios().filter(usuario => usuario.nombre === filtroNombre));
              break;
      
            case "5":
              let id = parseInt(prompt("Ingrese el ID del usuario a buscar:"));
              alert(usuario.verUsuario(id));
              break;
      
            case "99":
              alert("Saliendo del programa.");
              break;
      
            default:
              alert("Opción inválida. Por favor, seleccione una opción válida.");
              break;
          }
        } while (opcion !== "99");
      }
      
      administrarClientes();*/

let titulo = document.getElementsByTagName("h1")[0];
titulo.innerText = "Clientes"

let listado = prompt("Ingrese su nombre");
let contenido = document.getElementById("contenido");
contenido.className="contenido";

if (listado != "" && listado != null){
  let clientes = listado.split(",");
  let ul = document.createElement("ul");
  let clientesImportantes = [];
  let clientesNormales = [];
  clientes.forEach(cliente => {
    let importante = cliente.includes("!");
    if (importante) {
      cliente = cliente.replace("!", "")
      clientesImportantes.push(cliente);
    } else {
      clientesNormales.push(cliente);
    }
  });

  if (clientesImportantes.length > 0) {
    let ulImportantes = document.createElement("ul");
    clientesImportantes.forEach(cliente => {
      let li = document.createElement("li");
      li.className = "importante"
      li.textContent = cliente.trim();
      ulImportantes.appendChild(li);
    });
    contenido.appendChild(ulImportantes);
  }

  if (clientesNormales.length > 0) {
    let ulNormales = document.createElement("ul");
    clientesNormales.forEach(cliente => {
      let li = document.createElement("li");
      li.textContent = cliente.trim();
      ulNormales.appendChild(li);
    });
    contenido.appendChild(ulNormales);
    let data = {
      clientes: clientes,
      clientesImportantes: clientesImportantes,
      clientesNormales: clientesNormales
    };
    sessionStorage.setItem("clientesData", JSON.stringify(data));
  } else {
    contenido.innerHTML = "No hay clientes registrados";
  }
} else {
  contenido.innerHTML = "No hay clientes registrados";
}
let resumen = document.getElementsByClassName("resumen");

if (clientes.length > 0) {
  resumen[0].innerHTML = `Tiene ${clientes.length} clientes, ${clientesImportantes.length} importantes y ${clientesNormales.length} normales`;
} else {
  contenido.innerHTML = "No hay clientes registrados";
}

window.addEventListener("DOMContentLoaded", () => {
let data = sessionStorage.getItem("clientesData");
if (data) {
  data = JSON.parse(data);
  let { clientes, clientesImportantes, clientesNormales } = data;

  if (clientesImportantes.length > 0) {
    let ulImportantes = document.createElement("ul");
    clientesImportantes.forEach(cliente => {
      let li = document.createElement("li");
      li.className = "importante";
      li.textContent = cliente.trim();
      ulImportantes.appendChild(li);
    });
    contenido.appendChild(ulImportantes);
  }

  if (clientesNormales.length > 0) {
    let ulNormales = document.createElement("ul");
    clientesNormales.forEach(cliente => {
      let li = document.createElement("li");
      li.textContent = cliente.trim();
      ulNormales.appendChild(li);
    });
    contenido.appendChild(ulNormales);
  }
  let resumen = document.getElementsByClassName("resumen");
  resumen[0].innerHTML = `Tiene ${clientes.length} clientes, ${clientesImportantes.length} importantes y ${clientesNormales.length} normales`;
}
});