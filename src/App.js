import React,{Component} from 'react';
import './css/App.css';
import Hero from "./Hero";
import Footer from "./Footer";
import Nav from "./Nav";
import Content from "./Content";
import Button from "./Button";

class App extends Component {
  render() {
      return ( 
          <div className = "App" >
            <Hero>
              <Nav/>
              <Content/>
              <Button/>
            </Hero>
            
            <Footer/>
          </div >
      );
  }
}

export default App;
