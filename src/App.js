import React from 'react';
import './App.css';
import { Switch, Route , Redirect} from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homePage/homePage';
import ProductPage from './pages/productPage/productPage';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/product/:slug' component={ ProductPage }/>
      </Switch>
    </>
  );
}

export default App;
