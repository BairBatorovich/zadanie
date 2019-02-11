import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {BrowserRouter,Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="App">
        <div className="Header"><Header/></div>
        <div className="Sidebar"><Sidebar/></div>
        <div className="Body"><Body/></div>
        <div className="Footer"><Footer/></div>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
