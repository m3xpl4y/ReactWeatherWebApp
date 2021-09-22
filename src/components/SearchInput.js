import React, { Component } from 'react';

export default class SearchInput extends Component{
    constructor() {
        super()
        this.state = {
            location: ''
        };
    }
  
    handleChange(e) {
        this.setState({
            location: e.target.value
        });
    }
   
    render(){
        return(
        <div className="m-input">
            <input onChange={e => this.setState({ location: e.target.value })} 
            value={this.state.location}
            type="text" className="m-input"
            placeholder="Search Location"
            ></input>
        </div>

        )    
        }
    }