const url1 = 'https://api.tvmaze.com/shows';

const getMovieTitle = async () => {
  const movieTitle = document.querySelectorAll('.movie-title');
  const titleArray = [];
  const response = await fetch(url1);
  const data = await response.json();
  data.forEach((title) => {
    titleArray.push(title.name);
    movieTitle.forEach((movie, index) => {
      movie.innerHTML = titleArray[index];
    });
  });
};
export default getMovieTitle;