async function getWeather() {

    var city_names = [['Bellvue', 'bellvue'], ['Chicago', 'chicago'], ['Boise', 'boise'], ['Los Angeles', 'la'], ['San Jose', 'sj']];

    for (var i = 0; i < city_names.length; i++) {
        // The await keyword lets js know that it needs to wait until it gets a response back to continue.
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_names[i][0]}&appid=);

        // We then need to convert the data into JSON format.
        var weatherData = await response.json();
        var target_element = document.querySelector(`#${city_names[i][1]}`);
        target_element.innerHTML = kelvinToFahrenheit (weatherData['main']['temp']) + '°';
        // console.log(`${city_names[i][1]} - ${weatherData['main']['temp']}`);
    }
}

function kelvinToFahrenheit (temp) {
    return Math.trunc(((temp - 273.15) * (9/5)) + 32);
}


function picChange(getWeather()) {
    var image = document.getElementById('sunny');
    if (getWeather() < 70){
        image.src = "./static/cloudy.png";
    }
}

console.log(getWeather());
picChange();


