import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import LoadingBar from 'react-top-loading-bar';
import Toast from "react-hot-toast";

const News = (props) => {

    const {category, pageSize, country} = props;
    const apiKey = process.env.REACT_APP_API_KEY;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResult, setTotalResult] = useState(0);
    const [progress, setProgress] = useState(0);

    document.title = `News App - ${category[0].toUpperCase() + category.substring(1, category.length)}`

    const fetchNews = async () => {
        try {
          setProgress(10);
          const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
          setLoading(true);
          let newsDate = await fetch(url);
          setProgress(30);
          let parsedData = await newsDate.json();
          setProgress(70);
          setArticles(parsedData.articles);
          setTotalResult(parsedData.totalResults);
          console.log(parsedData);
          Toast.success("Fetched News Data Successfully");
          setLoading(false);
          setProgress(100);
        } catch (error) {
          console.log(error);
          Toast.error("Cannot Fetch Data");
        }
    }


    const fetchMoreNews = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResult(parsedData.totalResults);
    }

    useEffect(() => {
        fetchNews();
        // eslint-disable-next-line
    }, []);

  return (
    <div className='w-[100%]'>
        <LoadingBar
          height={3}
          color='#1D5EFF' 
          progress={progress}
        />
      <h1 className='text-blueBg font-bold max-md:text-xl max-phone:text-sm max-phone:py-3 max-sm:text-lg tracking-wider text-3xl w-[100%] text-center customFont py-5 capitalize'>News-App Top {category} Head Lines</h1>
      
        {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreNews}
        hasMore={articles.length !== totalResult}
        loader={<Spinner />}
      >
        
        <div className='grid grid-cols-3 max-md:grid-cols-2 max-md:p-5 max-md:gap-7 max-ipad:grid-cols-2 max-sm:grid-cols-1 gap-10 max-phone:py-2 max-phone:px-5 p-10'>
            {
                articles.map((data, idx) => (
                    <NewsItem key={idx} title={data.title ? data.title: ""} description={data.description ? data.description : ""} imgUrl={data.urlToImage} newsUrl={data.url} author={!data.author ? "Unknown" : data.author} date={data.publishedAt} source={data.source.name} />
                ))
            }
        </div>

      </InfiniteScroll>
    </div>
  )
}

export default News
