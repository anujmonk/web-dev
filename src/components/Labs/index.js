import React from 'react';
import {Link} from 'react-router-dom';
import Todo from './Todo';
import Classes from './Classes';
import ConditionalOutput from './ConditionalOutput';
import Styles from './Styles';

const Labs = () => {
    return(
        <span className="text-white">
        <h1>Labs</h1>
        <Link to="/hello">Hello</Link> | <Link to="/tuiter">Tuiter</Link>
        <Todo/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        </span>
    )
};

export default Labs;