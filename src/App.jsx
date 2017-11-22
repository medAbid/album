import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {WishList} from './Components/WishList.jsx';
import {Home} from './Components/Home.jsx';
import {Album1} from './Components/Albums/Album1.jsx';

import {Photo1} from './Components/Photos/Photo1.jsx';
import {Photo2} from './Components/Photos/Photo2.jsx';
import {Photo3} from './Components/Photos/Photo3.jsx';

class App extends React.Component {
    
    render() {
        return (
              <Router>
              <div>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/wishList"} component={WishList}/>
                <Route path={"/album1"} component={Album1}/>
                <Route path={"/photo1"} component={Photo1}/>
                <Route path={"/photo2"} component={Photo2}/>
                <Route path={"/photo3"} component={Photo3}/>
              </div>
             </Router>
        );
    }  
}

export default App;