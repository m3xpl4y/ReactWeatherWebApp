import React, { Component } from 'react';
import MainWeatherCard from './MainWeatherCard';

export default class WeatherCard extends Component{
    constructor(props){
        super(props)
        this.state = {location: ""};
    }
    render(){
    return(
        <div>
            <MainWeatherCard location={this.props.location}/> 
        </div>
    )}

}