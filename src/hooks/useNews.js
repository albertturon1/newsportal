import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = 'ba1a0ea8f8830ecdcbd3eaa304985c08';

const fetchNews = async (pageNumber) => {
    let limit = 100;
    let offset = limit * (pageNumber - 1);

    return await axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=${limit}&offset=${offset}&countries=us,gb,de&languages=en&categories=technology`).then(res => res.data);
}

export const useNews = (pageNumber) => useQuery(['news', pageNumber],
    () => fetchNews(pageNumber), {
    select: (data) => data.data.filter(article => article.image !== null).slice(0,12)
})