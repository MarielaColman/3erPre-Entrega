class Cliente {
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
      
      administrarClientes();

    