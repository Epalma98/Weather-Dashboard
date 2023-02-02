// var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=15458b1cfd9511f807c9fce0d75750fe'
var apiKey = "15458b1cfd9511f807c9fce0d75750fe";

const btnInsert = document.getElementById("submitBtn");
const cityName = document.getElementById("submitBtn");


// gets the OpenWeather API
let weather = {  
    apiKey: "15458b1cfd9511f807c9fce0d75750fe",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    // Takes the data values from the API and converts them into variables
    displayWeather: function(data) {
        const { name } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        let { speed } = data.wind;

        // Uses the variables to append them onto the webpage
        document.querySelector(".cityName").innerText = "Current weather in " + name;
        document.querySelector(".icon").src =
        "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "MPH";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
// Tried getting the 5 Day Forecast API, but couldn't get it to show anything but "Undefined"
let forecast = {
    apiKey: "15458b1cfd9511f807c9fce0d75750fe",
    fetchForecast: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city 
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayForecast(data));
    },
    displayForecast: function(data) {
        let { forecast } = data.list[1].main.temp

        document.querySelector(".forecast-temp1").innerText = "Temp: " + forecast;
    },
    search: function () {
        this.fetchForecast(document.querySelector(".search-bar").value);
    }
};
// Event listener to search button
document.querySelector(".col-4 button").addEventListener("click", function() {
    weather.search();
});
document.querySelector(".col-4 button").addEventListener("click", function() {
    forecast.search();
});
