let weather = {
    apiKey: "06599dfa3ed94532014f6f51353c79dc",
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const { temp, humidity} = data.main
        const { speed} = data.wind;
        console.log(name, icon, temp)
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h"
    }
};

let search;
const btn = document.querySelector(".search-btn")
btn.onclick = function () {
    search = document.querySelector(".search-bar").value
    weather.fetchWeather(search)
}

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        search = document.querySelector(".search-bar").value
        weather.fetchWeather(search)
    }
})