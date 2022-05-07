import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';


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


   updateNews= async(page)=>{
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
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
          page:this.state.page
      });

      this.updateNews(this.state.page);
  } 

  handlePrevPage=async ()=>{
    this.setState({
      page:this.state.page-1
  });

  this.updateNews(this.state.page);
  }

  handleNextPage=async ()=>{
    this.setState({
      page:this.state.page+1
  });

  this.updateNews(this.state.page);
  }


   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
          <>
           <div className="container">
             {document.title=this.capitalizeFirstLetter(this.props.category)+" - NewsMonkey"}
           <h1 className='my-3 my-4 text-center'>News Monkey- Your Daily Dose of News</h1>
             {this.state.loading && <Spinner/>}
                <div>
                   <div className="row">
                       { !this.state.loading && this.state.articles.map((element)=>{
                         return <div className="col-md-4 my-3" key={element.url}>
                            <NewItem title={element.title?element.title:null} description={element.description?element.description.slice(0,145):null} imageUrl={element.urlToImage?element.urlToImage:this.staticUrl} url={element.url} name={element.name} date={element.publishedAt} author={element.author}/>
                               </div>
                       })}   
                  </div>
               </div>
               <div className='container d-flex justify-content-between mb-4'>
                    <button disabled={this.state.page<=1} onClick={this.handlePrevPage} type="button" className="btn btn-dark"> &larr; Previous</button>
                    <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNextPage} type="button" className="btn btn-dark px-4 ">Next &rarr;</button>
               </div>
          </div>
          </>
    )
  }
}

export default News