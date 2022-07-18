const imgPrueba = document.querySelector("#imgPrueba");
const conjuntoProducto = JSON.parse(localStorage.getItem("productos"));
const cajaPadre = document.querySelector("#cajaPadre");
const totalCompra = document.querySelector("#totalCompra");

const cajaProductos = boxFather => document.querySelector("#" + boxFather);

const comprobacionCajas = (id, boxFather, box) => {

    if (id === "cajaPadre") {
        boxFather.append(box)
    } else {
        const boxSon = cajaProductos(boxFather);
        boxSon.append(box);
    }
}

const caja = (nombre, boxFather, number, clase) => {
    const id = nombre + number
    const box = document.createElement("div");
    box.classList.add(clase);
    box.id = id
    comprobacionCajas(boxFather.id, boxFather, box);
    return id
}

const agregarImange = (src, boxFather, number) => {
    const cajaPadre = cajaProductos(boxFather);
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("imgShopping");
    img.id = "imagen" + number
    img.alt = "Imagen del producto";
    cajaPadre.append(img);
}

const agregarTexto = (clase, datos, id, number, cajaPadre) => {
    const texto = document.createElement("p");
    texto.innerText = datos;
    texto.classList.add(clase);
    texto.id = id + number;
    const caja = cajaProductos(cajaPadre);
    caja.append(texto);
}

const transformarPrecio = (costo) =>{
    costo = costo.slice(1,);
    return parseFloat(costo);
}

const costoTotal = (total) =>{
    totalCompra.innerText = "$"+total;
}

const mostrarShoppingCar = () => {
    let total = 0;
    for (let i = 0; i < conjuntoProducto.length; i++) {
        const cajaPadre2 = caja("box", cajaPadre, i, "styleShopping");
        const { img, datos, envio, costo, dipos } = conjuntoProducto[i];
        agregarImange(img, cajaPadre2, i);
        const boxSon = caja("boxSon", cajaPadre2, i, "datosShopping");
        agregarTexto("datosShopping", datos, "descripcion", i, boxSon);
        agregarTexto("datosShopping", envio, "envio", i, boxSon);
        agregarTexto("datosShopping", costo, "costo", i, boxSon);
        agregarTexto("datosShopping", dipos, "disponible", i, boxSon);
        
        total += transformarPrecio(costo);
    }
    costoTotal(total);
}

const condicionMostrar = () => {
    if (conjuntoProducto !== null)
        mostrarShoppingCar()
}

condicionMostrar();

/* Codigo botones */
const eliminarProductos = document.querySelector("#eliminarProductos");



const borrar = () => {
    localStorage.removeItem("productos");
    localStorage.removeItem("productosTotales");
    contadorProductos.innerText = 0;
    totalCompra.innerText = 0;
}

eliminarProductos.addEventListener("click", () => {
    borrar();
    alert("Los productos se eliminaron de manera exitosa\nPor favor actualizar la página para ver el cambio ")
})





