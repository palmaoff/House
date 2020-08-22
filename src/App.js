import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock'
import Bottom from './components/Bottom/Bottom'
import { BrowserRouter,Route } from 'react-router-dom'
import HouseListContainer from './components/HouseList/HouseListContainer'
import Contacts from './components/Contacts/Contacts'
import Maps from './components/Maps/Maps'
import ScrollToTheTop from './components/ScrollToTheTop'

const App = () => {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0,0)}>
      <ScrollToTheTop />
      <Header />
      <div className="field"></div>
      <Route exact path='/'
        render={() =>
          <>
            <MainBlock />
            <Maps />
            <Contacts />
          </>
        } />
      <Route path='/houses' component={HouseListContainer} />
      <Route path='/contacts' component={Contacts} />
      <Bottom />
    </BrowserRouter>
  );
}

export default App;
