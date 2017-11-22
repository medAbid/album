import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

import {Header} from '../Header.jsx';
import PropTypes from 'prop-types';
import { PhotoDetail3 } from './PhotoDetail3.jsx';

export class Photo3 extends React.Component {
    constructor() {
        super();
        this.state = {
           photo3: 
           [
              {
                 "name":"Audi R8",
                 "desc":"Audi R8 2017"
              }
           ]
        }
     }
    addToWishList3(){
        //this.setState({isWished: true});
        this.props.history.push('/wishList');
    }
    render() {   
        return (
            <div>
                <Header/>
                <div>
                    {this.state.photo3.map((imgg, i) => <PhotoDetail3 key = {i} 
                    photo3 = {imgg} />)} 
                </div> 
             <button onClick = {this.addToWishList3.bind(this)} className="btn btn-primary">Add the photo to the wishList</button>
            </div>
       );
    }
 }
 Photo3.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};