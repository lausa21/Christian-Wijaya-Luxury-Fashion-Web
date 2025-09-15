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

// Product Detail
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Tania Bag",
            price: "Rp 799.000",
            image: "assets/na1.jpg",
            description: "The Tania Bag is crafted from premium eco-certified leather, offering timeless elegance with a structured silhouette. Designed for the conscious trendsetter, it blends sustainability with refined functionality."
        },
        {
            name: "Grace Heels",
            price: "Rp 1.099.000",
            image: "assets/na2.jpg",
            description: "Grace Heels are the embodiment of minimalist luxury, sculpted from supple, ethically-sourced leather. Their graceful arch and sleek finish elevate any outfit from day to night."
        },
        {
            name: "Sky Sling Bag",
            price: "Rp 1.299.000",
            image: "assets/na3.jpg",
            description: "The Sky Sling Bag redefines effortless sophistication with its sleek curves and responsibly-tanned leather. Lightweight yet roomy, it's the perfect hands-free statement for modern elegance."
        },
        {
            name: "Lany Outer",
            price: "Rp 1.599.000",
            image: "assets/na4.webp",
            description: "The Lany Outer features a soft, cruelty-free leather blend that drapes beautifully for transitional layering. Its structured tailoring and eco-forward materials reflect elevated, conscious design."
        },
        {
            name: "Kayla Mules",
            price: "Rp 899.000",
            image: "assets/bs1.jpg",
            description: "Step into the Kayla Mules—where clean lines meet buttery leather in a sustainably handcrafted design. These slip-ons bring understated luxury and everyday ease to your wardrobe."
        },
        {
            name: "Adelle Top",
            price: "Rp 999.000",
            image: "assets/bs2.jpg",
            description: "Elevate your daily style with the Adelle Top, a sophisticated choice featuring fine fabric and refined details. Its elegant neckline and lightweight construction provide a graceful flow, perfect for both work and leisure.",
        },
        {
            name: "Gemma Skirt",
            price: "Rp 1.299.000",
            image: "assets/bs3.webp",
            description: "The Gemma Skirt features sleek paneling and a smooth leather finish, sourced from traceable eco-friendly tanneries. A sophisticated staple, it's perfect for both professional and evening wear."
        },
        {
            name: "Britney Top",
            price: "Rp 1.099.000",
            image: "assets/bs4.jpg",
            description: "The Britney Top is where contemporary meets classic, featuring subtle accents and a soft yet structured shape. Its understated elegance allows it to shine in both professional settings and casual outings.",
        },
        {
            name: "Mary Bag",
            price: "Rp 1.599.000",
            image: "assets/prod6.webp",
            description: "The Mary Bag is a timeless carryall, handcrafted from responsibly-sourced full-grain leather with a minimalist charm. Its impeccable construction and sustainable ethos make it a forever piece."
        },
        {
            name: "Dolphy Heels",
            price: "Rp 999.000",
            image: "assets/prod7.jpg",
            description: "Dolphy Heels are expertly molded from eco-conscious leather, with a bold block heel for modern poise. Their elevated design makes a luxurious impact with every step."
        },
        {
            name: "Jane Blazer",
            price: "Rp 1.799.000",
            image: "assets/prod8.webp",
            description: "The Jane Blazer merges sharp tailoring with soft, sustainable leather inserts for a powerful, polished look. It’s a statement of conscious luxury made for modern icons."
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 0;
    const product = products[productId];

    if (product) {
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
    } 
});


// Button Add to Chart  
document.querySelector(".add-to-chart").addEventListener("click", function () {
    window.location.href = "product.html";
});

// Button Order Now
document.querySelector(".order-now").addEventListener("click", function () {
    window.location.href = "product.html";
});