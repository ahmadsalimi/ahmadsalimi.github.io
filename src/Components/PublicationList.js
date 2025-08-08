import React, { Component } from 'react';
import Publication from './Publication';

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
            <div className="col-12 col-lg-8">
              {publications && publications.map((publication, pubIndex) => (
                <Publication 
                  key={publication.arxiv_url || pubIndex}
                  publication={publication}
                  pubIndex={pubIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PublicationList;
