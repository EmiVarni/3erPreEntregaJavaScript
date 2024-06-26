const contenedorTarjetas = document.getElementById("productos-container");

// Creo las tarjetas de los productos
function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevaRopa = document.createElement("div");
        nuevaRopa.classList = "tarjeta-producto";
        nuevaRopa.innerHTML = `
        <img src="./img/${producto.id}.png">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevaRopa);
        nuevaRopa.getElementsByTagName("button")[0].addEventListener("click",() => {agregarAlCarrito(producto)
        });
    });
}

crearTarjetasProductosInicio(ropa);
