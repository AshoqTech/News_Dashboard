import { API_KEY } from "../Api/api";
export const newsLoader = async ( {params} ) => {
  try {
    const News_category = params.category || "general";
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${News_category}&apiKey=${API_KEY}`,
    );
    const data = await res.json();
    console.log(data.articles)
    return data.articles;
    
  } catch (error) {
    console.log("error fetching the data", error);
  }
};
export default newsLoader;
