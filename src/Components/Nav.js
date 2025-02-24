import React, { Component } from 'react';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }

  render() {

    const show = (this.state.menu) ? "show" : "" ;

    if(this.props.data){
      var name = this.props.data.name;
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light compensate-for-scrollbar" id="navbar-main">
        <div className="container">
          <div className="d-none d-lg-inline-flex">
            <a className="navbar-brand" href="/">{name}</a>
          </div>
{/* 
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
            <span className="navbar-toggler-icon"></span>
          </button>

          <button type="button" class="navbar-toggler" data-toggle="collapse"
            data-target="#navbar-content" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span><i class="fas fa-bars"></i></span>
          </button> */}

          <button type="button" className="navbar-toggler" onClick={ this.toggleMenu }>
            <span><i className="fas fa-bars"></i></span>
          </button>

          <div className="navbar-brand-mobile-wrapper d-inline-flex d-lg-none">
            <a className="navbar-brand" href="/">{name}</a>
          </div>
          <div className={"navbar-collapse main-menu-item collapse justify-content-start " + show}>
            <ul className="navbar-nav d-md-inline-flex">
              <li className="nav-item">
                <a className="nav-link " href="/#about"
                data-target="#about"
                ><span>Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#news"
                data-target="#news"
                ><span>News</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#publications"
                data-target="#publications"
                ><span>Publications</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/#experience"
                data-target="#experience"
                ><span>Experience</span></a>
              </li>
            </ul>
          </div>
          <ul className="nav-icons navbar-nav flex-row ml-auto d-flex pl-md-2">
            <li className="nav-item">
              <a className="nav-link js-search" href="#search" aria-label="Search"><i className="fas fa-search" aria-hidden="true"></i> </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
