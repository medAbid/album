import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import myimage2 from '../../Images/chevrolet.jpg';

import PropTypes from 'prop-types';

export class PhotoDetail2 extends React.Component {
    render() {   
        return (
            <div>
                <hr/>
                <h4>Photo {this.props.photo2.name} detail:</h4>
                <hr/>
                <img src={myimage2} width="300" height="300"/>
                <div>
                <b>Name:</b>  {this.props.photo2.name}
                </div>
                <div>
                <b>Description:</b> {this.props.photo2.desc} 
                </div>
            </div>
       );
    }
 }