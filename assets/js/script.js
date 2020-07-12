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

}

cityFormEl.addEventListener("submit", formSumbitHandler);