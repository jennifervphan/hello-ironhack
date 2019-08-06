import React, { Component } from 'react';
import './css/Footer.css';
import Card from "./Card";


let cardInfo =[
    {image:"icon1.png",
    title:"Declarative",
    description:"blah blah blah blah blah blah blah blah blah blah blah blah"},
    {image:"icon2.png",
    title:"Components",
    description:"blah blah blah blah blah blah blah blah blah blah blah blah"},
    {image:"icon3.png",
    title:"Single Way",
    description:"blah blah blah blah blah blah blah blah blah blah blah blah"},
    {image:"icon4.png",
    title:"JSX",
    description:"blah blah blah blah blah blah blah blah blah blah blah blah"}
]

class Footer extends Component {
    render() {
        return (   
        <div className="footerFlex">
            <Card image={cardInfo[0].image} title={cardInfo[0].title} description={cardInfo[0].description} />
            <Card image={cardInfo[1].image} title={cardInfo[1].title} description={cardInfo[1].description} />
            <Card image={cardInfo[2].image} title={cardInfo[2].title} description={cardInfo[2].description} />
            <Card image={cardInfo[3].image} title={cardInfo[3].title} description={cardInfo[3].description} />
        </div>
     )
    }
}

export default Footer