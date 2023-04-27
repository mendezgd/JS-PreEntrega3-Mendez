let local = localStorage.getItem("carrito");
let carrito = JSON.parse(local);
let campoTotal = document.getElementById('total');
let carroItems = document.getElementById('carro_items');

if (carrito) {
    campoTotal.innerHTML = carrito.total
    for (const i of carrito.items ) {

        carroItems.innerHTML += itemHtml(i);
        
    }
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
                    </div>
                </div>
            </div>`;
    return cardItem;
}

