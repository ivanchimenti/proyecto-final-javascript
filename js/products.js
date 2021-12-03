if (localStorage.getItem("carrito") != null) {
    kart = JSON.parse(localStorage.getItem("carrito"));
}
let products = JSON.parse(localStorage.getItem("listOfProducts"));


products.forEach(producto => {
    let productos = document.getElementById("products");

    let img = document.createElement("img");
    img.className = "card-img-top";
    let div = document.createElement("div");
    div.className = "card-body";
    let h5 = document.createElement("h5");
    h5.className = "card.title";
    let p = document.createElement("p");
    p.className = "card-text";
    let a = document.createElement("a");
    a.className = "btn btn-primary";
    a.onclick = () => {
        alert(`¡Felicidades, agregaste la camiseta al carrito!`);
        kart.push(producto.id);
        localStorage.setItem("carrito", JSON.stringify(kart));
    }
    let hr = document.createElement("hr");



    img.src = "images/img-products/"+ producto.img;
    h5.innerHTML += producto.nombre;
    p.innerHTML += "$" + producto.precio;
    a.innerHTML += "Añadir al carrito";
    div.appendChild(img);
    div.appendChild(h5);
    div.appendChild(p);
    div.appendChild(a);
    div.appendChild(hr);
    productos.appendChild(div);
})