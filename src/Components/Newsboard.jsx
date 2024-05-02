import { useEffect, useState } from "react"
import Newsitems from "./Newsitems";
import './Newsboard.css';

const Newsboard = ({category}) => {
  const [articles,setArticles] = useState([]);

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));  
  },[category])

  const currentDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const currentDateTime = currentDate.toLocaleString('en-US', options);

  return (
    <div className="newsboard">
      <div className="container">
        <h2 className="text-center"> <span className="badge bg-dark">{currentDateTime}</span></h2> 
        <div className="row">
          {articles.map((news,index)=>{
            return <Newsitems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Newsboard  





