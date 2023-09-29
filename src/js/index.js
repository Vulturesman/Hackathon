///start of form ///

console.log("ok");

const submitButton = document.getElementsByClassName(
  "registration-button-submit"
);

const eventId = 1;
//event I want to register to - needs to be based on ID of the event that brought up the registration form //
const registerForm = document.getElementById("register-form");
console.log(registerForm);

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const urlReg = `https://test-api.codingbootcamp.cz/api/bcc04bd8/events/${eventId}/registrations`;
  // 1 - make this real
  const radioButtons = document.querySelectorAll("input[name=age]");

  let selectedAge = null;
  radioButtons.forEach((button) => {
    if (button.checked) {
      selectedAge = button.value;
    }
  });

  const registrationData = {
    "First Name": registerForm.querySelector("input[name=firstName]").value,
    "Last name": registerForm.querySelector("input[name=lname]").value,
    email: registerForm.querySelector("input[name=email]").value,
    "Phone Number": registerForm.querySelector("input[name=phoneNumber]").value,
    age: selectedAge,
  };

  const myResponse = await fetch(urlReg, {
    method: "POST",
    body: JSON.stringify(registrationData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const myUsableResponse = await myResponse.json();
  console.log(myUsableResponse);
});

/////end of form ///

//! Class
const getEvents = async () => {
  const url = "https://test-api.codingbootcamp.cz/api/bcc04bd8/events";
  const data = await fetch(url);
  const response = await data.json();

  console.log(response[0].id);
  response.forEach((event) => {
    new OtherEvents(event);
  });
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
};

getEvents();
const boxForMainevent = document.querySelector(".main-event");
const boxForEvents = document.querySelector(".main-other-events");

class OtherEvents {
  constructor(event) {
    console.log(event);
    this.element = document.createElement("div");
    this.name = event.name;
    this.image = event.image_url;
    this.desciption = event.description;
    this.id = event.id;
    this.elementNew();
  }

  elementNew = () => {
    if (this.id == 1) {
      console.log(this.id);
      boxForMainevent.appendChild(this.element);
      this.element.className = "main-event";
      this.element.innerHTML = `
        <div class="main-event__featured">
          <p>FEATURED EVENT</p>
        </div>
        <div class="main-event__img">
          <img src="${this.image}" alt="event" />
        </div>
        <div class="main-event__description">
          <h2>${this.name}</h2>
          <h3>${this.desciption}</h3>
        </div>
        <div class="main-event__registration">
          <button data-window-target="#window" class="main-event__registration__button register-button">
            Register
          </button>
        </div>
        `;
    } else {
      boxForEvents.appendChild(this.element);
      this.element.innerHTML = `
            <h3>${this.name}</h3>
            <button data-window-target="#window" class="register-button main-other-event__button">MORE</button>
            `;
      this.element.className = "main-other-events__box";
      this.element.style.backgroundImage = `url(${this.image})`;
    }
  };
}
//! Class
