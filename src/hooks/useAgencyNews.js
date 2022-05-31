import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = 'ba1a0ea8f8830ecdcbd3eaa304985c08';

const fetchNews = async () => {
    let limit = 100;
    return await axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=${limit}&countries=us,gb,de&languages=en&categories=technology`).then(res => res.data);
}

export const useAgencyNews = (agency) => {
    return useQuery(['news', agency],
        fetchNews, {
        select: (data) => data.data.filter(article => article.image !== null && article.source === agency)
    })
}

