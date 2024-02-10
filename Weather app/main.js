let cityName = "";
const apiKey = ""; //Add your API key from 'https://openweathermap.org/api'
const apiURL = "http://api.openweathermap.org";
let lat;
let lon;
let temperature;
let windSpeed;
let humidity;
let description;
let apiCityName;

document.querySelector(".search-button").addEventListener("click", async () => {

    if (document.querySelector("input").value !== ""){
        cityName = document.querySelector("input").value;
        document.querySelector("input").value = "";  
        await findLatLong();
        await findTemp();
        changeData();
    } 
    else {
        alert("Please enter the city name")
    }
});




// Function for getting the latitude and longitude data from 'https://openweathermap.org/api/geocoding-api' API.
const findLatLong = async () => {
    try {
        let result = await fetch(apiURL + `/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`);
        let geoData = await result.json();
        lat = geoData[0].lat;
        lon = geoData[0].lon;
    }
    catch(error) {
        console.error(error);
    }
}


// Function to find temperature and other info data from 'https://openweathermap.org/current' API
const findTemp = async () => {
    try {
        let result = await fetch(apiURL + `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        let tempData = await result.json();
        description = tempData.weather[0].main;
        temperature = Math.round(tempData.main.temp - 273.15);
        windSpeed = (tempData.wind.speed * (18/5)).toFixed(2);
        humidity = tempData.main.humidity;
        apiCityName = tempData.name;
        console.log(description);
    }
    catch(error) {
        console.error(error);
    }
}


// Function to change inner HTML of all data according to information collected from API
const changeData = () => {
    document.querySelector(".temp-in-c").innerHTML = temperature + "°C";
    document.querySelector(".city-name").innerHTML = apiCityName;
    document.querySelector(".humi-perc").innerHTML = humidity + "%";
    document.querySelector(".wind-spd").innerHTML = windSpeed + "km/hr";
    
    let imageURL;
    switch(description){
        case "Clear": imageURL = "images/clear.png";
        break;
        case "Clouds": imageURL = "images/clouds.png";
        break;
        case "Thunderstorm": imageURL = "images/thunderstorm.png";
        break;
        case "Drizzle": imageURL = "images/drizzle.png";
        break;
        case "Rain": imageURL = "images/rain.png";
        break;
        case "Snow": imageURL = "images/snow.png";
        break;
        default: imageURL = "images/mist.png";
        break;
    }
    document.querySelector(".temperature > img").setAttribute("src", imageURL);
}
