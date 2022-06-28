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

console.log(suscripNombre);
