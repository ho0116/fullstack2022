let temp = document.querySelector("#temp");
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let wind = document.querySelector("#wind");
let weather = document.querySelector("#weather");
let icon = document.querySelector("#icon");
let cr = document.getElementById("cr");
let icon_url =
  "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/";
let openweatherfind_url =
  "https://api.openweathermap.org/data/2.5/find?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35";

let openweather_url =
  "https://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35";

var ajaxrequest = new XMLHttpRequest();
function getWeatherfind() {
  ajaxrequest.open("GET", openweather_url);
  ajaxrequest.send();
  ajaxrequest.onreadystatechange = function () {
    if (ajaxrequest.readyState == 4) {
      response = JSON.parse(ajaxrequest.responseText);
      console.log(response);
      let wdata = response.list[0];
      let exdata = response.list[0].weather[0];
      temp.innerText = wdata.main.temp;
      min.innerText = wdata.main.temp_min;
      max.innerText = wdata.main.temp_max;
      wind.innerText = wdata.main.speed;
      weather.innerText = exdata.main + "," + exdata.description;
      debugger;
    }
  };
}

function getWeatherfind() {
  ajaxrequest.open("GET", openweather_url);
  ajaxrequest.send();
  ajaxrequest.onreadystatechange = function () {
    if (ajaxrequest.readyState == 4) {
      response = JSON.parse(ajaxrequest.responseText);
      console.log(response);
      let exdata = response.weather[0];
      temp.innerText = response.main.temp;
      min.innerText = response.main.temp_min;
      max.innerText = response.main.temp_max;
      wind.innerText = response.main.speed;
      weather.innerText = exdata.main + "," + exdata.description;
      debugger;
    }
  };
}
let openweather_basic =
  "https://api.openweathermap.org/data/2.5/weather?appid=7d96bc5108f52b80e2d9075a369b9f35";

let openweather_go = null;

function getWeatherbycity() {
  ajaxrequest.open("GET", openweather_go);
  ajaxrequest.send();
  ajaxrequest.onreadystatechange = function () {
    if (ajaxrequest.readyState == 4) {
      response = JSON.parse(ajaxrequest.responseText);
      console.log(response);
      let exdata = response.weather[0];
      temp.innerText = response.main.temp;
      min.innerText = response.main.temp_min;
      max.innerText = response.main.temp_max;
      wind.innerText = response.main.speed;
      weather.innerText = exdata.main + "," + exdata.description;
      icon.setAttribute("src", icon_url + exdata.icon + ".png");
      cr.value = cityname + "," + response.sys.country;
      document.getElementById("cg").textContent =
        cityname + ", " + response.sys.country;
      debugger;
    }
  };
}

const button = document.querySelector("#go");
button.onclick = function (e) {
  let cityinput = document.getElementById("city");
  cityname = cityinput.value;
  openweather_go = openweather_basic + "&q=" + cityname;

  let tempinput = document.getElementById("tempunit");
  tempunit = tempinput.value;
  openweather_go += "&units=" + tempunit;
  getWeatherbycity();
};

const unitsselect = document.getElementById("tempunit");
unitsselect.onchange = function (e) {
  let cityinput = document.getElementById("city");
  cityname = cityinput.value;
  openweather_go = openweather_basic + "&q=" + cityname;

  let tempinput = document.getElementById("tempunit");
  tempunit = tempinput.value;
  openweather_go += "&units=" + tempunit;
  getWeatherbycity();
};

getWeatherfind();
