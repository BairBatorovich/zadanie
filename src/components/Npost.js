import React, { Component } from 'react';
import './Components.css';
import {NavLink} from "react-router-dom";

const deleteUrl="http://testapi.ibb.su/removeNews";
const edtNews="http://testapi.ibb.su/setNews";
const getdetNews="http://testapi.ibb.su/getNewsDetails";

class Npost extends Component {

    constructor(props) {
        super(props);
        this.state = {zagolovok: ''};
        this.state = {textnews: ''};

        this.delnews = this.delnews.bind(this);
    };

    delnews = () => {
        if(window.confirm("Delete")) {
            fetch(deleteUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"id": this.props.idnews})
            });
            alert("Новость удалена");
        } else alert("Действие отменено");
    };

    render() {
        return (
            <div className="Npost">
                <h5>{this.props.headernews}</h5>
                <p>{this.props.textn}</p>
                <button onClick={this.delnews}><NavLink to={"/News"}>Удалить</NavLink></button>
                <button><NavLink to={"/Edit"}>Редактировать</NavLink></button>
            </div>
        );
    }
}

export default Npost;