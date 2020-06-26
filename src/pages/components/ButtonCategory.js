import React from 'react';
import { Link } from 'react-router-dom';

export default class ButtonCategory extends React.Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onButtonClick(this.props.value);
    }

    render() {
        return(
            <button onClick={ this.handleClick } className={ this.props.activeOn ? "active" : "" }>{ this.props.name }</button>
        );
    }
}