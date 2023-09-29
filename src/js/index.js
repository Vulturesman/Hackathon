const getEvents = async () => {
  const url = "https://test-api.codingbootcamp.cz/api/bcc04bd8/events";
  const data = await fetch(url);
  const response = await data.json();
  console.log(response);

  console.log(response[0].name);
  console.log(response.at());
};

getEvents();
