import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
 const[articles,setArticles]=useState([]);
 const[loading,setLoading]=useState(true);
 const[page,setPage]=useState(1);
 const[totalResults,setTotalResults]=useState(0);
 
  const capitalized=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const updateNews=async ()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json()
    console.log(parsedData);
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }


  useEffect(()=>{
     document.title=`${capitalized(props.category)}-NewsMonkey`;
   updateNews();
   //eslint.disable-next-line
  },[]);


  const fetchMoreData = async ()=>{
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    // setLoading(false);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }
    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px',marginTop:'90px' }}>NewsWave - Top {capitalized(props.category)}   Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={loading&&<Spinner/>}
        >
          <div className="container">
        <div className='row'>
          { articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 48) : ""} description={element.description ? element.description.slice(0, 95) : ""} imageUrl={element.urlToImage?element.urlToImage:"https://img.etimg.com/thumb/msid-101129055,width-1070,height-580,imgsize-68964,overlay-etmarkets/photo.jpg"} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source} />
            </div>
          })}
          </div>
          </div>
          </InfiniteScroll>
        </>
    )
  }
News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: 'general'
  }
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
export default News
