import React, { Component } from 'react';

import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "null"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({data: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    try
    {
        xhr.open("GET", this.state.data, true);
        xhr.onload = () => {
           let response = xhr.responseText;
           let el = document.createElement('html');
           el.innerHTML = response;
           
           let component = el.getElementsByTagName('p');
           console.dir(component);
            // component.innerHTML = xhr.responseText;
        }
        xhr.send();
    }
    catch (e) {
        console.dir("Unable to load the requested file.");
    }
  }

  componentDidMount() {
    console.log('Compnent has mounted');
  }

  render() {
    return (
      <div className="App">
      <h1>Welcome, Please enter the URL of a web article</h1>
        
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text"/>
          <input type="submit" value="Submit"></input>  
        </form>

        

      </div>
    );
  }
}

export default App;
