const URIGET = "js/productos.json";

$.getJSON(URIGET, function (respuesta, estado){
    if(estado ==="success"){
        products = respuesta;
        
        let productsStr = JSON.stringify(products);

        localStorage.setItem("listOfProducts",productsStr);
    }
});

/**
 * 
 * @param {*} cart 
 * @param {*} id
 *  Add products to the cart 
 */
 function addTocart(cart,id){
    cart.push("" + id);
    alert("Added to cart succesfully");
    guardarCarritoEnLocalStorage(cart);
  }
  
  /**
   * 
   * @param {*} cart
   * Save cart in Local Storage
   */
  function guardarCarritoEnLocalStorage (cart) {
    localStorage.setItem('carrito', JSON.stringify(cart));
  }

  
  function showProducts(category, products,cart) {
    $("body").append(`
      <div class="container mt-5 mb-5">
        <div class="d-flex justify-content-center row">
        <div class="col-md-10">
        </div>
        </div>
      </div>`);
    for (const product of products) {
      if (product.category === category.toLowerCase()) {
        $(".col-md-10").prepend(`
      <div class="row p-2 bg-white border rounded mt-2">
          <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image" src="../${product.img}"></div>
              <div class="col-md-6 mt-1">
                  <h5>${product.nombre}</h5>
                  <div class="d-flex flex-row">
                      <div class="ratings mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>
                      </div><span>${product.pais}</span>
                  </div>
                  <div class="mt-1 mb-1 spec-1">
                    <span>100% cotton</span><span class="dot"></span><span>Light weight</span><span class="dot"></span><span>Best finish<br></span>
                  </div>
                  <div class="mt-1 mb-1 spec-1">
                    <span>Unique design</span><span class="dot"></span><span>For men</span><span class="dot"></span><span>Casual<br></span>
                  </div>
                  <p class="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br><br></p>
              </div>
              <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                <div class="d-flex flex-row align-items-center">
                    <h4 class="mr-1">$${product.precio}</h4><span class="strike-text">$${product.precio + 300}</span>
                </div>
                <h6 class="text-success">last ${product.stock} unities</h6>
                <div class="d-flex flex-column mt-4">
                    <button class="btn btn-primary btn-sm" type="button" id="tocart${product.id}" >Add to cart</button>
                </div>
              </div> 
          </div>
      </div>`);
      let botonElementcart=document.getElementById("tocart"+product.id);
      botonElementcart.addEventListener("click",function(){addToCart(cart,product.id)})
      }
    }
}

let cart = [];

if (localStorage.getItem("carrito") != null) {
    cart = JSON.parse(localStorage.getItem("carrito"));
}

localStorage.setItem("carrito", JSON.stringify(cart));
