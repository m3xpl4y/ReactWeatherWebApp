import { func } from 'prop-types';
import React, { Component, useCallback, useState } from 'react';
import './App.css';
import MainWeatherCard from './components/MainWeatherCard';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';



function App(){
  const [location, setLocation] = useState();

  const setLocationState = useCallback(val => {
    setLocation(val);

  }, [setLocation]);
  return (
        <div className="App">
            <SearchInput locationSetter={setLocationState}/>
            <WeatherCard location={location}/>
        </div>        
    );}

export default App;