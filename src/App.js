import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock'
import Bottom from './components/Bottom/Bottom'
import { BrowserRouter, Route } from 'react-router-dom'
import HouseListContainer from './components/HouseList/HouseListContainer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="field"></div>
      <Route path='/main' component={MainBlock}/>
      <Route path='/houses' component={HouseListContainer}/>
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
