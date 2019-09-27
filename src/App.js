import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TopicPage from "./pages/TopicPage";
import ThreadPage from "./pages/ThreadPage"




const App = ()=> {

  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <BrowserRouter>
        <Switch>

            <Route exact path="/topics/:topicId/threads" component={ThreadPage}/>
            <Route exact path='/topics' component={TopicPage} />

        </Switch>
        </BrowserRouter>
        <fetchCategories/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
