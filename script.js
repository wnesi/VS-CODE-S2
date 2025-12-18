
// Menu burger
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Compte à rebours 1 semaine
const countdown = document.getElementById("countdown");
const now = new Date();
const oneWeekLater = new Date(now.getTime() + 7*24*60*60*1000);

function updateCountdown() {
  const now = new Date();
  const diff = oneWeekLater - now;

  if(diff <= 0) {
    countdown.textContent = "Événement commencé ! 🚀";
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  countdown.textContent = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();



// Scroll fluide déjà activé via CSS (scroll-behavior: smooth)

// Validation du formulaire
const form = document.getElementById("form");
const error = document.getElementById("error");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  if (!name || !email) {
    error.textContent = "Veuillez remplir tous les champs";
  } else {
    error.textContent = "Inscription réussie 🚀";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('formInscription');
  const nom = document.getElementById('nom');
  const email = document.getElementById('email');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    message.style.color = 'red';
    message.textContent = '';

    if (nom.value.trim() === '') {
      message.textContent = 'Veuillez entrer votre nom.';
      nom.focus();
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      message.textContent = 'Veuillez entrer un email valide.';
      email.focus();
      return;
    }

    message.style.color = 'green';
    message.textContent = 'Inscription réussie ! 🎉';
    form.reset();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("nav");

  burger.addEventListener("click", function() {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
});

