const openWindowBut = document.querySelectorAll("[data-window-target]");
const closeWindowBut = document.querySelectorAll("[data-close-button]");
const darkenPage = document.getElementById("darken");

openWindowBut.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.windowTarget);
    openWindow(modal);
  });
});

closeWindowBut.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".window");
    closeWindow(modal);
  });
});

darkenPage.addEventListener("click", () => {
  const modals = document.querySelectorAll(".window.active");
  modals.forEach((modal) => {
    closeWindow(modal);
  });
});

function openWindow(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  darkenPage.classList.add("active");
}

function closeWindow(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  darkenPage.classList.remove("active");
}
