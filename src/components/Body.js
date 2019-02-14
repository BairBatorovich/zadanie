import React, { Component } from 'react';
import './Components.css';
import News from "./News";
import Cnews from "./Cnews";
import {Route} from "react-router-dom";

class Body extends Component {
    render() {
        return (
            <div>
                <Route path={"/cnews"} component={Cnews}/>
                <Route path={"/news"} component={News}/>
            </div>
        );
    }
}

export default Body;