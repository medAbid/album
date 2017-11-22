import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import myimage1 from '../../Images/ford.png';
import PropTypes from 'prop-types';

export class PhotoDetail extends React.Component {
    render() {   
        return (
            <div>
                <hr/>
                <h4>Photo {this.props.photo1.name} detail:</h4>
                <hr/>
                <img src={myimage1} width="300" height="300"/>
                <div>
                <b>Name:</b>  {this.props.photo1.name}
                </div>
                <div>
                <b>Description:</b> {this.props.photo1.desc} 
                </div>
            </div>
       );
    }
 }