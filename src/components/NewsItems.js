import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {

    // so here "this" is a keyword which is used in class based component and here this.props is treated as an object where we can use it's elements/keys... and we can describe it or give some value in correspondingly
    let {title, description, imgUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "20rem"}}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "95%",zIndex: "1"}}>
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body" style={{backgroundColor: this.props.mode === "dark" ? "#212529": "#f8f9fA", color: this.props.mode === "dark" ? "white": "black"}}>
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author == null ? "Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
