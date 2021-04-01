let cityName = 'Milwaukee, WI';

let apiKeyUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3f06e2b0078f1ce055f5891af19c4e57`;

fetch(apiKeyUrl,{mode: 'cors'})
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    });