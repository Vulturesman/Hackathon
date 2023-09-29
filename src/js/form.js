////
// FORM POST
console.log("ok");

const submitButton = document.getElementsByClassName('registration-button-submit');

const eventId = 1
//event I want to register to - needs to be based on ID of the event that brought up the registration form //
const registerForm = document.getElementById('register-form')
console.log(registerForm);

registerForm.addEventListener('submit',async (event)=> {
    console.log("submitting");
    event.preventDefault()
    const urlReg = `https://test-api.codingbootcamp.cz/api/bcc04bd8/events/${eventId}/registrations`
    // 1 - make this real
    
    const radioButtons = document.querySelectorAll('input[name=age]')
    console.log(radioButtons);
    let selectedAge = null
    radioButtons.forEach(button => {
        if (button.checked) {
            selectedAge = button.value
        }
    })
    console.log(selectedAge);;
    const registrationData = {
        "First Name": registerForm.querySelector('input[name=firstName]').value,
        "Last name": registerForm.querySelector('input[name=lname]').value,
        "E-mail":registerForm.querySelector('input[name=email]').value,
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