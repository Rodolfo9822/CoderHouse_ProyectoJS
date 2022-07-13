const procesador = document.querySelector("#procesador");
procesador.addEventListener("click", () => cambioProducto(procesadores) );

const graficas = document.querySelector("#graficas");
graficas.addEventListener("click", () => cambioProducto(grafica) );


const botonAgregar1 = document.querySelector("#botonAgregar1");
const botonAgregar2 = document.querySelector("#botonAgregar2");
const botonAgregar3 = document.querySelector("#botonAgregar3");
const botonAgregar4 = document.querySelector("#botonAgregar4");
const botonAgregar5 = document.querySelector("#botonAgregar5");
const botonAgregar6 = document.querySelector("#botonAgregar6");

botonAgregar1.addEventListener("click", () => { 
    obtener(botonAgregar1);
    agregarProducto(obtenerTotal()+1);
    mostrarTotal();
})

botonAgregar2.addEventListener("click", () => { 
    obtener(botonAgregar2);
    agregarProducto(obtenerTotal()+1);
    mostrarTotal();
})

botonAgregar3.addEventListener("click", () => { 
    obtener(botonAgregar3);
    agregarProducto(obtenerTotal()+1);
    mostrarTotal();
})

botonAgregar4.addEventListener("click", () => { 
    obtener(botonAgregar4);
    agregarProducto(obtenerTotal()+1);
    mostrarTotal();
})

botonAgregar5.addEventListener("click", () => { 
    obtener(botonAgregar5);
    agregarProducto(obtenerTotal()+1);
    mostrarTotal();
})

botonAgregar6.addEventListener("click", () => { 
    obtener(botonAgregar6);
    agregarProducto(obtenerTotal()+1);
    mostrarTotal();
})


const datosProducto = (botonAgregar) => botonAgregar.parentElement.parentElement;

const obtener = (botonAgregar) =>{
    const boton = datosProducto(botonAgregar);
    const img = boton.children[0].lastChild.previousSibling.currentSrc;
    const datos = boton.children[1].children[0].textContent;
    const envio = boton.children[1].children[1].textContent;
    const costo = boton.children[1].children[2].firstElementChild.textContent;
    const dispo = boton.children[1].children[2].lastElementChild.textContent;
    guardarProductos(img,datos,envio,costo,dispo);
    
} 

const guardarProductos = (img,datos,envio,costo,dispo) =>{
    const producto = {
        img   : img,
        datos : datos,
        envio : envio,
        costo : costo,
        dipos : dispo,
    }
    localStorage.setItem("productos", JSON.stringify(producto));
}


