const getEvents = async () => {
  const url = "https://test-api.codingbootcamp.cz/api/bcc04bd8/events";
  const data = await fetch(url);
  const response = await data.json();
  console.log(response);

  console.log(response[0].name);
  console.log(response.at());
};

getEvents();

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

/*
need to create for every button:

        <button
            data-window-target="#window"
            class="main-event__registration__button register-button"
          >
            Register
          </button>

          <div class="window" id="window">
            <div class="window-heading">
              <div class="window-heading__title">TEST</div>
              <button data-close-button class="close-button">x</button>
            </div>
            <div class="window-main">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad velit
              autem, praesentium quibusdam repellat assumenda at id tempora
              accusamus magnam nam rem molestias corporis, illum explicabo alias
              voluptate veniam doloremque!
            </div>
          </div>


*/

/*
extra overlay div for whole body
<div id="darken"></div>
*/


///start of form ///

console.log("ok");

const submitButton = document.getElementsByClassName('registration-button-submit');

const eventId = 1
//event I want to register to - needs to be based on ID of the event that brought up the registration form //
const registerForm = document.getElementById('register-form')
console.log(registerForm);

registerForm.addEventListener('submit',async (event)=> {
    event.preventDefault()
    const urlReg = `https://test-api.codingbootcamp.cz/api/bcc04bd8/events/${eventId}/registrations`
    // 1 - make this real
    const radioButtons = document.querySelectorAll('input[name=age]')
   
    let selectedAge = null
    radioButtons.forEach(button => {
        if (button.checked) {
            selectedAge = button.value
        }
    })

    const registrationData = {
        "First Name": registerForm.querySelector('input[name=firstName]').value,
        "Last name": registerForm.querySelector('input[name=lname]').value,
        "email":registerForm.querySelector('input[name=email]').value,
        "Phone Number":registerForm.querySelector('input[name=phoneNumber]').value,
        "age": selectedAge
    };

    const myResponse = await fetch(urlReg, {
      "method": "POST",
      "body": JSON.stringify(registrationData),
      "headers": {
        'Content-Type': 'application/json'
      }
    })
    const myUsableResponse = await myResponse.json()
    console.log(myUsableResponse)
  });

  /////end of form ///