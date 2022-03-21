import React from 'react';
import {Link} from 'react-router-dom';

const HelloWorld = () => {
    return (
        <span className="text-white">
        <h1>Hello World!</h1>
        <Link to="/">Labs</Link> | <Link to="/tuiter">Tuiter</Link>
        </span>
    )
};
export default HelloWorld;