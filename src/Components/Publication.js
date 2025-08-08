import React, { Component } from 'react';

class Publication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.abstractTruncateLength = 200;
  }

  toggleAbstract = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render() {
    const { publication } = this.props;
    const { isExpanded } = this.state;
    const shouldTruncate = publication.abstract && publication.abstract.length > this.abstractTruncateLength;
    
    // Create a unique ID for scrolling to publication
    const publicationId = `publication-${publication.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;

    return (
      <div id={publicationId} className="mb-4">
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
          {publication.image_url && publication.video_url ? (
            <a href={publication.publication_webpage} target="_blank" rel='noopener'>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                <img 
                  src={publication.image_url} 
                  className="article-banner" 
                  alt={publication.title} 
                  style={{ flex: '1', maxWidth: '50%' }}
                />
                <video 
                  className="article-banner" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  style={{ flex: '1', maxWidth: '50%', height: 'auto' }}
                >
                  <source src={publication.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </a>
          ) : publication.video_url ? (
            <a href={publication.publication_webpage} target="_blank" rel='noopener'>
              <video 
                className="article-banner" 
                autoPlay 
                muted 
                loop 
                playsInline 
                style={{ width: '100%', height: 'auto' }}
              >
                <source src={publication.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </a>
          ) : publication.image_url ? (
            <a href={publication.publication_webpage} target="_blank" rel="noopener">
              <img src={publication.image_url} className="article-banner" alt={publication.title} />
            </a>
          ) : null}
          <h3 className="article-title mb-1 mt-3">
            <a href={publication.publication_webpage} target="_blank" rel='noopener'>{publication.title}</a>
          </h3>
          <div className="article-style">
            <div 
              style={{
                overflow: 'hidden',
                transition: 'max-height 0.4s ease-in-out',
                maxHeight: isExpanded || !shouldTruncate ? '1000px' : '6em'
              }}
            >
              <p style={{ 
                marginBottom: '1rem',
                transition: 'opacity 0.2s ease',
                opacity: 1
              }}>
                {publication.abstract}
              </p>
            </div>
            {shouldTruncate && (
              <div style={{
                position: 'relative',
                marginTop: '-1rem',
                paddingTop: '1rem',
                background: isExpanded ? 'transparent' : 'linear-gradient(transparent, white 50%)',
                pointerEvents: 'none',
                height: isExpanded ? '0' : '2em',
                transition: 'height 0.4s ease-in-out, background 0.4s ease-in-out'
              }}>
              </div>
            )}
            {shouldTruncate && (
              <button 
                className="btn btn-sm btn-outline-info" 
                onClick={this.toggleAbstract}
                style={{ 
                  borderRadius: '20px',
                  fontSize: '0.85em',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  marginTop: '4px',
                  marginBottom: '12px'
                }}
              >
                <i 
                  className="fas fa-chevron-down mr-1"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block'
                  }}
                ></i>
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
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
    );
  }
}

export default Publication;
