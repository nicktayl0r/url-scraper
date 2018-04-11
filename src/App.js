import React, { Component } from 'react';

import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: "null",
      paragraphs: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  killParagraph = (index) => {
    console.log(index)
    
    this.setState({
      paragraphs: this.state.paragraphs.filter((_, i) => i !== index)
    });
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
        let paragEl = el.getElementsByTagName('p');
        let textArray = [];
        for(let par in paragEl) {
          let p = paragEl[par].innerText
          if( p && (p.includes('.')|| p.includes('!') || p.includes('?'))){
            textArray.push(p);
          }
        }
        this.setState({paragraphs: textArray})
        console.dir(textArray)  
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
        <Paragraphs paragraphs={this.state.paragraphs} 
                    killParagraph={this.killParagraph}
        />
      </div>
    );
  }
}

const Paragraphs = (props) => {
  let parags = props.paragraphs.map((name, index) =>
    <div className="ptags__elem" key={ index }>
      <button className="ptags__elem__remove" onClick={() => props.killParagraph(index)}>
        <i className="fas fa-times "></i>
      </button>
      {name}
    </div>
  )

  return (
    <div className="ptags">
      {parags}
    </div>
  )
}
export default App;