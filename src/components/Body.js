import React, { Component } from 'react';
import './Components.css';
import News from "./News";
import Cnews from "./Cnews";
import Edit from "./Edit"
import {Route} from "react-router-dom";

class Body extends Component {
    render() {
        return (
            <div>
                <Route path={"/cnews"} component={Cnews}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/edit"} component={Edit}/>
            </div>
        );
    }
}

export default Body;