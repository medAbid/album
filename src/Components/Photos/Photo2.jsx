import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import {Header} from '../Header.jsx';
import PropTypes from 'prop-types';
import { PhotoDetail2 } from './PhotoDetail2.jsx';

export class Photo2 extends React.Component {
    constructor() {
        super();
        this.state = {
           photo2: 
           [
              {
                 "name":"Chevrolet Camaro",
                 "desc":"Chevrolet Camaro 2017"
              }
           ]
        }
     }
    addToWishList2(){
        //this.setState({isWished: true});
        this.props.history.push('/wishList');
    }
    render() {   
        return (
            <div>
                <Header/>
                <div>
                    {this.state.photo2.map((imgg, i) => <PhotoDetail2 key = {i} 
                    photo2 = {imgg} />)} 
                </div> 
             <button onClick = {this.addToWishList2.bind(this)} className="btn btn-primary">Add the photo to the wishList</button>
            </div>
       );
    }
 }
 Photo2.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};