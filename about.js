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


// Read More Button - About Us Page
const buttons = document.querySelectorAll(".read-more-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const parent = button.closest(".about-content");
        const moreText = parent.querySelector(".more-text");
        const dots = parent.querySelector(".dots");

        const isExpanded = parent.classList.contains("expanded");

        if (isExpanded) {
            parent.classList.remove("expanded");
            button.classList.remove("active");
            button.textContent = "Read More";
        } else {
            parent.classList.add("expanded");
            button.classList.add("active");
            button.textContent = "Read Less";
        }

        // Force repaint (this is the trick)
        button.style.display = "none";
        // Trigger a reflow by accessing offsetHeight
        void button.offsetHeight;
        button.style.display = "inline-block";
    });
});