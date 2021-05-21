import apiToken from './apiToken';
import weatherDisplay from './weatherDisplay';


function weatherFetch(cityName="London"){
    
    let apiKeyUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiToken}`;
    
    fetch(apiKeyUrl,{mode: 'cors'})
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(function(err){
            console.log(err);
        });
}

export default weatherFetch