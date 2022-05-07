
import React, { Component } from 'react'

export class NewItem extends Component {

  getGMTDate=(date)=>{
      date=new Date(date).toGMTString();
      return date;
  }

  render() {
    let {title,description,imageUrl,url,name,date,author}=this.props;
    return (
      <div>
          <div className="card">
                <img className="card-img-top" src={imageUrl} alt="News card"/>
                <div className="card-body">
                    <h5 className="card-title">{title}-{name?"Unkown":name}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By-{!author?"Unknown":author}-{this.getGMTDate(date)}</small></p>
                    <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark text-light">Read More</a>
                </div>            
          </div>
      </div>
    )
  }
}

export default NewItem