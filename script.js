const hamburgerMenu = document.querySelector("#hamburgerMenu");
const navbar = document.querySelector(".navLinks");

hamburgerMenu.onclick = () => {
navbar.classList.toggle("active");
};

document.addEventListener("click", function(event) {
    const isClickInsideMenu = navbar.contains (event.target);
    const isClickInsideHamburger = hamburgerMenu.contains (event.target);

    if (!isClickInsideMenu && !isClickInsideHamburger && navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    }
});

//SCRIPT PER FAR CHIUDERE IL MENU APPENA CLICCHI SULLA SEZIONE DESIDERATA
const navLinks = document.querySelectorAll(".navLinks a"); 

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains("active")) {
            navbar.classList.remove("active");
        }
    });
});


// Disabilita il ripristino dello scroll e forza il ritorno in cima alla pagina
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // Disabilita il comportamento predefinito
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Torna all'inizio della pagina quando viene caricata
});


