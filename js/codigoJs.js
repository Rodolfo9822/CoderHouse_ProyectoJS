const suscripNombre = document.querySelector("#suscripNombre");
const suscripEmail = document.querySelector("#suscripEmail");

const vacio = (...args) => {
    let estado = false;
    args.forEach(campo => {
        if (campo === "") estado = true
    })
    return estado;
}

const emailTrue = (campo) => {
    const email = campo.value;
    return email.includes("@");
}

const limpiarCampos = (campos) => { campos.forEach(campo => campo.value = "") }

const enviarDatos = (...args) => {

    if (vacio(args[0].value, args[1].value) === false && emailTrue(args[1])) {

        alert("Los datos fueron enviados con exito");
        limpiarCampos(args);

    }

    else
        alert("Error, comprobar los datos");
}


/* Crear usuario predeterminado */
const ususario = document.querySelector("#ususario");
const password = document.querySelector("#password");

const validacionDatos = (user, pass) => {
    if (ususario.value === user && password.value === pass) {
        alert("Verificacion de datos exitoso");
        limpiarCampos([ususario, password]);
    }
    else
        alert("Error de Usuario o Contraseña");
}

const guardarDatos = () => {
    localStorage.setItem("CoderHouse", JSON.stringify(usuarioPredeterminado));
}
guardarDatos();

const buscarUsuario = () => {
    const llaves = JSON.parse(localStorage.getItem("llaves"));
    let prueba;
    llaves.forEach(key => {
        const datoUser = JSON.parse(localStorage.getItem(key))
        if (datoUser.nombre === ususario.value) {
            prueba = key;
        }
    });
    return prueba;
}

const recuperarDatosUsuario = () => {
    const datos = buscarUsuario()
    const datosUsuario = JSON.parse(localStorage.getItem(datos));
    validacionDatos(datosUsuario.nombre, datosUsuario.password);
}


/* Crear nuevo usuario y guardarlo en storage */

const formNombre = document.querySelector("#formNombre");
const formApellido = document.querySelector("#formApellido");
const formEmail = document.querySelector("#formEmail");
const formContra = document.querySelector("#formContra");
const formRepContra = document.querySelector("#formRepContra");

const datosUser = () => {
    const datos = [formNombre.value, formApellido.value, formEmail.value, formContra.value, formRepContra.value];
    return datos
}

const comprobacionPassword = (pass1, pass2) => {
    if (pass1 === pass2)
        return true;
    else
        return false;
}

const campoVacio = (dato) => {
    let estado = false
    dato.forEach(elemento => {
        if (elemento === "") {
            estado = true
        }
    })
    return estado
}

const crearObjeto = () => {

    const datos = datosUser();
    const prueba = campoVacio(datos);
    if (prueba === false) {
        if (comprobacionPassword(datos[3], datos[4])) {
            return {
                nombre: datos[0],
                apellido: datos[1],
                email: datos[2],
                password: datos[3],
            }
        }
        else {
            alert("Las contraseñas no coinciden");
            return null
        }
    }
    else {
        alert("Los campos estan vacios");
        return null
    }
}

const almacenLlaves = () => {

}

const nuevoUsuario = () => {
    const datos = crearObjeto();

    if (datos !== null) {
        const storageName = `user${datos.nombre}${datos.apellido}`;
        llaveStorage.push(storageName)
        localStorage.setItem("llaves", JSON.stringify(llaveStorage));
        localStorage.setItem(storageName, JSON.stringify(datos));
        limpiarCampos([formNombre, formApellido, formEmail, formContra, formRepContra]);
        alert(`Exito!!!\nBienvenido ${datos.nombre}`);
    }
}

/* Codigo contador de productos */
const agregarProducto = (newP) => localStorage.setItem("productosTotales", newP);






