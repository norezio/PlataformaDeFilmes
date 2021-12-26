const API_KEY = '489f24039c36d2583277babad16c16aa';
const API_BASE = 'https://api.themoviedb.org/3';

/*  
    * originais 
    * recomendados (trending)
    * em alta (top rated)
    * ação
    * terror
    * comédia
    * documentários
    * romance
*/

const basicFatch = async (endpoint) => {
    const req = await fetch([`${API_BASE}${endpoint}`]);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do App',
                itens: await basicFatch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`)
            },
            {   
                slug: 'trending',
                title: 'Recomendados para você',
                itens: await basicFatch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`),
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                itens: await basicFatch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`) ,
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFatch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`),
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                itens: await basicFatch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`),
            },
            {
                slug: 'Horror',
                title: 'Terror',
                itens: await basicFatch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`),
            },
            {
                slug: 'Romance',
                title: 'Romance',
                itens: await basicFatch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`),
            },
            {
                slug: 'Documentary',
                title: 'Documentários',
                itens: await basicFatch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`),
            },
        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFatch(`/movie/${movieId}?language=pt-br&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFatch(`/tv/${movieId}?language=pt-br&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
    }
}