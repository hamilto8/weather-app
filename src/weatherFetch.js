import apiToken from './apiToken';

let cityName = 'Milwaukee';

let apiKeyUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiToken}`;

fetch(apiKeyUrl,{mode: 'cors'})
    .then(function(res){
        console.log(res.json()');
    })
    .catch(function(err){
        console.log(err);
    });