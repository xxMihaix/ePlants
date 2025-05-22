
// Funcție pentru a adăuga un nou produs
function addNewProduct() {
    const image = document.getElementById("input-image").files[0];
    const title = document.getElementById("input-title").value;
    const price = document.getElementById("input-price").value;
    
    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (title.trim() !== "" && price.trim() !== "") {
        const newProduct = {
            image: image ? URL.createObjectURL(image) : "data:image/png;base64,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",
            title: title,
            price: `Pret: ${price} lei`,
            class1: "buy", 
            class2: "remove",
            removable: true
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(newProduct);
        localStorage.setItem("products", JSON.stringify(products));

        alert("Produsul a fost salvat cu succes!");
        document.getElementById("input-title").value = "";
        document.getElementById("input-price").value = "";
        document.getElementById("input-image").value = "";

        loadProducts();
    } else {
        alert("Te rog să introduci un Titlu și Preț!");
    }
}

// Funcție pentru a încărca și afișa produsele din localStorage
function loadProducts() {
    const section2 = document.getElementById("section2");

    // Ștergem conținutul vechi pentru a reîncărca corect
    const section1 = document.getElementById("section1");
    section1.innerHTML = "";


    
    document.getElementById("add-new").addEventListener("click", addNewProduct);

    // Obținem produsele din localStorage sau inițializăm un array gol
    let products = JSON.parse(localStorage.getItem("products")) || [];

   // Definim produsele predefinite
   const devProducts = [
    { id: 1, idActive: false, title: "Bonsai", price: "Pret: 79.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Bonsai.jpeg"},
    { id: 2, idActive: false, title: "Bambus", price: "Pret: 59.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Bambus.jpeg"},
    { id: 3, idActive: false, title: "Cactus", price: "Pret: 7,89 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Cactus.jpeg"},
    { id: 4, idActive: false, title: "Orhidee", price: "Pret: 29.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Orhidee.jpeg"},
    { id: 5, idActive: false, title: "Buchet Flori", price: "Pret: 74.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/BuchetFlori.jpeg",},
    { id: 6, idActive: false, title: "Aloe Vera", price: "Pret: 39.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/AloeVera.jpeg"},
    { id: 7, idActive: false, title: "Lavanda", price: "Pret: 24.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Lavanda.jpeg"},
    { id: 8, idActive: false, title: "Feriga", price: "Pret: 34.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Feriga.jpg"},
    { id: 9, idActive: false, title: "Craciunita", price: "Pret: 44.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Craciunita.jpg"},
    { id: 10, idActive: false, title: "Dracaena", price: "Pret: 89.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Dracaena.jpg"},
    { id: 11, idActive: false, title: "Ficus", price: "Pret: 349.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Ficus.jpeg"},
    { id: 12, idActive: false, title: "Areca", price: "Pret: 109.99 lei", class1: "buy-dev", class2: "remove", removable: false, image: "Images/Areca.jpeg"},
];

    // Adăugăm doar produsele care nu există deja ${product.removable ? `<div class="buy-container"><button class="${product.class2}">Remove</button></div>` : ""}
    //products.splice(0, 20);

    
    
    devProducts.forEach(devProduct => {
       if (!products.some(product => product.title === devProduct.title)) {
           products.push(devProduct);
       }
    });

    

    // Salvăm produsele actualizate în localStorage
    localStorage.setItem("products", JSON.stringify(products));

    

    // Parcurgem toate produsele și le afișăm pe pagină
    products.forEach((product, index) => {
        const inputHTML = `
    <div class="own-merch" data-index="${index}">
        <div class="image-container"><img src="${product.image}" class="items-image"></div>
        <p class="title">${product.title}</p>
        <p class="prience">${product.price}</p>
        <div class="container-buttons">
            <div class="buy-container"><button class="${product.class1}">BUY</button></div><br>
            ${product.removable ? `<div class="buy-container"><button class="${product.class2}">Remove</button></div>` : ""}
        </div>
        <div class="buy-container">
        <a href="products.html">
        <button class="see-details">See details</button></a>
        </div>
    </div>
`;

        section1.insertAdjacentHTML("beforeend", inputHTML);

    });

    const details = document.querySelectorAll('.see-details');

    details.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.closest('.own-merch').dataset.index;
            let products = JSON.parse(localStorage.getItem('products'));

            products.forEach(p => p.idActive = false);

            products[index].idActive = true;

            localStorage.setItem('products', JSON.stringify(products));
        })
    })

    /*document.querySelectorAll('.see-details').forEach(el => {
    el.addEventListener('click', function (e) {
        const productElement = e.target.closest('.own-merch');
        const productId = productElement.dataset.id;

        // Redirecționează spre pagina de detalii
        window.location.href = `products.html?id=${productId}`;

    });
});*/

    // Adăugăm event listeners pentru butoanele "Remove" și "Buy"
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", removeItem);
    });

    document.querySelectorAll(".buy, .buy-dev").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    console.log(products);

    const dropdownMenuPrice = document.getElementById("price-search");
