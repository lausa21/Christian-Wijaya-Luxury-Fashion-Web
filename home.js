// Navigation Bar 
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.querySelector(".shop-now").addEventListener("click", function () {
    window.location.href = "product.html";
});

// View All Product Button
document.querySelector(".view-all-products-btn").addEventListener("click", function () {
    window.location.href = "product.html";
});