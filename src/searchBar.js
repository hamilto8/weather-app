import weatherDisplay from './weatherDisplay';
import weatherFetch from './weatherFetch';

const searchBar = () => {
    const searchInput =  document.createElement('input');
        searchInput.type = 'text';
        searchInput.classList.add('search-bar');
        searchInput.placeholder = 'Enter Location!';

        searchInput.addEventListener('keydown', (e)=>{
            if(e.key === 'Enter'){
                if(searchInput.value === ''){
                    console.log("Enter pressed, nothing to say");
                } else {
                    weatherFetch(searchInput.value);
                    searchInput.value = '';
                }
            }
        });
    return searchInput
}



export default searchBar