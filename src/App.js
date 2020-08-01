import React, { useEffect } from 'react'
import './App.css'
import Header from './Header/Header'
import MainBlock from './components/MainBlock/MainBlock'
import Bottom from './components/Bottom/Bottom'
import { BrowserRouter, Route } from 'react-router-dom'
import HouseListContainer from './components/HouseList/HouseListContainer'
import Contacts from './components/Contacts/Contacts'
import ScrollToTheTop from './components/ScrollToTheTop'

const App = () => {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTheTop />
      <Header />
      <div className="field"></div>
      <Route path='/main' component={MainBlock} />
      <Route path='/houses' component={HouseListContainer} />
      <Route path='/contacts' component={Contacts} />
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
