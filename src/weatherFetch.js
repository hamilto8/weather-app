import apiToken from './apiToken';


function weatherFetch(){
    let cityName = 'London';
    
    let apiKeyUrl = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiToken}`;
    
    fetch(apiKeyUrl,{mode: 'cors'})
        .then(function(res){
            // console.log('returned json');
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        });
}

export default weatherFetch