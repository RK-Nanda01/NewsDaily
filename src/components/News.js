import React, {useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';




const News = (props)=>{
    
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(false)
    const pageSize = props.pageSize
    
    
    const fetchData = async ()=>{

        setLoading(true)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=${pageSize}&page=${page}` 
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        
    }

    useEffect(()=>{
        document.title = ` ${capitalizeFirstLetter(props.category)} - NewsDaily`
        fetchData()
    }, []);


    // const nextData = async ()=>{

    //     setPage(page + 1)
    //     fetchData();

    // }

    // const prevData = async ()=>{

    //     setPage(page - 1)
    //     fetchData();

    // }


    
  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fetchMoreData = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=${pageSize}&page=${page+1}` 
    setPage(page+1)
      
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);



    
  };

    

    return(
        <>
        <div className = "container">
            <h1 className= "  text-center" style = {{marginTop : '90px'}}>Top {capitalizeFirstLetter(props.category)} Headlines Today!</h1>
            {loading && <Spinner/>}
            
            <InfiniteScroll 
                dataLength={articles.length} 
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}>

                <div className="row my-4">
                {articles.map((element)=>{
                    return ( 
                        <div className="col md-4 my-3">
                        <NewsItem 
                        title = {element.title} 
                        description = {element.description} 
                        imgUrl = {element.urlToImage}
                        author = {element.author}
                        date = {element.publishedAt}
                        url = {element.url} 
                        source = {element["source"]["name"]}
                        />
                    </div>
                    )
                    })}
                </div>

            </InfiniteScroll>

            {/* <div className="d-flex justify-content-between pb-3">
                <button type="button" disabled = {page<=1} className="btn btn-dark p-2" onClick={prevData} >&larr; Previous</button>
                <button type="button" disabled = {(page+1) > Math.ceil(totalResults/pageSize)} className="btn btn-dark ml-auto p-2" onClick={nextData} >Next &rarr;</button>
            </div> */}

        </div>
        </>
    )


}

export default News;