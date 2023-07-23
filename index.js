const apikey= "2384d61e8d57d7e7930432bdc35d0f5d";
const weatherData=document.getElementById("weather-data");
const cityInput=document.getElementById("city-input");
const form=document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue=cityInput.value;
    getWeatherData(cityValue);
});
async function getWeatherData(cityValue){
    try{
        const response= await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
        if(!response.ok){
            throw new Error("Network response not found.")
        }
        const data= await response.json()
        console.log(data); 
        const temperature= Math.round(data.main.temp);
        const description=data.weather[0].description;
        const details=[
            `Feels like : ${Math.round(data.main.feels_like)}°C`,
            `Humidity:  ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}km/h`,
        ];
        console.log(details);
        const icon = data.weather[0].icon;
        weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherData.querySelector(".description").textContent = description;
        weatherData.querySelector(".details").innerHTML = details.map((details) => `<div>${details}</div>`).join("");
      
    } catch(error){

    }
}
console.log("Hi");