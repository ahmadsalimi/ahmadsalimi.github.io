import React, { Component } from 'react';

class News extends Component {
  render() {
    if (this.props.data) {
      var news = this.props.data.news;
    }

    return (
      <section id="news" className="home-section wg-news"  >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 section-heading">
              <h1>News</h1>
            </div>
            <div className="col-12 col-lg-8">
              {news && news.map((news_item, index) => (
                <div key={index} className="row experience">
                  <div className="col-auto text-center flex-column d-none d-sm-flex">
                    <div className="row h-50" style={{fontSize: '0.5rem'}}>
                      <div className={"col" + (index > 0 ? " border-right" : "")}>&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                    <div className="m-2">
                      <span className="badge badge-pill border ">&nbsp;</span>
                    </div>
                    <div className="row h-50" >
                      <div className={"col" + (index < news.length - 1 ? " border-right" : "")}>&nbsp;</div>
                      <div className="col">&nbsp;</div>
                    </div>
                  </div>
                  <div className="col py-1">
                    <div className="card-simple py-2">
                      <div className="article-metadata mb-1">
                        <span className="article-date">
                          {news_item.date}
                        </span>
                      </div>
                      <div className="article-style">
                        <p className='my-0' dangerouslySetInnerHTML={{ __html: news_item.title }}></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
