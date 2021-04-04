import weatherDisplay from './weatherDisplay';
import weatherFetch from './weatherFetch';

const contentDiv = document.querySelector('#content');

contentDiv.appendChild(weatherDisplay);

document.onload = weatherFetch();