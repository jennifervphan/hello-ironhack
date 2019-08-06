import React from 'react';
import "./css/Hero.css";

function Hero(props) {
    return ( 
    <div className = "heroDiv" > { props.children } 
    </div>
    )
}
export default Hero