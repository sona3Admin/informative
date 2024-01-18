import React from 'react';
import Lottie from 'lottie-react';
import flag from '../../../DummyData/flag.json'; 
import './spinner.css';

export default function Spinner({ loading }) {
  return (
    <div className={`spinner-container ${loading ? '' : 'hidden'}`}>
      <div className="spinner spinner-circle"></div>
      <div className="waviy">
        <Lottie animationData={flag} loop autoplay className="your-custom-class" style={{ width: '100px', height: '100px', marginTop: '-20px',marginLeft:"-3px" }} />
        <span style={{'--i': 1, color: 'rgb(136, 5, 13)', marginTop: '-15px'}}>S</span>
        <span style={{'--i': 2, color: 'white', marginTop: '-15px'}}>O</span>
        <span style={{'--i': 3, color: 'black', marginTop: '-15px'}}>N</span>
        <span style={{'--i': 4, color: 'rgb(27 143 31)', marginTop: '-15px'}}>A</span>
        <span style={{'--i': 5, color: 'white', marginTop: '-15px'}}>3</span>
        </div>
    </div>
  );
}
