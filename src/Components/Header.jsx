import React from 'react';
import {render} from 'react-dom';
import {NavLink} from "react-router-dom";

import {Home} from './Home.jsx';
import {WishList} from './WishList.jsx';

export const Header = (props) => {
       return (
         <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-Header">
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/WishList">WishList</NavLink></li>
                        </ul>
                    </div>
                </div>
          </div>
        )
 };