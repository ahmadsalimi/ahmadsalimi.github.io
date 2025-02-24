import React, { Component } from 'react';

class PublicationList extends Component {
  render() {
    if (this.props.data) {
      var publications = this.props.data.publications;
    }

    return (
      <section id="publications" className="home-section wg-pages">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 section-heading">
              <h1>Publications</h1>
            </div>
            {publications && publications.map((publication) => {
              return (
                <div key={publication.arxiv_url} className="col-12 col-lg-8">
                  <div className="card-simple">
                    <div className="article-metadata">
                      <div>
                        {publication.authors.map((author, index) => {
                          return (
                            <span key={author.name}>
                              <a key={author.name} href={author.url} target="_blank" rel="noopener">{author.name}</a>
                              {index < publication.authors.length - 1 && <span>, </span>}
                            </span>
                          )
                        })}
                      </div>
                      <span className="article-date">
                        {publication.date}
                      </span>
                      <span className="middot-divider"></span>
                      <span className="pub-publication">
                        {publication.publisher}
                      </span>
                    </div>
                    <a href={publication.publication_webpage} target="_blank" rel='noopener'>
                      <img src={publication.image_url} className="article-banner" alt={publication.title} />
                    </a>
                    <h3 className="article-title mb-1 mt-3">
                      <a href={publication.publication_webpage} target="_blank" rel='noopener'>{publication.title}</a>
                    </h3>
                    <div className="article-style">
                      <p>{publication.abstract}</p>
                    </div>
                    <div className="btn-links">
                      <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href={publication.publication_webpage} target="_blank" rel="noopener">
                        <i className="fa-brands fa-chrome"></i> Webpage
                      </a>
                      <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href={publication.pdf_url} target="_blank" rel="noopener">
                        <i className="fas fa-file-pdf"></i> Paper
                      </a>
                      <a className="btn btn-outline-primary my-1 mr-1 btn-sm" href={publication.arxiv_url} target="_blank" rel="noopener">
                        <i className="fas fa-external-link-alt"></i> arXiv
                      </a>
                      <button type="button" className="btn btn-outline-primary my-1 mr-1 btn-sm js-cite-modal"
                        data-filename={publication.bib_file}>
                        <i className="fas fa-quote-right"></i> Cite
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section >
    );
  }
}

export default PublicationList;
