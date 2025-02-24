import React, { Component } from 'react';

class SearchResults extends Component {
   render() {

      return (
         <aside className="search-results" id="search">
            <div className="container">
               <section className="search-header">

                  <div className="row no-gutters justify-content-between mb-3">
                     <div className="col-6">
                        <h1>Search</h1>
                     </div>
                     <div className="col-6 col-search-close">
                        <a className="js-search" href="#home"><i className="fas fa-times-circle text-muted" aria-hidden="true"></i> </a>
                     </div>
                  </div>
                  <div id="search-box">
                     <input name="q" id="search-query" placeholder="Search..." autoCapitalize="off"
                        autoComplete="off" autoCorrect="off" spellCheck="false" type="search" />
                  </div>
               </section>
               <section className="section-search-results">
                  <div id="search-hits">
                  </div>
               </section>
            </div>
         </aside>
      );
   }
}

export default SearchResults;
