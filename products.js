document.addEventListener('DOMContentLoaded', function () {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');
    const text4 = document.getElementById('text4');

    const src1 = document.getElementById('srcc1');
    const src2 = document.getElementById('srcc2');
    const src3 = document.getElementById('srcc3');
    const src4 = document.getElementById('srcc4');

    const divs = [
        document.getElementById('prod1'),
        document.getElementById('prod2'),
        document.getElementById('prod3'),
        document.getElementById('prod4')
    ];

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const productss = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);

    const texts = [text1, text2, text3, text4];
    const srcs = [src1, src2, src3, src4];

    for (let i = 0; i < 4; i++) {
        texts[i].textContent = productss[i].title;
        srcs[i].src = productss[i].image;
    }

    // Click pe produse aleatorii
    divs.forEach((div, i) => {
        div.addEventListener('click', () => {
            const selected = productss[i];
            products.forEach(p => p.isActive = false);

            const actual = products.find(p => p.id === selected.id);
            if (actual) actual.isActive = true;

            localStorage.setItem('products', JSON.stringify(products));
            updateProductDetails(actual);
        });
    });

    // La încărcare: arată produsul activ
    const active = products.find(p => p.isActive);
    if (active) updateProductDetails(active);

    function updateProductDetails(prod) {
        document.getElementById('product').textContent = prod.title;
        document.getElementById('image').src = prod.image;
        document.getElementById('description').textContent = prod.description;
        document.getElementById('price').textContent = prod.price;

        const image = document.getElementById('image');
        const mini1 = document.getElementById('mini1');
        const mini2 = document.getElementById('mini2');
        const mini3 = document.getElementById('mini3');

        mini1.src = prod.image;
        mini2.src = prod.image2;
        mini3.src = prod.image3;

        mini1.onclick = () => fadeImage(prod.image);
        mini2.onclick = () => fadeImage(prod.image2);
        mini3.onclick = () => fadeImage(prod.image3);

        function fadeImage(src) {
            image.style.opacity = 0;
            setTimeout(() => {
                image.src = src;
                image.style.opacity = 1;
            }, 300);
        }
    }
});


const openCart = document.querySelectorAll('.functionality');
const cartContainer = document.getElementById('cart-container');
const closeCart = document.getElementById('cart-exit');
let isOpen = false;

openCart.forEach(element => {
    element.addEventListener('click', function () {
        if (isOpen) {
            cartContainer.style.right = '-450px';
            isOpen = false;
        } else {
            cartContainer.style.right = '0px';
            isOpen = true;
        }
    });
});

closeCart.addEventListener('click', function () {
    cartContainer.style.right = '-450px';
})


function openDropdown() {
    const dropdown = document.getElementById("dropdown-navbar");
    const fix = document.getElementById("dropdown-fix");

    if(dropdown.style.top === "45px"){
        dropdown.style.top = "-180px";
        fix.style.borderBottomLeftRadius = "15px";
        fix.style.borderBottomRightRadius = "15px";
    }
    else{
        dropdown.style.top = "45px";
        fix.style.borderBottomLeftRadius = "0px";
        fix.style.borderBottomRightRadius = "0px";
    }

}


document.addEventListener('DOMContentLoaded', function(){

document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');
    const target = button.getAttribute('data-target');
    if (page) {
      // Redirecționează către pagina respectivă
      window.location.href = page + (target ? '#' + target : '');
    }
  });
});
})

///////////////////////////////////////////////////////////////////////////

image = document.getElementById('image');


mini1 = document.getElementById('mini1');
mini1.src = activeProducts.image;

mini1.addEventListener('click', function(){
    image.style.opacity = 0;

    setTimeout(() => {
        image.src = activeProducts.image;
        image.style.opacity = 1;
    }, 300)
})


mini2 = document.getElementById('mini2');
mini2.src = activeProducts.image2;

mini2.addEventListener('click', function(){
    image.style.opacity = 0;

    setTimeout(() => {
        image.src = activeProducts.image2;
        image.style.opacity = 1;
    }, 300)
})


