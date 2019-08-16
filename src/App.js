/**
 * Article.js: Renders article component
 * Author: Neeraj
 */

// imports Module

import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import News from './components/news/News';
import TechNews from "./components/news/TechNews";
import ProgrammingNews from "./components/news/ProgrammingNews";
import BusinessNews from "./components/news/BusinessNews"; 
import Header from './components/news/Header';
import Reddit from "./components/reddit/Reddit";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render () {

    // returns JSx 
    return (
      <div className="App">

          <Header />
          <Switch>
            
            <Route exact path="/" component={News} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/tech" component={TechNews} />
            <Route exact path="/news/programming" component={ProgrammingNews} />
            <Route exact path="/news/business" component={BusinessNews} />
            <Route path="/reddit" component={Reddit} />

          </Switch>

      </div>
    );
  }
}

// exports component

export default App;
