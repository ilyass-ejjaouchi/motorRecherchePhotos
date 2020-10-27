import React from 'react';
import './Searchform.css';
import search from './search.png';
import Tilt from 'react-tilt';

const Searchform = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
        <div className='center'> 
            <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
             <div className="Tilt-inner"> <img alt="logo" src={search}></img> </div>
            </Tilt>    
        </div>
      <div className='center'>
        <div className='center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-black'
            onClick={onButtonSubmit}
          >Search</button>
        </div>
      </div>
    </div>
  );
}

export default Searchform;
