import React, { Component } from 'react';
import './Components.css';
import {NavLink} from "react-router-dom";

const deleteUrl="http://testapi.ibb.su/removeNews";
const edtNews="http://testapi.ibb.su/setNews";
const getdetNews="http://testapi.ibb.su/getNewsDetails";

class Npost extends Component {

    constructor(props) {
        super(props);
        this.state = {headerNews: ''};
        this.state = {textNews: ''};
        this.state = {modalOpen: false};

        this.delnews = this.delnews.bind(this);
    };

    handleOpen = () => this.setStat({modalOpen: true});
    handleClose = () => this.setStat({modalOpen: false});
    delnews = () => {
        if(window.confirm("Delete")) {
            fetch(deleteUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"id": this.props.idNews})
            });
            alert("Новость удалена");
        } else alert("Действие отменено");
    };

    render() {
        return (
            <div className="Npost">
                <h5>{this.props.headerNews}</h5>
                <p>{this.props.textN}</p>
                <button onClick={this.delnews}><NavLink to={"/News"}>Удалить</NavLink></button>
                <button><NavLink to={"/Edit"}>Редактировать</NavLink></button>

                {/*<Modal isOpen={this.state.modalOpen}>
                    <button onClick={this.state.handleOpen}>Кнопка</button>
                </Modal>*/}
            </div>
        );
    }
}

export default Npost;