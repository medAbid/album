import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import {Album1} from './Albums/Album1.jsx';
import {Header} from './Header.jsx';

export class Home extends React.Component {
    render() {    
        return (
            <div>
                <Header/>
                <hr/>
                <h4>List of albums :</h4>
                <hr/>
                <ul>
                    <li><NavLink to="/album1">Car</NavLink></li>
                </ul>
            </div>
       );
    }
 }
