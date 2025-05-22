


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


const products = JSON.parse(localStorage.getItem('products')) || [];

const activeProducts = products.find(p => p.idActive);

document.getElementById('product').textContent = activeProducts.title;

document.getElementById('image').src = activeProducts.image;

document.getElementById('title').textContent = activeProducts.title;

document.getElementById('description').textContent = "Not ready yet!";

document.getElementById('price').textContent = activeProducts.price;


///////////////////////////////////////////////////////////////////////////

