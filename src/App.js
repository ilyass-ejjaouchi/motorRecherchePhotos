import React, { Component } from 'react';
import Searchform from './Searchform/Searchform' ;
import CardList from './CardList/CardList' ;
import './App.css';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import {setSearchFiled,requestPictures} from './Searchform/Searchform.action';
import {BUTTON_SUBMITED} from './Searchform/Searchform.constants';
import '../node_modules/semantic-ui-css/semantic.min.css';
const mapStateToProps = (state,ownProps) =>{
  return {
    inputFiled: state.searchPictures.inputFiled,
	pictures: state.RequestPictures.pictures,
	isSubmited: state.RequestPictures.isSubmited,
	isPending: state.RequestPictures.isPending
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
      onSearchChange: (event) => dispatch(setSearchFiled(event.target.value)),
	  onButtonSubmit:() => dispatch({type:BUTTON_SUBMITED}),
	  onRequestPhotos:(key) => dispatch(requestPictures(key)),
	  
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	if (stateProps.isSubmited) {
		dispatchProps.onRequestPhotos(stateProps.inputFiled)
	};
    return ({
        ...stateProps,
        ...dispatchProps
    })
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
	            "value": 100,
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
		<CardList photos={this.props.pictures.hits}/>
    </div>
  );
  }
 
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App);
