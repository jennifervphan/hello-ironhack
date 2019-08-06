import React,{Component} from 'react';

class Card extends Component {
    render () {
        const { title, description, image } = this.props;
        let source = "images/"+image
        return (
        <div className="card">
        <img src={source} alt=""/>
        <h1 >{title}</h1>
        <p>{description}</p>
        </div>
        );
  }}

export default Card