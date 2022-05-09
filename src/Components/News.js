import React , {useState,useEffect}from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



const News= (props)=> {
   
   let [articles, setArticles] = useState([]);
   let [loading, setLoading] = useState(true);
   let [page, setPage] = useState(1);
   let [totalResults, setTotalResult] = useState(0);
   
  const staticUrl="https://cdn.cnn.com/cnnnext/dam/assets/211216050324-jnj-vaccine-file-1215-super-tease.jpg";

  const capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews= async()=>{
    const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    try{
       setLoading({loading:true});
       let data= await fetch(url);
       let parsedData= await data.json();
       setArticles(parsedData.articles);
       setTotalResult(parsedData.totalResults);
       setPage(page+1);
       setLoading(false);

    }catch{
            alert("Error! Problem in fetching data");
    }
   }

   useEffect(() => {
     return () => {
       setPage(page+1);
        updateNews(page);
     }
   }, [])
     

  // handlePrevPage=async ()=>{
  //   this.setState({
  //     page:page-1
  // });

  // this.updateNews(page);
  // }

  // handleNextPage=async ()=>{
  //   console.log(page);
  //   this.setState({
  //     page:page+1
  // });
  // console.log(page);
  //   this.updateNews(page);
  // }

     
      const fetchMoreData = async() => {
             setPage(page+1);
              const url= `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
                  try{
                     let data= await fetch(url);
                     let parsedData= await data.json();
                     setArticles(articles.concat(parsedData.articles));
                     setTotalResult(parsedData.totalResults);
                     setLoading(false);
                  }catch{
                          alert("Error! Problem in fetching data");
                  }
       };
     
    return (
           <div className="container">
           <h1 className='my-3 my-4 text-center'>News Monkey- Your Daily Dose of News</h1>
             {loading && <Spinner/>}
             <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
              > 
              
                <div>
                   <div className="row">
                       {articles.map((element)=>{
                         return <div className="col-md-4 my-3" key={element.url}>
                            <NewItem title={element.title?element.title:null} description={element.description?element.description.slice(0,145):null} imageUrl={element.urlToImage?element.urlToImage:staticUrl} url={element.url} name={element.name} date={element.publishedAt} author={element.author}/>
                               </div>
                       })}   
                  </div>
               </div>
               </InfiniteScroll>
               {/* <div className='container d-flex justify-content-between mb-4'>
                    <button disabled={page<=1} onClick={this.handlePrevPage} type="button" className="btn btn-dark"> &larr; Previous</button>
                    <button disabled={page+1>Math.ceil(totalResults/pageSize)} onClick={this.handleNextPage} type="button" className="btn btn-dark px-4 ">Next &rarr;</button>
               </div> */}
          </div>
    )
}

export default News