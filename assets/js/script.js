var cityFormEl=document.querySelector("#city-search-form");
var cityInputEl=document.querySelector("#city");
var weatherContainerEl=document.querySelector("#current-weather-container");
var citySearchInput = document.querySelector("#searched-city");

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
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            displayWeather(data, city)
        });
    });
};

var displayWeather = function(weather, searchCity){
    console.log(searchCity);
    console.log(weather);
}

cityFormEl.addEventListener("submit", formSumbitHandler);