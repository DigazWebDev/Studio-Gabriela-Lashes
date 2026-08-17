// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Fechar menu quando clicar num link

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});

// =========================
// HEADER AO FAZER SCROLL
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// =========================
// MODAL DE MARCAÇÃO
// =========================

const modal = document.getElementById("bookingModal");

const selectedService =
    document.getElementById("selectedService");

let selectedServiceName = "";

// Abrir marcação

function openBooking(service) {

    selectedServiceName = service;

    selectedService.textContent =
        "Serviço selecionado: " + service;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}

// Fechar marcação

function closeBooking() {

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}

// Fechar clicando fora do modal

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        closeBooking();
    }

});

// Fechar com ESC

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeBooking();
    }

});

// =========================
// ENVIO PARA WHATSAPP
// =========================

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("clientName").value;

    const phone =
        document.getElementById("clientPhone").value;

    const date =
        document.getElementById("bookingDate").value;

    const message =
        document.getElementById("clientMessage").value;

    // COLOCA AQUI O NÚMERO DE WHATSAPP
    // Formato internacional, sem +, espaços ou parênteses

    const whatsappNumber = "351917532503";

    const text =
        `Olá! Gostaria de fazer uma marcação.%0A%0A` +
        `Nome: ${encodeURIComponent(name)}%0A` +
        `Telefone: ${encodeURIComponent(phone)}%0A` +
        `Serviço: ${encodeURIComponent(selectedServiceName)}%0A` +
        `Data pretendida: ${encodeURIComponent(date)}%0A` +
        `Mensagem: ${encodeURIComponent(message)}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");

    closeBooking();

});

// =========================
// ANIMAÇÕES AO ENTRAR NO ECRÃ
// =========================

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

document
    .querySelectorAll(
        ".service-card, .testimonial, .about-content, .about-image, .gallery-item"
    )
    .forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });
