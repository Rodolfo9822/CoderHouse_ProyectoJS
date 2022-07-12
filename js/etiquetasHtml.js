const nav = document.querySelector("#nav");
nav.innerHTML = "";

const agregarLinks = () => {
    linksNombre.forEach(links => {
        const link = document.createElement("a");
        link.href = links.archivo;
        link.classList.add("link--style");
        link.innerText = links.nombre;
        link.id = links + "Nav";
        nav.append(link);
    })
}

agregarLinks();

/* Codigo para los anuncios de dispositivos */
const parrafos = (etiqueta, contenedor, texto, clase) => {
    etiqueta.innerText = texto;
    etiqueta.classList.add(clase);
    contenedor.append(etiqueta);
}

const agregarImagen = (img, contenedor, path, clase) => {
    img.src = path;
    img.alt = "Imagen Producto";
    img.classList.add(clase);
    contenedor.append(img)
}

const agregarEnlace = (enlance, contenedor, nombre, clase) => {
    enlance.innerText = nombre;
    enlance.href = "#";
    enlance.classList.add(clase);
    contenedor.append(enlance)
}

const crearAnuncion = (num, textosAnuncio, enlaceAnuncio, imagenAnuncio) => {

    const producto = anuncioEquipos[num]
    
    const texto = document.createElement("p");
    const texto2 = document.createElement("p");
    const img = document.createElement("img");
    const enlace = document.createElement("a");
    
    parrafos(texto, textosAnuncio, producto.tituloAnuncio, "tituloAnuncio");
    parrafos(texto2, textosAnuncio, producto.descripAnuncio, "descripAnuncio");
    agregarImagen(img, imagenAnuncio , producto.imagen, "anuncioImagen");
    agregarEnlace(enlace,enlaceAnuncio, producto.enlace, "anuncioLink");

}

const anunciosAutomaticos = () => {
    for (let i = 0; i <= 3; i++) {
        const textosAnuncio = document.querySelector("#textosAnuncio" + i);
        const enlaceAnuncio = document.querySelector("#enlaceAnuncio" + i);
        const imagenAnuncio = document.querySelector("#imagenAnuncio" + i);
        textosAnuncio.innerHTML = "";
        enlaceAnuncio.innerHTML = "";
        imagenAnuncio.innerHTML = "";
        crearAnuncion(i, textosAnuncio, enlaceAnuncio, imagenAnuncio)
    }
}

const anadirClase = () => {
    for (let i = 1; 4 >= i; i++) {
        const anuncio = document.querySelector("#anuncio"+i);
        anuncio.classList.add("anuncio");
    }
}

/* Codigo para cambiar de producto */

const imgPr = (i,feature) => {
    const img = document.querySelector(`#imgPr`+i);
    img.src = feature ;
}

const datosPr = (i,feature) => {
    const datos = document.querySelector(`#datosPr`+i)
    datos.innerText = feature ;
}

const envioPr = (i,feature) => {
    const envio = document.querySelector(`#envioPr`+i)
    envio.innerText = feature ;
}

const precioPr = (i,feature) => {
    const precio = document.querySelector(`#precioPr`+i)
    precio.innerText = `$${feature}`;
}

const dispoPr = (i,feature) => {
    const dispo = document.querySelector(`#dispoPr`+i)
    dispo.innerText = `Disponible: ${feature}` ;
}


const cambioProducto = (dataBase) => {
    for (let i = 1; i < 7; i ++) {
        const producto = dataBase[i-1];

        imgPr(i,producto.imagen);
        datosPr(i,producto.datos);
        envioPr(i,producto.envio);
        precioPr(i,producto.precio);
        dispoPr(i,producto.cantidad);
    }
}


