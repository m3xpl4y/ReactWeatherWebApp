import React, { Component } from 'react';

export default class SearchInput extends Component{
    render(){
        return(
        <div className="m-input">
            <input type="text" className="m-input"
            placeholder="Search Location"></input>
        </div>
        )    
        }
    }