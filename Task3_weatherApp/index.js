const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = 'ac4c30be60c7dde0ae644749b07b5c2a';




const cardTitle = document.querySelector('.card-title');
const temp = document.querySelector('.temp');
const cardText = document.querySelector('.card-text');
const feelsLike = document.querySelector('.feels-like');
const humidity = document.querySelector('.humidity');
const tempMin = document.querySelector('.temp-min');
const tempMax = document.querySelector('.temp-max');

const searchBox = document.querySelector('input');
const searchBtn = document.querySelector('button');
const img = document.querySelector('.weather-img');
async function weather(city){
   let response =  await fetch(url + city +  `&appid=${apiKey}`);
    try{
        if(!response.ok){
            alert("Error, Not Found!");
            throw new Error('Error, Not Found!');
            
           }
    const data = await response.json();
    console.log(data);
    cardTitle.innerHTML = `${data.name}`;
    temp.innerHTML = `${data.main.temp}&deg;C`;
    feelsLike.innerHTML = `Feels like: ${data.main.feels_like} &deg;C`
    cardText.innerHTML = `<b>${data.weather[0].main} - ${data.weather[0].description}</b>`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
   



    if(data.weather[0].main == 'Clouds'){
        img.src = "/assets/clouds.png";
    } else if(data.weather[0].main == 'Drizzle'){
        img.src = "/assets/drizzle.png";
    } else  if(data.weather[0].main == 'Mist'){
        img.src = "/assets/mist.png";
    } else  if(data.weather[0].main == 'Rain'){
        img.src = "/assets/rain.png";
    } else  if(data.weather[0].main == 'Clear'){
        img.src = "/assets/clear.png";
    }
   }
       catch (error) {
        alert(error.message);
        console.error(error);
      }
   

} 

searchBtn.addEventListener('click',()=>{
    const city = searchBox.value.trim();
    if(!city){
        alert('Please enter a city name');
        return;
    }
    weather(searchBox.value);
})








