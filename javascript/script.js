const arrProdFijo = [
    { id: 1, nombre: "Ak47", stock: 10, precio: 2500, img: "prod1.jpg", descripcion: "El AK-47 es un fusil de asalto soviético diseñado por Mijaíl Kaláshnikov en 1947" },
    { id: 2, nombre: "M4A1", stock: 5, precio: 3100, img: "asalto1.jpg", descripcion: "La M4A1 es una carabina de asalto estadounidense que utiliza munición 5,56." },
    { id: 3, nombre: "Desert Eagle", stock: 22, precio: 700, img: "prod3.jpg", descripcion: "La Desert Eagle es una pistola semiautomática capacidad para disparar cartucho .50 Action Express." },
    { id: 4, nombre: "Sniper AWP", stock: 10, precio: 5700, img: "prod2.jpg", descripcion: "El AWP es un rifle de francotirador de cerrojo que utiliza munición calibre .338" },
    { id: 5, nombre: "Chaleco anti-balas", stock: 50, precio: 1000, img: "chaleco1.jpg", descripcion: "El Kevlar es un material sintético resistente y ligero que se utiliza en la fabricación de chalecos antibalas" },
    { id: 6, nombre: "Escopeta", stock: 40, precio: 1200, img: "escopetas1.jpg", descripcion: "Las escopetas están diseñadas para descargar varios proyectiles, como perdigones o postas, en cada disparo." },
    { id: 7, nombre: "Optica", stock: 300, precio: 150, img: "opticas1.jpg", descripcion: "Los visores son dispositivos ópticos que se acoplan al arma para mejorar la precisión del disparo." },
    { id: 8, nombre: "Granada", stock: 22, precio: 400, img: "granadas1.jpg", descripcion: "Estas armas están diseñadas para ser arrojadas desde distancias cortas y causar daño en un radio considerable." },
];

let arrProdFiltrado = [];
const iva = 1.21
let total = 0

// filtrado de nombre //
const buscarNombre = (arr, filtro) => {
    const buscar = arr.find((el) => {
        let minus = el.nombre.toLowerCase();
        return minus.includes(filtro.toLowerCase());
    })
    return buscar
}

// buscador //
const productosDin = document.getElementById('productosDin');
const inputBuscar = document.querySelector('input[type="search"]');
const botonAgregar = document.getElementById('submit');
const listaCarrito = document.getElementById('listaCarrito');


// funcion crea cards //
function crearCard(el) {
    productosDin.innerHTML = "";
    let htmlCard = `
    <div class="col">
        <div class="card" style="width: 18rem; ">
            <img src="./media/${el.img}" alt="${el.nombre} class="card-img-top">
            <div class="card-body">
                <h4>${el.nombre}</h4>
                <h5 class="precio">precio : $${el.precio}</h5>
                <p class="stock">en stock: ${el.stock}</p>
                <p class="descripcion">${el.descripcion}</p>
            </div>
         </div>
    </div>`;
    productosDin.innerHTML = htmlCard;
}

showInput = addEventListener('input', () => {
    let found = buscarNombre(arrProdFijo, inputBuscar.value);
    crearCard(found);
})


// funcion crea lista carro //

function crearLista(el) {
    listaCarrito.innerHTML = "";
    let htmlCard = `
    <div class="col-3">
        <p>${el.nombre}</p>
        <p>${el.precio}</p>
        <p>total: ${total + el.precio}
    </div>
`;
    listaCarrito.innerHTML = htmlCard;
}

agregarBoton = addEventListener('submit', (e) => {
    e.preventDefault();
    let found = buscarNombre(arrProdFijo, inputBuscar.value);
    crearLista(found);
});


