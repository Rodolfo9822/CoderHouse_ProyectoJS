/* ======================================== Clases ========================================*/

class Persona {
    constructor(nombre, apellidos, edad, direccion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.id = "";
    }

    verPersona() {
        console.log(`ID:${this.id}\nNombre: ${this.nombre} ${this.apellidos}\ndireccion: ${this.puesto}\nEdad: ${this.edad}`);
    }

    creacionId() {
        const number = Math.floor(Math.random() * 100);
        this.id = number + this.nombre.slice(0, 2) + this.apellidos.slice(0, 2);
    }
}

class Producto {
    constructor(producto, precio, disponible) {
        this.producto = producto;
        this.precio = precio;
        this.disponible = disponible;
    }

    verProducto() {
        console.log(`Producto:${this.producto}\nPrecio: ${this.precio}\nDisponible: ${this.disponible}`);
    }
}

/* ======================================== Funciones ========================================*/

const datos = () => {
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese sus apellidos");
    const edad = parseInt(prompt("Ingrese su edad"));
    const direccion = prompt("Ingrese su direccion");
    return [nombre, apellido, edad, direccion];
}

const usuario = () => { const dato = datos(); return new Persona(dato[0], dato[1], dato[2], dato[3]); };

const crearUsuario = () => { const persona = usuario(); persona.creacionId(); return persona }

const verUsuario = (customer) => customer.verPersona();

const nuevosProductos = [];

const datosProducto = () => {
    const producto = prompt("Ingrese su producto");
    const precio = parseInt(prompt("Ingrese sus precio "));
    const disponible = prompt("Ingrese su disponible");
    return [producto, precio, disponible];
}

const anadirProducto = () => { let dato = datosProducto(); nuevosProductos.push(new Producto(dato[0], dato[1], dato[2], dato[3])); }

const verProductos = () => nuevosProductos.forEach(producto => producto.verProducto());

const menuInicio = () => parseInt(prompt("Bienvenido a Buy & Get Fashion\nPor favor escriba el número de una de las opciones del Menu\n1.-Crear Cuenta\n2.-Añadir Producto\n3.-Salir"));

let loop = true
while(loop){
    let opcion = menuInicio();

    if (opcion == 1) {
        const newUser = crearUsuario();
        verUsuario(newUser);
    }else if (opcion == 2) {
        anadirProducto();
        verProductos();
        console.log();
    }else if (opcion == 3) {
        loop = false;
        alert("Hasta luego");
    }
    else {
        console.error("Opción incorrecta");
    }
    

}








