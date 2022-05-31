import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = '28ea02947c1240f5ab0edcdde5ef839d'
const URL = `https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}&pageSize=100`;

const fetchNews = async () => {
    return await axios.get(URL).then(res => res.data);
}

export const useAgencyNews = (agency) => useQuery(['news', agency],
    fetchNews, {
    select: (data) => data.articles.filter(article => article.source.name === agency)
})