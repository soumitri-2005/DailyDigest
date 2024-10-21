import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defultProps = {
    country: "us",
    pageSize: 21,
    category: "science",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  // here i am accessing the initial states as we do in class based component
  constructor() {
    super(); //super is neccessary
    // here this is treated as object
    this.state = {
      // here i made a empty array which will updated by API
      articles: [],
      loading: false,
      // page is for next page information
      page: 1,
    }
  }
  // another method to update
  async updatenews() {
    // here i am setting the initial top loader to 10
    this.props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d420023142f491796a3eaa6ff857d95&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true,
    });
    let data = await fetch(URL);
    // and after fetching the data it will be 30
    this.props.setProgress(30);
    let parseData = await data.json();
    // then 70
    this.props.setProgress(70);
    // here i am setting information present in the api in to the articles array
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false,
    })
    // after the complition of whole process it will be 100
    this.props.setProgress(100);
  }
  async componentDidMount() {
    // // here i am using the API 
    // let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d420023142f491796a3eaa6ff857d95&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading:true,
    // });
    // let data = await fetch(URL);
    // let parseData = await data.json();
    // // here i am setting information present in the api in to the articles array
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading:false,
    // })
    this.updatenews();
  };

  handlePreviousClick = async () => {
    // let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d420023142f491796a3eaa6ff857d95&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading:true,
    // });
    // let data = await fetch(URL);
    // let parseData = await data.json();   
    // this.setState({
    //   // here i am updating the page
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false,
    // });
    // otherwise we can do this
    this.setState({
      page: this.state.page + 1,
    })
    this.updatenews();
  };
  handleNextClick = async () => {
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6d420023142f491796a3eaa6ff857d95&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading:true,
    //   });
    //   let data = await fetch(URL);
    //   let parseData = await data.json();   
    //   this.setState({
    //     // here i am updating the page
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false,
    //   });
    // }
    // otherwise we can do this
    this.setState({
      page: this.state.page + 1,
    })
    this.updatenews();
  };

  render() {
    return (
      <div className="container my-3" style={{color: this.props.mode === "dark" ? "white": "black"}}>
        {/* here i am using my props */}
        <h2 className="text-center" style={{marginTop:"75px", marginBottom: "20px"}}><b>DailyDigest - Top {this.props.category} Headlines</b></h2>
        {/* this syntax says that whenever the loading is true show the spinner otherwise not */}
        {this.state.loading && <Spinner/>}
        {/* in bootstrap if we give a class name called row to a div/any other... then it will arrange it rowly by the help of md-3/4/5/6..... */}
        <div className="row">
          {/* so here i am accessing the atricles objects bcz we have to show it in different newsitem */}
          {/* here i am using the map() it will return individual divs in form of NewsItems */}
          {!this.state.loading && this.state.articles.map((element) => {
            // key is neccessary bcz of uniqueness and here in articles an unique key is url
            return <div className="col-md-4" key={element.url}>
              {/* here we used ternary operator bcz some title or description maybe null */}
              <NewsItems mode={this.props.mode} title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 95) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn btn-primary" type="button" onClick={this.handlePreviousClick} >&larr; Privious</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-outline-primary" type="button" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
