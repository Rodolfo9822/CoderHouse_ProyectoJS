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

const validacionDatos = (user,pass) => {
    if (ususario.value === user && password.value  === pass)
        alert("Verificacion de datos exitoso");
    else
    alert("Error de Usuario o Contraseña");
}

const  guardarDatos = () => { localStorage.setItem("datosUsuario", JSON.stringify(usuarioPredeterminado)); }
guardarDatos();

const buscarUsuario = () => { 
    
    let nombre;
    let storage;
    datosStorage.forEach( e => {
        if(e.nombre === ususario.value ){
            nombre = e.nombre;
            storage = e.storage;
        }
    });  
    return [storage,nombre]
}

const recuperarDatosUsuario =  () => {
    const datos = buscarUsuario()
    if (localStorage.getItem(datos[0])){
        const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
        validacionDatos(datosUsuario.nombre,datosUsuario.password);
    }
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

const comprobacionPassword = (pass1,pass2) =>{
    if (pass1 === pass2)
        return true;
    else
        return false;
}

const crearObjeto = () =>{
    const datos = datosUser();
    if (comprobacionPassword(datos[3], datos[4])){
        return {
            nombre : datos[0],
            apellido : datos[1],
            email : datos[2],
            contrasenia : datos[3],
        }
    }
    else{
        alert("Las contraseñas no coinciden");
        return null
    }
}

const nuevoUsuario = () =>{
    const datos = crearObjeto();
    const storageName = `user${datos.nombre}${datos.apellido}`;
    if(datos !== null){
        datosStorage.push({
            storage : storageName,
            nombre : datos.nombre
            })
        localStorage.setItem(storageName,JSON.stringify(datos));
        alert(`Exito!!!\nBienvenido ${datos.nombre}`);
    }
}