const dropdownMenuPriceContent = document.getElementById("container-price-search");
let isOpen = false; // Variabilă care reține dacă meniul este deschis sau nu

dropdownMenuPrice.addEventListener("click", function() {
    if (isOpen) {
        // Dacă meniul este deschis, îl închidem
        dropdownMenuPriceContent.style.display = "none";
    } else {
        // Dacă meniul este închis, îl deschidem
        dropdownMenuPriceContent.style.display = "block";
    }

    isOpen = !isOpen;
});


}


// Apelează funcția la încărcarea paginii
window.addEventListener("load", loadProducts);


// Apelează funcția la încărcarea paginii
window.addEventListener("load", loadProducts);


// Funcție pentru ștergerea unui item
function removeItem(event) {
    const itemToDelete = event.target.closest(".own-merch");
    if (itemToDelete) {
        const index = itemToDelete.getAttribute("data-index");
        itemToDelete.remove();

        const products = JSON.parse(localStorage.getItem("products")) || [];
        if (index >= 0 && index < products.length) {
            products.splice(index, 1);
            localStorage.setItem("products", JSON.stringify(products));
        }
    }
}

// Funcție pentru adăugarea unui produs în coș
function addToCart(event) {
    const productElement = event.target.closest(".merch, .own-merch");
    const product = {
        title: productElement.querySelector(".title").textContent,
        price: productElement.querySelector(".prience").textContent,
        image: productElement.querySelector(".items-image").src,
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

// Funcție pentru încărcarea și afișarea produselor din coș
function loadCartItems() {
    const cartAdded = document.getElementById("cart-added");
    cartAdded.innerHTML = "";

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let totalSum = 0; // Variabilă pentru suma totală

    cartItems.forEach((item, index) => {
        // Calculează prețul total pentru fiecare produs
        const price = parseFloat(item.price.replace("Pret: ", "").replace(" lei", "").replace(",", "."));
        const totalPrice = price * item.quantity;
        totalSum += totalPrice; // Adaugă la suma totală

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

}

// Funcție pentru scăderea cantității
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

// Încarcă produsele și coșul la încărcarea paginii
window.addEventListener("load", () => {
    loadProducts();
    loadCartItems();
});

///////////////////////////////////

const openCart = document.querySelectorAll(".functionality");
const cartContainer = document.getElementById("cart-container");
const closeCart = document.getElementById("cart-exit");
let isOpen = false;

openCart.forEach(button => {
  button.addEventListener("click", function() {
    if (isOpen) {
      cartContainer.style.right = "-450px";
    } else {
      cartContainer.style.right = "0";
    }
    isOpen = !isOpen;
  });
});


closeCart.addEventListener("click", () => {
    cartContainer.style.right = "-450px";
    isOpen = false;
});

//////////////////////////////////////////

const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});


//////////////////////////////////////////////////

document.querySelectorAll('input[name="radio-price"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
        if (event.target.id === "radio1") {
            sortLowToHigh();
        } else if (event.target.id === "radio2") {
            sortHighToLow();
        }
    });
});

function sortLowToHigh() {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));

    console.log("Produse sortate crescător:", products);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts(); // Reafișează lista de produse
}

function sortHighToLow() {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));

    console.log("Produse sortate descrescător:", products);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts(); // Reafișează lista de produse
}

// Funcție pentru extragerea prețului ca număr
function extractPrice(priceString) {
    return parseFloat(priceString.replace("Pret: ", "").replace(" lei", "").replace(",", "."));
}

document.getElementById("search-bar").addEventListener("input", function () {
    let searchQuery = this.value.toLowerCase().trim(); // Obținem textul introdus de utilizator
    let products = JSON.parse(localStorage.getItem("products")) || [];

    let filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery)
    );

    displayFilteredProducts(filteredProducts); // Reafișăm produsele filtrate
});

function displayFilteredProducts(filteredProducts) {
    let section1 = document.getElementById("section1");
    section1.innerHTML = ""; // Curățăm lista anterioară

    filteredProducts.forEach((product, index) => {
        const inputHTML = `
        <div class="own-merch" data-index="${index}">
            <div class="image-container"><img src="${product.image}" class="items-image"></div>
            <p class="title">${product.title}</p>
            <p class="prience">${product.price}</p>
            <div class="container-buttons">
                <div class="buy-container"><button class="${product.class1}">BUY</button></div><br>
                ${product.removable ? `<div class="buy-container"><button class="${product.class2}">Remove</button></div>` : ""}
            </div>
        </div>
        `;
        section1.insertAdjacentHTML("beforeend", inputHTML);
    });

    // Re-adaugăm event listeners pentru butoane după ce lista a fost reîmprospătată
    document.querySelectorAll(".remove").forEach(button => {
        button.addEventListener("click", removeItem);
    });

    document.querySelectorAll(".buy, .buy-dev").forEach(button => {
        button.addEventListener("click", addToCart);
    });

}

console.log("checked");

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



