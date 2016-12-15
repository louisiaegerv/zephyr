import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../style/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">        

       <div id="header">
          <ul>
            <a href="#"><li className="li underline">About</li></a>
            <a href="#"><li className="li underline">Work</li></a>
            <a href="#"><li className="li underline">Team</li></a>
            <a href="#"><li className="li underline">Contact</li></a>
          </ul>
        </div>
       
        <div id="jumbotron" className="container">
          <h1>We are Zephyr</h1>
          <a className="button shutter-out" href="">Get rockin</a>
          <a className="downBtn" href="#content"><img src={require('../img/downButton.png')} alt="Test" /></a>
        </div>

        <div id="content" className="container">

          <div id="col1" className="col">
            <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg" />
            <h2>Design</h2>
            <p>Make your projects look great and interact beautifully</p>
            <a href="" className="btn-secondary">Learn More</a>
          </div>

          <div id="col2" className="col">
            <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg" />
            <h2>Develop</h2>
            <p>Use modern tools to turn your design into a web site</p>
            <a href="" className="btn-secondary">Learn More</a>
          </div>

          <div id="col3" className="col">
            <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg" />
            <h2>Deploy</h2>
            <p>Make your site available to the world with ease</p>
            <a href="" className="btn-secondary">Learn More</a>
          </div>
        </div>

        <div id="footer" className="container">
          <div className="copyright">
            <p>© ZEPHYR 2016</p>
          </div>
          <div className="creator">
            <pre>Coded with   ♥    by Louis Iaeger V</pre>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
