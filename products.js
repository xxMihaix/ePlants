


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


const params = new URLSearchParams(window.location.search);
        const productId = params.get('id');

        // 2. Luăm lista produselor din localStorage
        const products = JSON.parse(localStorage.getItem('products')) || [];

        // 3. Căutăm produsul cu id-ul corespunzător
        const product = products.find(p => String(p.id) === productId);

        // 4. Dacă există produsul, afișăm detaliile lui
        document.getElementById('test').textContent = product.title;
