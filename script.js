async function fetchWeather(city) {
    const response = await 
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=metric&appid=daa0b08aae290e3ba1f5f96b5c7f7a76");
    const data = await response.json();
    console.log(data);
    Temp.innerHTML=data.main.temp
    Temp2.innerHTML=data.main.temp
    Feels_like.innerHTML=data.main.feels_like
    Temp_min.innerHTML=data.main.temp_min
    Temp_max.innerHTML=data.main.temp_max
    Sunrise.innerHTML=data.sys.sunrise
    Sunset.innerHTML=data.sys.sunset
    Pressure.innerHTML=data.main.pressure
    Pressure2.innerHTML=data.main.pressure
    mosam.innerHTML=data.weather[0].description
    wind_Speed.innerHTML=data.wind.speed
    wind_Speed2.innerHTML=data.wind.speed
}
fetchWeather1(srs.innerHTML, 'srs')
fetchWeather1(manali.innerHTML, 'manali')
fetchWeather1(vrinda.innerHTML, 'vrinda')
fetchWeather1(kail.innerHTML, 'kail')
fetchWeather1(kail.innerHTML, 'mum')
fetchWeather1(kail.innerHTML, 'ludhi')
async function fetchWeather1(city , i) {
  const response = await 
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city+ "&units=metric&appid=daa0b08aae290e3ba1f5f96b5c7f7a76");
  const data = await response.json();
  console.log(data);
  document.getElementById(i).insertAdjacentHTML('afterend',`<td>${data.main.temp}&deg;C</td>
  <td>${data.main.temp}&deg;C</td>
  <td>${data.main.temp_min}&deg;C</td>
  <td>${data.main.temp_max}&deg;C</td>
  <td>${data.sys.sunrise}</td>
  <td>${data.sys.sunset}</td>
  <td>${data.weather[0].description}</td>
  <td>${data.wind.speed}</td>
  <td>${data.main.pressure}</td>`)
}
  
  
submit.addEventListener("click",(e)=>{
    w.innerHTML= "Weather for " + typ.value
fetchWeather(typ.value)
})
const homeButton = document.getElementById('homeButton');

// Add a click event listener to the home button
homeButton.addEventListener('click', function(event) {
  // Prevent the default behavior of the anchor tag (to avoid navigating to #)
  event.preventDefault();

  // Reload the page
  location.reload();
});