const popup = document.getElementById("popup");
const buttons = document.querySelectorAll(".open-popup");
const closeBtn = document.getElementById("closePopup");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// FORM
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 2) {
    alert("Ім'я повинно містити не менше 2 символів");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Невірний формат email");
    return;
  }

  if (message.length < 5) {
    alert("Повідомлення повинно містить не менше 5 символів");
    return;
  }

  const formData = new FormData(form);
  const query = new URLSearchParams(formData).toString();

  fetch(`https://example.com?${query}`)
    .then(() => {
      popup.classList.add("active");
      form.reset();
    })
    .catch(() => alert("Помилка"));
});
