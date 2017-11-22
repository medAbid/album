import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import myimage3 from '../../Images/audi.jpg';
import PropTypes from 'prop-types';

export class PhotoDetail3 extends React.Component {
    render() {   
        return (
            <div>
                <hr/>
                <h4>Photo {this.props.photo3.name} detail:</h4>
                <hr/>
                <img src={myimage3} width="300" height="300"/>
                <div>
                <b>Name:</b>  {this.props.photo3.name}
                </div>
                <div>
                <b>Description:</b> {this.props.photo3.desc} 
                </div>
            </div>
       );
    }
 }