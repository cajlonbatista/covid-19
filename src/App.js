import React from 'react';
import './App.css';
import "./App.less";
import Menu from "./Menu";
import {BrowserRouter} from "react-router-dom"
import Routes from './routes';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
        <Menu></Menu>
        <Routes></Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
