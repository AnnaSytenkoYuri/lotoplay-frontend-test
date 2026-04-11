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

  const formData = new FormData(form);
  const query = new URLSearchParams(formData).toString();

  fetch(`https://example.com?${query}`)
    .then(() => {
      popup.classList.add("active");
      form.reset();
    })
    .catch(() => alert("Помилка"));
});
