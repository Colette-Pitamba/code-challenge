import axios from "axios";

const baseURL = 'https://api.nytimes.com/svc/topstories/v2/science.json';
const apiKey = 'Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil';

/**
 * returns a list of articles
 */

export const getArticlesRequested = async () => {
	const articles = await axios.get(`${baseURL}?api-key=${apiKey}`);

	return articles.data;
} ;
