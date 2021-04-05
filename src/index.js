import weatherDisplay from './weatherDisplay';
import weatherFetch from './weatherFetch';

const contentDiv = document.querySelector('#content');

function onStart(){
    weatherFetch();
    weatherDisplay();
}

document.onload = onStart();