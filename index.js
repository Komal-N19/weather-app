function formatDate(timestamp){
    let date=new Date(timestamp);
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[date.getDay()];
    return `${day}, ${hours}:${minutes}`;
}
function displayTemperature(response){
    console.log(response.data);
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = `Description:✨`+ response.data.weather[0].description +`✨`;
    let temperatureElement = document.querySelector("#temperature");
    let maxElement = document.querySelector("#max");
    maxElement.innerHTML=`Maximum temp:`+ response.data.main.temp_max +`°C`;
    let minElement = document.querySelector("#min");
    minElement.innerHTML= `Minimum temp:`+ response.data.main.temp_min +`°C`;
    temperatureElement.innerHTML =  +Math.round(response.data.main.temp)+`°C`;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML= `Humidity check:`+response.data.main.humidity +`%`;
    let pressureElement = document.querySelector("#pressure");
    pressureElement.innerHTML=`Pressure:`+ response.data.main.pressure +` Pa`;
    let windElement = document.querySelector("#wind");
    windElement.innerHTML=`Wind Speed:`+ response.data.wind.speed +` m/s`;
    let sunriseElement = document.querySelector("#sunrise");
    sunriseElement.innerHTML= `Sunrise:`+ response.data.sys.sunrise;
    let sunsetElement = document.querySelector("#sunset");
    sunsetElement.innerHTML = `Sunset:`+ response.data.sys.sunset;
    let feelsElement = document.querySelector("#feels");
    feelsElement.innerHTML= `Feels like:`+ response.data.main.feels_like +`°C`;
    let dateElement = document.querySelector("#date");
    dateElement.innerHTML='Last Update: '+formatDate(response.data.dt*1000);
}
function search(city){
    let apiKey = "f1be5f1c263eb4b1d6ed5dcb4643a395";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event){
    event.preventDefault();
    cityInputElement = document.querySelector("city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}

search("New York");

let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);
