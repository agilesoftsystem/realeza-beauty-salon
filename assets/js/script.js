const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

function redirectToPage() {
    window.open(
        "https://api.whatsapp.com/send/?phone=19982497496&text&type=phone_number&app_absent=0",
        "_blank",
    );
}
