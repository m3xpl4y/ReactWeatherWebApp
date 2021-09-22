import React, { Component } from 'react';
import './MainWeatherCard.modules.css';
import { FaWind } from "react-icons/fa";

export default class MainWeatherCard extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            location: ""};
    };
    render() {
        this.fetchData();
        return (
            <div>
                <div class="divTable">
                    <div class="divTableBody">
                        <div class="divTableRow">
                            <div class="divTableCell" id="stadtname"></div>
                            <div class="divTableCell" id="icon"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell" id="desc"></div>
                            <div class="divTableCell" id="wind"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell" id="sunrise"></div>
                            <div class="divTableCell" id="pressure"></div>
                        </div>
                    </div>
                </div>
                <div id="noLocation"></div>
            </div>
        )
    }

fetchData = () => {
    return fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.props.location + "&units=metric&lang=de&appid=8e3ad4a03522edcad4c7c354ce9c44a8")
        .then((response) => response.json())
        .then(function (data) {
            if(data.cod == 200){
            let stadtName = "";
            
            let sunrise = new Date(data.sys.sunrise * 1000);
            var hours = (sunrise.getHours() < 10) ? "0" + sunrise.getHours() : sunrise.getHours();
            var minutes = (sunrise.getMinutes() < 10) ? "0" + sunrise.getMinutes() : sunrise.getMinutes();

            let windVisibility = "Fernsicht "+ (data.visibility / 1000) + " km";
            let sunset = new Date(data.sys.sunset * 1000);
            var setHoures = (sunset.getHours() < 10) ? "0" + sunset.getHours() : sunset.getHours();
            var setMinutes = (sunset.getMinutes() < 10) ? "0" + sunset.getMinutes() : sunset.getMinutes();
            let humidity = data.main.humidity;
            let pressureData = "<h6>Luftdruck "+ data.main.pressure + " mbar</br> Luftfeuchte "+ humidity +"%</h6>";
            let formSunrise = "<h6>Sonnenaufgang: " + hours + ":" + minutes + " Uhr</br>Sonnenuntergang: " + setHoures + ":" + setMinutes + " Uhr</h6>";
            let city = data.name;
            let temp = parseInt(data.main.temp, 10);
            let weather_icon = data.weather[0].icon;
            let weather_descrition = data.weather[0].description;
            stadtName += city + " " + temp + "°C";
            let link = "<img src='http://openweathermap.org/img/wn/";
            let magnify = "@2x.png'>"
            document.getElementById("stadtname").innerHTML = "<h3>" + stadtName + "</h3>";
            document.getElementById("icon").innerHTML = link + weather_icon + magnify;
            document.getElementById("desc").innerHTML = "<h4>" + weather_descrition + "</h4>";
            document.getElementById("sunrise").innerHTML = formSunrise;
            document.getElementById("pressure").innerHTML = pressureData;
            document.getElementById("wind").innerHTML = "<h6>" + windVisibility + "</br> Wind " + data.wind.speed + " km/h";
            }
            else if(data.cod == 404){
                document.getElementById("noLocation").innerHTML = "Location not found";
            }
        })
};
  }

