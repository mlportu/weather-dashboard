var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var weatherContainerEl=document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");


var formSumbitHandler = function(event){
    event.preventDefault();
    var city = cityInputEl.value.trim();
    
    if(city){
        getCityWeather(city);
        cityInputEl.value = "";
    } else{
        alert("Please enter a City");
    }
}

var getCityWeather = function(city){
    var apiKey = "844421298d794574c100e3409cee0499"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city);
            console.log(data)
        });
    });
};

var displayWeather = function(weather, searchCity){
   //clear old content
   weatherContainerEl.textContent= "";  
   citySearchInputEl.textContent=searchCity + " (" + weather.coord.dt + ") " +weather.weather[0].icon

   //create a span element to hold temperature data
   var temperatureEl = document.createElement("div");
   temperatureEl.textContent = "Temperature: " + weather.main.temp + " degrees F";
  
   //create a span element to hold Humidity data
   var humidityEl = document.createElement("div");
   humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
  
   //create a span element to hold Wind data
   var windSpeedEl = document.createElement("div");
   windSpeedEl.textContent = "Wind Speed: " + weather.wind.speed + " MPH";

   
   //append to container
   weatherContainerEl.appendChild(temperatureEl);

   //append to container
   weatherContainerEl.appendChild(humidityEl);
   
   //append to container
   weatherContainerEl.appendChild(windSpeedEl);
}

cityFormEl.addEventListener("submit", formSumbitHandler);