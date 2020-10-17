import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props) 
    this.state = {  
      quote: ''
    }
    this.handleClick = this.handleClick.bind(this)
  } 
  
  async componentDidMount() {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({data}) 
    this.setState({quote: this.state.data.quotes[Math.floor(Math.random() * this.state.data.quotes.length)]})
  }  
       
  handleClick() {
     this.setState({quote: this.state.data.quotes[Math.floor(Math.random() * this.state.data.quotes.length)]})
    console.log(this.state)
  }
  getAuthor() { 
    
  }    
  render() { 
    return (
      <div>
        <div id="text">{this.state.quote.quote}</div>  
        <div id="author">-{this.state.quote.author}</div>
        <div id= "#buttons">
          <button className="buttons" id="new-quote" onClick={this.handleClick}>New Quote</button>
          <a className="button buttons" href="twitter.com/intent/tweet" id="tweet-quote"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    )
  } 
}
 
export default App;
