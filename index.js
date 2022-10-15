async function getWeather(index) {
    let request= await fetch(`https://api.weatherapi.com/v1/current.json?key=47ace2c2bd0f43f1b7e213230221210&q=${index}`);
     let res= await  request.json();
     console.log(res);


     document.getElementById('#city').innerHTML = JSON.stringify( res.location.name)
     document.getElementById('#degree').innerHTML = JSON.stringify( res.current.temp_c)
     document.getElementById('#case').innerHTML = JSON.stringify( res.current.condition.text)
     document.getElementById('wind').innerHTML = JSON.stringify( res.current.wind_kph)
     document.getElementById('humidity').innerHTML = JSON.stringify( res.current.humidity)
     document.getElementById('country').innerHTML = JSON.stringify( res.location.country)
var icon = document.getElementById('icon');
icon.src= `https:${res.current.condition.icon}`
}

getWeather('tokyo');


var searchBtnInput= document.querySelector('#searchBtn');
var cityNameInput = document.querySelector('#cityName');

searchBtnInput.addEventListener ('click', function(){
    city = {
name: cityNameInput.value

    }
getWeather(city.name);

})
