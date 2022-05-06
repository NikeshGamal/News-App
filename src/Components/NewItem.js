
import React, { Component } from 'react'

export class NewItem extends Component {

  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
      <div>
          <div className="card">
                <img className="card-img-top" src={imageUrl} alt="News card"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>            
          </div>
      </div>
    )
  }
}

export default NewItem