
class Cliente{
    constructor(nombre, fechaNacimiento, sexo) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.sexo = sexo;
        this.id = this.crearIDaleatorio();
    }
    verDatos(){
        return `id: ${this.id} 
        Nombre: ${this.nombre}
        Fecha de Nacimiento: ${this.fechaNacimiento.toLocaleDateString()}
        Sexo: ${this.sexo}
        Edad: ${this.calcularEdad()}`;
    }

    crearIDaleatorio() {
        return Math.floor(Math.random() * 1000);
    }
    
    calcularEdad(){
        let hoy= new Date();
        let edad= hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        let m= hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())){
            edad--;
        }
        return `${edad} años`;
    }
}

let nombre = prompt ("Ingrese tu nombre")
let fechaIngresada = prompt ("Coloque su fecha de nacimiento")
let fechaNacimiento = new Date(fechaIngresada)
let sexo = prompt ("Indique su sexo")
console.log(fechaNacimiento);
const cliente1 = new Cliente("Mariela",fechaNacimiento,"femenino");
console.log(cliente1.verDatos());

 