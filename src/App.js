import React, { Component, useEffect } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import SearchResults from './Components/SearchResults';
import Nav from './Components/Nav';
import Modal from './Components/Modal';
import PublicationList from './Components/PublicationList';
import Experience from './Components/Experience';
import News from './Components/News';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1', { testMode: process.env.NODE_ENV === 'test' });
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <SearchResults />
        <Nav data={this.state.resumeData.main} />
        <span className="js-widget-page d-none"></span>
        <About data={this.state.resumeData.main} />
        <News data={this.state.resumeData.main} />
        <PublicationList data={this.state.resumeData.main} />
        <Experience data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        <Modal />
      </div>
    );
  }
}

export default App;
