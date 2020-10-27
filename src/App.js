import React, { Component } from 'react';
import Searchform from './Searchform/Searchform' ;
import './App.css';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import {setSearchFiled,requestPictures} from './Searchform/Searchform.action';
 
const mapStateToProps = state =>{
  return {
    inputFiled: state.searchPictures.inputFiled,
    photos: state.RequestPictures.photos
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      onSearchChange: (event) => dispatch(setSearchFiled(event.target.value)),
      onButtonSubmit:(key) => dispatch(requestPictures(key))
  }
}

class App extends Component{
  constructor(){
    super();
  }

  render(){
     return (
    <div className="App">
       <Particles className='particles' params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
        <Searchform onInputChange={this.props.onSearchChange} onButtonSubmit={this.props.onButtonSubmit}/>
    </div>
  );
  }
 
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
