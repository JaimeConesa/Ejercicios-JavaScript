let carrito = [];
function agregarProducto(nombre, precio, cantidad) {
        if (typeof nombre !== 'string'){
            throw new Error("El nombre del producto debe ser una cadena de texto.");
        }
        if (typeof precio !== 'number' || precio <= 0) {
            throw new Error("El precio debe ser un número mayor que 0.");
        }

        if (typeof cantidad !== 'number' || cantidad <= 0) {
            throw new Error("La cantidad debe ser un número mayor que 0.");
        }
    let producto = {
    nombre : nombre,
    precio : precio,
    cantidad : cantidad
}
carrito.push(producto);
}
function mostrarCarrito() {
carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}, Cantidad: ${producto.cantidad}`)
})
}
function calcularTotalProductos() {
    let totalPorductos = 0;
    carrito.forEach(producto => {
    totalPorductos ++;
    });
    console.log(`Total de productos en el carrito: ${totalPorductos}`);
}
function calcularTotalPrecio(){
    let totalPrecio = 0;
    carrito.forEach(producto => {
    totalPrecio += producto.precio*producto.cantidad;
    });
    console.log(`Total de precio del carrito: ${totalPrecio}`);
    }
// Prueba del carrito
try{
    agregarProducto("Manzanas", 2, 5);
    agregarProducto(1, 1.5, 3);
    mostrarCarrito();
    calcularTotalPrecio();
    calcularTotalProductos();
} catch (Error){

    console.log("Ha ocurrido un error: " + Error.message);
}
