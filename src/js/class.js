const getEvents = async () => {
  const url = "https://test-api.codingbootcamp.cz/api/bcc04bd8/events";
  const data = await fetch(url);
  const response = await data.json();
  response.forEach((event) => {
    new OtherEvents(event);
  });
};

getEvents();
const boxForMainevent = document.querySelector("");
const boxForEvents = document.querySelector(".main-other-events");

class OtherEvents {
  constructor(event) {
    console.log(event);
    this.element = document.createElement("div");
    this.name = event.name;
    this.image = event.image_url;
    this.elementNew();
  }

  elementNew = () => {
    if (event.id == 0) {
    } else {
    }

    boxForEvents.appendChild(this.element);
    this.element.innerHTML = `
        <h3>${this.name}</h3>
        <button class="register-button main-other-event__button">MORE</button>
        `;
    this.element.className = "main-other-events__box";
    this.element.style.backgroundImage = `url(${this.image})`;
  };
}
