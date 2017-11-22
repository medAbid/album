import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import myimage1 from '../Images/ford.png';
import {Header} from './Header.jsx';
import {Photo1} from './Photos/Photo1.jsx';

export class WishList extends React.Component {
    render() {  
        return (
            <div>
                <Header/>
                <hr/>
                <h4>List of wished photo</h4>
                <hr/>
                <ul>
                    <li><NavLink to="/Photo1">Ford Mustang</NavLink></li>
                    <img src={myimage1} width="100" height="100"/>
                    <hr width="600"/>
                </ul>
                
            </div>
       );
    }
 }