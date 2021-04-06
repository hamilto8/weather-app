
function weatherDisplay(cityName="London", temperature="69"){
    const contentDiv = document.querySelector('#content');

    const weatherHeader = document.createElement('h1');
        weatherHeader.innerText = `Today\'s Weather in ${cityName}`;
        
    const weatherIcon = document.createElement('span');
        weatherIcon.innerHTML = '<i class="fas fa-cloud"></i>';

        weatherHeader.appendChild(weatherIcon);

    const temperatureDiv = document.createElement('div');
        temperatureDiv.innerText = `The current temperature is ${temperature}`;
    
    contentDiv.appendChild(weatherHeader);
    contentDiv.appendChild(temperatureDiv);
}

export default weatherDisplay