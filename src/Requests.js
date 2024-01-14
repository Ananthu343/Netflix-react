const key = 'ca1e03b239dd2aed20cff2846477378f';

const requests = {
    requestToprated : `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${key}`,
    requestPopular : `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${key}`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${key}`,
    requestTrending : `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${key}`,
    requestTvShows : `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${key}`,
}

export default requests;