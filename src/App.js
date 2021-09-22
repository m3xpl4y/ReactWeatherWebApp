import { func } from 'prop-types';
import React, { Component, useCallback, useState } from 'react';
import './App.css';
import MainWeatherCard from './components/MainWeatherCard';
import SearchInput from './components/SearchInput';



function App(){
  const [location, setLocation] = useState();

  const setLocationState = useCallback(val => {
    setLocation(val);

  }, [setLocation]);

  return (
        <div className="App">
            <SearchInput locationSetter={setLocationState}/>
            <div>{location}</div>
            <MainWeatherCard/>
        </div>
    );}


export default App;