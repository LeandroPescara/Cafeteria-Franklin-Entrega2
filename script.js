// Empezamos definiendo los objetos con sus caracteristicas

let productos = [
    { id: 1, nombre: 'Cafe con Leche', precio: 2300 },
    { id: 2, nombre: 'Capuccino', precio: 2500 },
    { id: 3, nombre: 'Americano', precio: 2750 },
    { id: 4, nombre: 'Descafeinado', precio: 2000  },
];

// Defino las variables para guardar la información del usuario para usarlo en un futuro
let carrito = [];
let total = 0;

// se genera la informacion en el div.productos del html que reservamos para que el usurio pueda ver el menú

function generarProductos() {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productosDiv.appendChild(productoDiv);
    });
}

//  agregamos la funcionalidad para que pueda ir agrgandose los productos uno abajo del otro con la propiedad (push)
//  aprovechando tambien en la misma funcion ir calculando el precio total y mostrando los productos al mismo tiempo (funcion de orden superior)

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    calcularTotal();
    mostrarCarrito();
}

// calcula el total del pedido que lo usamos aca arriba

function calcularTotal() {
    total = 0;
    carrito.forEach(producto => {
        total += producto.precio;
    });
}

// por ultimo mostramos el carrito de compras en el apartado que le dejamos en el html <div id:carrito> 

function mostrarCarrito() {
    const carritoProductosDiv = document.getElementById('carrito-productos');
    carritoProductosDiv.innerHTML = '';
    carrito.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>Precio: $${producto.precio}</p>
        `;
        carritoProductosDiv.appendChild(productoDiv);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

generarProductos();
mostrarCarrito();