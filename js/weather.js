const API_KEY = "87233a24413281a23b9a7ead233c5d81";

const weather = document.querySelector("#weather span:nth-child(1)");
const city = document.querySelector("#weather span:nth-child(2)");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't fin you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
