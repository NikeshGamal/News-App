import React, { Component } from 'react'
import NewItem from './NewItem'


export class News extends Component {
articles=[];
  
  constructor(){
    super();
    console.log("This is constructor");
    this.state={
        articles:this.articles,
        loading:false
    }
 }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=8c0b533eceae4136bfb180b1fe06f3a1";
    try{
       let data=await fetch(url);
       let parsedData=await data.json();
       console.log(parsedData);
       this.setState({articles:parsedData.articles});
    }catch{
            alert("Error! Problem in fetching data");
    }
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
                         <NewItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url}/>
                      </div>
                       })}   
                  </div>
               </div>
          </div>
          </>
    )
  }
}

export default News