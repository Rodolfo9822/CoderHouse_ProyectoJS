
const botontest = document.querySelector("#botontest");

botontest.addEventListener("click", ()=>{
    anunciosAutomaticos();
}, false);

const suscripcionBot = document.querySelector("#suscripcionBot");

suscripcionBot.addEventListener("mousemove", () =>{
    suscripcionBot.title = "Ingresa los datos para obtener los beneficios"
});

suscripcionBot.addEventListener("click", () => {
    enviarDatos(suscripNombre,suscripEmail);
}, false)



