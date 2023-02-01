// var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=15458b1cfd9511f807c9fce0d75750fe'
var apiKey = "15458b1cfd9511f807c9fce0d75750fe";

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
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".cityName").innerText = "Current weather in " + name;
        document.querySelector(".icon").src =
        "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "MPH";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.body.style,backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    fetchForecast: function (city) {
        fetch(
            "https://api.openweathermap.org/geo/1.0/direct?q="
            + city 
            + "&limit=1&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },  
        

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".col-4 button").addEventListener("click", function() {
    weather.search();
})



