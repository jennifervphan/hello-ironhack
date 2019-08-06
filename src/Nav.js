import React, { Component } from "react";
import "./css/Nav.css"

class Nav extends Component {
    render() {
        return ( 
        <div className = "navBar">
            <img src="images/ironhack-logo.svg" alt=""/> 
            <img src="images/menu-top.svg" alt=""/> 
        </div>
        )
    }
}

export default Nav