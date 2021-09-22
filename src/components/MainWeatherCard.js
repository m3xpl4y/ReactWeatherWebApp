import React, { Component } from 'react';
import './MainWeatherCard.modules.css';

export default class MainWeatherCard extends Component{
    
    constructor(props){
        super(props)
        this.state = {location: ""};
    };
    render(){
        this.fetchData();
        return(
        <div className="main-container">
            <div >
                <h1 id="stadtname"></h1>
                <div id="icon"></div>
                <h1>Hello World!</h1>
            </div>
        </div>
        )    
    }
        
   
    fetchData = () => {
        return fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.props.location+"&units=metric&lang=de&appid=8e3ad4a03522edcad4c7c354ce9c44a8")
        .then((response) => response.json())
        .then(function (data){
          let city = data.name;

          let stadtName = "";
          let temp = parseInt(data.main.temp, 10);
          let weather_icon = data.weather[0].icon;
          stadtName += data.name + " " + temp + "°C";
          let link = "<img src='http://openweathermap.org/img/wn/";
          let magnify = "@2x.png'>"
          document.getElementById("icon").innerHTML = link + weather_icon + magnify;
          document.getElementById("stadtname").innerHTML = stadtName;
        })};
  }
  
  