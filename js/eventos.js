
const botontest = document.querySelector("#botontest");
const instagram = document.querySelector("#instagram");
const facebook = document.querySelector("#facebook");
const twitter = document.querySelector("#twitter");

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


instagram.addEventListener("mousemove", () =>{
    instagram.title = "Instagram";
});

facebook.addEventListener("mousemove", () =>{
    facebook.title = "Facebook";
});

twitter.addEventListener("mousemove", () =>{
    twitter.title = "Twitter";
});
