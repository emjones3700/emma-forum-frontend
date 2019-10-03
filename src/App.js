import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TopicPage from "./pages/TopicPage";
import ThreadListPage from "./pages/ThreadListPage"
import LoginPage from "./pages/LoginPage";
import ThreadPage from './pages/ThreadPage';
import SignUpPage from './pages/SignUpPage';
import MakePost from './pages/MakePost';
import MakeThread from './pages/MakeThread';


const App = ()=> {

  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <BrowserRouter>
        <Switch>
            <Route exact path='/topics/:topicId/makethread' component={MakeThread} />
            <Route exact path='/' component={LoginPage} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path="/topics/:topicId/threads/" component={ThreadListPage}/>
            <Route exact path="/topics/:topicId/threads/:id" component={ThreadPage}/>
            <Route exact path='/topics' component={TopicPage} />
            <Route exact path='/topics/:topicId/threads/:id/makepost' component={MakePost} />
            
        </Switch>
        </BrowserRouter>
       
      <Footer/>
      </header>
    </div>
  );
}

export default App;
