import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import {Header} from '../Header.jsx';
import PropTypes from 'prop-types';
import { PhotoDetail } from './PhotoDetail.jsx';

export class Photo1 extends React.Component {
    constructor() {
        super();
        this.state = {
           isWished: false,
           photo1: 
           [
              {
                 "name":"Ford Mustang",
                 "desc":"Ford Mustang 2016"
              }
           ]
        }
     }
    addToWishList1(){
        //this.setState({isWished1: true});
        this.props.history.push('/wishList');
    }
    render() {   
        return (
            <div>
                <Header/>
                <div>
                    {this.state.photo1.map((imgg, i) => <PhotoDetail key = {i} 
                    photo1 = {imgg} />)} 
                </div> 
             <button onClick = {this.addToWishList1.bind(this)} className="btn btn-primary">Add the photo to the wishList</button>
            </div>
       );
    }
 }
 Photo1.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};