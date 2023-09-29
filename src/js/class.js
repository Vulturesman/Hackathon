//! Class
const getEvents = async () => {
  const url = "https://test-api.codingbootcamp.cz/api/bcc04bd8/events";
  const data = await fetch(url);
  const response = await data.json();

  console.log(response[0].id);
  response.forEach((event) => {
    new OtherEvents(event);
  });
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
        console.log(this.id)
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
          <button class="main-event__registration__button register-button">
            Register
          </button>
        </div>
        `;
    } else {
        boxForEvents.appendChild(this.element);
        this.element.innerHTML = `
            <h3>${this.name}</h3>
            <button class="register-button main-other-event__button">MORE</button>
            `;
        this.element.className = "main-other-events__box";
        this.element.style.backgroundImage = `url(${this.image})`;
    }
  };
}
//! Class