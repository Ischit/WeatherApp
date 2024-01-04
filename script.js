const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "837d5333cbmshe0b2cebf6a5a8afp15e88ejsncf2dc508eff4",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityname.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
btnDelhi.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Delhi");
});
btnMumbai.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Mumbai");
});
btnBangalore.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Bangalore");
});
btnPatna.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Patna");
});
btnRoorkee.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Roorkee");
});
btnLucknow.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Lucknow");
});
btnKolkata.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather("Kolkata");
});

const getWeat = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response1) => response1.json())
    .then((response1) => {
      document.getElementById(`temp${city}`).innerHTML = response1.temp;
      document.getElementById(`feels_like${city}`).innerHTML =
        response1.feels_like;
      document.getElementById(`humidity${city}`).innerHTML = response1.humidity;
      document.getElementById(`cloud_pct${city}`).innerHTML =
        response1.cloud_pct;
      document.getElementById(`min_temp${city}`).innerHTML = response1.min_temp;
      document.getElementById(`max_temp${city}`).innerHTML = response1.max_temp;
      document.getElementById(`wind_speed${city}`).innerHTML =
        response1.wind_speed;
      document.getElementById(`wind_degrees${city}`).innerHTML =
        response1.wind_degrees;
      document.getElementById(`sunrise${city}`).innerHTML = response1.sunrise;
      document.getElementById(`sunset${city}`).innerHTML = response1.sunset;
    })
    .catch((err) => console.error(err));
};
getWeat("Patna");
getWeat("Roorkee");
getWeat("Lucknow");
getWeat("Kolkata");
