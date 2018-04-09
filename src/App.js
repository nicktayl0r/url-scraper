import React, { Component } from 'react';

import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: ""
    }
  }
  acquireContent = () => {
    console.log('hello')
    this.setState(({article: this.state.article+ 1}))
  }
  componentDidMount() {
    console.log('Compnent has mounted');
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome, Please enter the URL of a web article to begin</h1>
        
        
          <input type="text"/>
          <input onClick={() => this.acquireContent()} type="submit" value="Submit"></input>  
        
        <div>
          {this.state.article}
        </div>

      </div>
    );
  }
}

export default App;
