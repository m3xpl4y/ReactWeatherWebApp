import React, { Component } from 'react';
import './App.css';
import MainWeatherCard from './components/MainWeatherCard';
import SearchInput from './components/SearchInput';

function App() {
  return (
      <div className="App">
          <SearchInput/>
          <MainWeatherCard/>
      </div>
  );
}

export default App;