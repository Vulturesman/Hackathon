// modal Window DOWN

const openWindowBut = document.querySelectorAll("[data-window-target]"); // data type in HTML element - open
const closeWindowBut = document.querySelectorAll("[data-close-button]"); // Data type in HTML element - close
const darkenPage = document.getElementById("darken"); // like the whole overlay

openWindowBut.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.windowTarget); //   button -> data-window-target="#window". needs to be updated to our buttons
    openWindow(modal);
  });
});

closeWindowBut.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".window"); // finds the first parent element with particular class.
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
  if (modal == null) return; // break if modal null
  modal.classList.add("active");
  darkenPage.classList.add("active");
}

function closeWindow(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  darkenPage.classList.remove("active");
}

// Modal window UP
