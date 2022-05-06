import React, { Component } from 'react'
import NewItem from './NewItem'


export class News extends Component {
 articles=[];
  staticUrl="https://cdn.cnn.com/cnnnext/dam/assets/211216050324-jnj-vaccine-file-1215-super-tease.jpg";
  constructor(){
    super();
    console.log("This is constructor");
    this.state={
        articles:this.articles,
        loading:false,
        page:1
    }
 }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c0b533eceae4136bfb180b1fe06f3a1&page=1";
    try{
       let data=await fetch(url);
       let parsedData=await data.json();
       console.log(parsedData);
       this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults,pageSize:20});
    }catch{
            alert("Error! Problem in fetching data");
    }
  } 

  handlePrevPage=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=8c0b533eceae4136bfb180b1fe06f3a1https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c0b533eceae4136bfb180b1fe06f3a1&page=${this.state.page - 1}&pageSize=20`;
    try{
       let data=await fetch(url);
       let parsedData=await data.json();
       this.setState({articles:parsedData.articles});
       this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
    });
    }catch{
            alert("Error! Problem in fetching data");
    }
  }

  handleNextPage=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8c0b533eceae4136bfb180b1fe06f3a1&page=${this.state.page +1}&pageSize=20`;
    try{
       let data=await fetch(url);
       let parsedData=await data.json();
       this.setState({articles:parsedData.articles});
       this.setState({
        page:this.state.page + 1,
        articles:parsedData.articles,
    });
    }catch{
            alert("Error! Problem in fetching data");
    }  console.log("Next");
  }

  render() {
    return (
          <>
           <div className="container">
           <h1 className='my-3'>News Monkey- Your Daily Dose of News</h1>
                <div>
                   <div className="row">
                       {this.state.articles.map((element)=>{
                         return<div className="col-md-4 my-3" key={element.url}>
                         <NewItem title={element.title?element.title.slice(0,80):null} description={element.description?element.description.slice(0,120):null} imageUrl={element.urlToImage?element.urlToImage:this.staticUrl} url={element.url}/>
                      </div>
                       })}   
                  </div>
               </div>
               <div className='container d-flex justify-content-between mb-4'>
                    <button disabled={this.state.page<=1} onClick={this.handlePrevPage} type="button" className="btn btn-secondary"> &larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNextPage} type="button" className="btn btn-secondary px-4 ">Next &rarr;</button>
               </div>
          </div>
          </>
    )
  }
}

export default News