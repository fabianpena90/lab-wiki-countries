import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar'
import CountryDetails from './components/CountryDetails'
import CountriesList from './components/CountriesList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountriesList />
      <Switch>
        <Route exact path="/countries/:id" render={(props) => <CountryDetails {...props} />} />
      </Switch>
      
    </div>
  );
}

export default App;
