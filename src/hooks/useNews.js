import axios from "axios";
import { useQuery } from "react-query";

const API_KEY = '28ea02947c1240f5ab0edcdde5ef839d'

const fetchNews = async (pageNumber) => {
    return await axios.get(`https://newsapi.org/v2/everything?q=keyword&apiKey=${API_KEY}&page=${pageNumber}&pageSize=12`).then(res => res.data);
}

export const useNews = (pageNumber) => useQuery(['news', pageNumber], () => fetchNews(pageNumber))