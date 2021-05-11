import weatherDisplay from './weatherDisplay';

const searchBar = () => {
    const searchInput =  document.createElement('input');
        searchInput.type = 'text';
        searchInput.classList.add('search-bar');
        searchInput.placeholder = 'Enter Location!';

        searchInput.addEventListener('keydown', weatherDisplay(searchInput.value));
    return searchInput
}

export default searchBar