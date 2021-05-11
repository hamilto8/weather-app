import weatherDisplay from './weatherDisplay';
import weatherFetch from './weatherFetch';
import searchBar from './searchBar';

const contentDiv = document.querySelector('#content');

function onStart(){
    contentDiv.appendChild(searchBar());
}

document.onload = onStart();