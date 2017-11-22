import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import myimage1 from '../../Images/ford.png';
import myimage2 from '../../Images/chevrolet.jpg';
import myimage3 from '../../Images/audi.jpg';
import {Header} from '../Header.jsx';

export class Album1 extends React.Component {
    render() {    
        return (
            <div>
                <Header/>
                <hr/>
                <h4>List of photo:</h4>
                <hr/>
                <ul>
                    <li><NavLink to="/Photo1">Ford Mustang</NavLink></li>
                    <img src={myimage1} width="100" height="100"/>
                    <li><NavLink to="/Photo2">Chevrolet Camaro</NavLink></li>
                    <img src={myimage2} width="100" height="100"/>
                    <li><NavLink to="/Photo3">Audi R8</NavLink></li>
                    <img src={myimage3} width="100" height="100"/>
                </ul>
            </div>
       );
    }
 }
