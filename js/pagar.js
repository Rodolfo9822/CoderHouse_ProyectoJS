const conjuntoProducto = JSON.parse(localStorage.getItem("productos"));
const formPagar = document.querySelector("#formPagar");
const botonFormC = document.querySelector("#botonFormC");
const formPago = document.querySelector("#formPago");

const transformarPrecio = (costo) =>{
    costo = costo.slice(1,);
    return parseFloat(costo);
}

const totalPagar  = (total) => {
    formPagar.value = `$${total}`;
}

const mostrarShoppingCar = () => {
    let total = 0;
    if (conjuntoProducto !== null){
        for (let i = 0; i < conjuntoProducto.length; i++) {
            const {costo} = conjuntoProducto[i];
            total += transformarPrecio(costo);
        }
        return total
    }
   
}

if (mostrarShoppingCar() !== undefined){
    console.log()
    totalPagar(mostrarShoppingCar());
}else{
    totalPagar(0);
}

const totalCompra = document.querySelector("#totalCompra");

const borrar = () => {
    contadorProductos.innerText = 0;
    localStorage.removeItem("productos");
    localStorage.removeItem("productosTotales");
}

const comprobarPago = (total) =>{
    if (formPago.value >= mostrarShoppingCar() ){
        borrar();
        alert("El pago fue exitoso\nGracias por comprar");
    }
    else{
        alert("No cuenta con saldo suficiente");
    }
}

botonFormC.addEventListener("click", () =>{
    comprobarPago();
})

