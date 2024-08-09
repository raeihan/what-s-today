import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./components/Header";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  // get API
  const getData = async (id = 'id') => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=e869843a59fb42ab9b2e6656aa594c8b`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          // Tambahkan headers lain jika diperlukan
        },
      }
    );    
    setNews(response.data.articles);
  };

  useEffect(() => {
    getData(id);
  }, [id]);
  return (
    <>
      <Header title="What's Today?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5 py-5 max-sm:px-10 bg-stone-300">
        {news.map((berita) => (
          <div key={berita.id} className="mt-4">
            <Card
              title={berita.title}
              image={berita.urlToImage}
              content={berita.description}
              date={berita.publishedAt}
              link={berita.url}
            />
          </div>
        ))}
      </div>
    </>
  );  
};

export default Home;
