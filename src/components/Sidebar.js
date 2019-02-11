import React, { Component } from 'react';
import './Components.css';
import {NavLink, Route} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <NavLink to={"/News"}>News</NavLink>
                <p></p>
                <NavLink to={"/Cnews"}>CreateNews</NavLink>
            </div>
        );
    }
}

export default Sidebar;