mini3 = document.getElementById('mini3');
mini3.src = activeProducts.image3;

mini3.addEventListener('click', function(){
    image.style.opacity = 0;

    setTimeout(() => {
        image.src = activeProducts.image3;
        image.style.opacity = 1;
    }, 300)
})

///////////////////////////////////////////////////////////////////////////

//cartProducts = JSON.parse(localStorage.getItem('cartItems'));

//console.log(cartProducts);



function addToCart() {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const productElement = products.find( p =>p.idActive);
    const product = {
        title: productElement.title,
        price: productElement.price,
        image: productElement.src,
        quantity: 1 // Cantitatea inițială este 1
    };

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Verifică dacă produsul există deja în coș
    const existingProduct = cartItems.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity += 1; // Crește cantitatea
    } else {
        cartItems.push(product); // Adaugă un produs nou
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Produsul a fost adăugat în coș!");
    loadCartItems();
}

function loadCartItems () {
    
    const cartAdded = document.getElementById("cart-added");
    cartAdded.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let totalSum = 0; // Variabilă pentru suma totală

    cartItems.forEach((item, index) => {
        // Calculează prețul total pentru fiecare produs
        
        let rawPrice = item.price || "";
    if (typeof rawPrice !== "string") {
        rawPrice = String(rawPrice);
    }
    rawPrice = rawPrice.replace("Pret: ", "").replace(" lei", "").replace(",", ".");

    const price = parseFloat(rawPrice) || 0;
    const totalPrice = price * item.quantity;
    totalSum += totalPrice;

        const cartItemHTML = `
            <div class="element-added" data-index="${index}">
                <p class="product-class">${item.title}</p>
                <p class="product-class">${item.price}</p>
                <div class="quantity">
                    <button class="quantity-class decrease">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-class increase">+</button>
                </div>
                <button class="remove-from-cart">Remove</button>
            </div>
        `;
        cartAdded.insertAdjacentHTML("beforeend", cartItemHTML);
    });

    // Afișează suma totală
    const totalAmountElement = document.getElementById("total-amount");
    totalAmountElement.textContent = `${totalSum.toFixed(2)} lei`;

    // Adaugă event listeners pentru butoanele de creștere/scădere
    const decreaseButtons = document.querySelectorAll(".decrease");
    decreaseButtons.forEach(button => {
        button.addEventListener("click", decreaseQuantity);
    });

    const increaseButtons = document.querySelectorAll(".increase");
    increaseButtons.forEach(button => {
        button.addEventListener("click", increaseQuantity);
    });

    // Adaugă event listeners pentru butoanele de ștergere
    const removeButtons = document.querySelectorAll(".remove-from-cart");
    removeButtons.forEach(button => {
        button.addEventListener("click", removeFromCart);
    });

function decreaseQuantity(event) {
    const itemElement = event.target.closest(".element-added");
    const index = itemElement.getAttribute("data-index");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1; // Scade cantitatea
    } else {
        cartItems.splice(index, 1); // Șterge produsul dacă cantitatea este 0
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    loadCartItems(); // Reîncarcă coșul pentru a actualiza suma totală
}

// Funcție pentru creșterea cantității
function increaseQuantity(event) {
    const itemElement = event.target.closest(".element-added");
    const index = itemElement.getAttribute("data-index");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems[index].quantity += 1; // Crește cantitatea
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    loadCartItems(); // Reîncarcă coșul pentru a actualiza suma totală
}

// Funcție pentru ștergerea unui produs din coș
function removeFromCart(event) {
    const itemElement = event.target.closest(".element-added");
    const index = itemElement.getAttribute("data-index");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.splice(index, 1); // Șterge produsul
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    loadCartItems(); // Reîncarcă coșul pentru a actualiza suma totală
}

}

// Încarcă produsele și coșul la încărcarea paginii
window.addEventListener("load", () => {
    loadCartItems();
});