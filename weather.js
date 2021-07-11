const API_KEY = "72a58fa195f6387847d0a91cee3cf448";

function onGeoOk (position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    console.log(city);
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
  });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);