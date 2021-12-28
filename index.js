const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=adfe4f4c4e7af569052cb0ab4bdbc61d'

const Search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=adfe4f4c4e7af569052cb0ab4bdbc61d&language=en-US&page=1&include_adult=false&query=spiderman'

async function getMovies() {
    const response = await fetch(Search_URL)
    const data = await response.json()

    console.log(data)
}

getMovies();

const movieSection = document.getElementById('movies')