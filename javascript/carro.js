let local = localStorage.getItem("carrito");
let carrito = JSON.parse(local);
let arrCarrito = [];

if (carrito) {
    arrCarrito = carrito.items

}

function itemHtml(el) {
    cardItem = `
            <div class="card m-1">
                <div class="row g-0">
                    <div class="col-md-1">
                        <img src="../media/${el.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                            <h5 class="card-title">${el.nombre}</h5>
                            <p class="card-text">${el.descripcion}</p>
                            
                        </div>
                    </div>
                    <div class="col-md-1">
                        <p class="card-text text-center pt-4">$${el.precio}</p>
                        <button value="${el.id}" class="btn btn-danger borrar">Borrar</button>
                    </div>
                </div>
            </div>`;
    return cardItem;
}

eventoBoton = function (e) {
    arrCarrito = removerId(arrCarrito, e.target.value);
    let carrito = { items: arrCarrito};
    localStorage.setItem("carrito", JSON.stringify(carrito));
    refrescarItems();
};

const removerId = (arr, filtro) => {
    const buscar = arr.filter((el) => {
        return el.id != filtro
    })
    return buscar
}

function refrescarItems() {
    let carroItems = document.getElementById('carro_items');
    let total = 0;
    let campoTotal = document.getElementById('total');
    arrCarrito.forEach(x => {
        total += x.precio
    });
    campoTotal.innerHTML = total
    carroItems.innerHTML = "";
    for (const i of arrCarrito) {

        carroItems.innerHTML += itemHtml(i);

    }
    agregarListener();
}

function agregarListener() {
    let botonesBorrar = document.getElementsByClassName('borrar');
    for (const boton of botonesBorrar) {
        boton.addEventListener('click', eventoBoton);
    }
}


refrescarItems();