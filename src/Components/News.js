import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
 articles=[];
  staticUrl="https://cdn.cnn.com/cnnnext/dam/assets/211216050324-jnj-vaccine-file-1215-super-tease.jpg";

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super();
    console.log("This is constructor");
    this.state={
        articles:this.articles,
        loading:false,
        page:1,
        totalResults:0
    }
    console.log(this.state.page);
    document.title=`${this.capitalizeFirstLetter(props.category)}- NewsMonkey`;
 }


   updateNews= async(page)=>{
    const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    try{
      this.setState({loading:true});
       let data= await fetch(url);
       let parsedData= await data.json();
       console.log(parsedData);
       this.setState({
              articles:parsedData.articles,
              totalResults: parsedData.totalResults,
              pageSize:20,
              loading:false
            });
    }catch{
            alert("Error! Problem in fetching data");
    }
   }

  async componentDidMount(){
         this.setState({
           page:this.state.page+1
       });
    
      this.updateNews(this.state.page);
  } 

  // handlePrevPage=async ()=>{
  //   this.setState({
  //     page:this.state.page-1
  // });

  // this.updateNews(this.state.page);
  // }

  // handleNextPage=async ()=>{
  //   console.log(this.state.page);
  //   this.setState({
  //     page:this.state.page+1
  // });
  // console.log(this.state.page);
  //   this.updateNews(this.state.page);
  // }


  fetchMoreData = async() => {
    this.setState({
      page:this.state.page+1
  });
    
      const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    try{
       let data= await fetch(url);
       let parsedData= await data.json();
       this.setState({
              articles:this.state.articles.concat(parsedData.articles),
              totalResults: parsedData.totalResults,
              loading:false
            });
    }catch{
            alert("Error! Problem in fetching data");
    }
   
    console.log(this.state.page);
  };

  render() {
    return (
           <div className="container">
            
           <h1 className='my-3 my-4 text-center'>News Monkey- Your Daily Dose of News</h1>
             {this.state.loading && <Spinner/>}
             <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
              >
                <div>
                   <div className="row">
                       {this.state.articles.map((element)=>{
                         return <div className="col-md-4 my-3" key={element.url}>
                            <NewItem title={element.title?element.title:null} description={element.description?element.description.slice(0,145):null} imageUrl={element.urlToImage?element.urlToImage:this.staticUrl} url={element.url} name={element.name} date={element.publishedAt} author={element.author}/>
                               </div>
                       })}   
                  </div>
               </div>
               </InfiniteScroll>
               {/* <div className='container d-flex justify-content-between mb-4'>
                    <button disabled={this.state.page<=1} onClick={this.handlePrevPage} type="button" className="btn btn-dark"> &larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNextPage} type="button" className="btn btn-dark px-4 ">Next &rarr;</button>
               </div> */}
          </div>
    )
  }
}

export default News