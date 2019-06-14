import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        // buttonStyle and text are defined on Apps.js
        <button className={props.buttonStyle}>{props.text}</button>
    );
};

export default ActionButton;

  