const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=adfe4f4c4e7af569052cb0ab4bdbc61d'

const Search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=adfe4f4c4e7af569052cb0ab4bdbc61d&language=en-US&page=1&include_adult=false&query=spiderman'

async function getMovies() {
    const response = await fetch(Search_URL)
    const data = await response.json()

    console.log(data)
}

getMovies();

const movieSection = document.getElementById('movies')

function showMovies(movies) {
    main.innerHTMl = ' ';
    console.log(main.innerHTML, 'currentMainInnerHTML')
    console.log(movies)
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <button data-title="${title}"  onclick = "likeMovie(event)">Like</button>
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                
                    </div>
                    <div class="overview">
                <h3>Overview</h3>
                ${overview}
             </div>
        `
        main.appendChild(movieEl)
    })
}

function likeMovie(e) {
    const movieLikes = document.getElementById("movieLikes")
    count = parseInt(movieLikes.innerText)

    if (e.target.innerText === 'Like') {
        count++;
        movieArray.push(e.target.dataset.title)
        movieLikes.innerText = count;
        e.target.innerText = 'Unlike'
        renderLikedMovies()
    } else {
        count--;
        movieLikes.innerText = count;
        e.target.innerText = 'Like'
    }
}



function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}