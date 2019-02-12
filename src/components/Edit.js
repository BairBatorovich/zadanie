import React, { Component } from 'react';
import './Components.css';

const edtNews="http://testapi.ibb.su/setNews";

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {z: ''};
        this.state = {t: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.delnews = this.delnews.bind(this);
        this.editnews = this.editnews.bind(this);
    };

    editnews =() => {
        fetch(edtNews, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id":this.props.idn, "header":"проверка2222", "text":"проверка текст 2222"})
        });
    };

    handleChange(event){
        this.setState({z: event.target.value});
        console.log(this.state.z);
        event.preventDefault();
    }
    handleChange1(event){
        this.setState({t: event.target.value});
        console.log(this.state.t);
        event.preventDefault();
    }
    handleSubmit(event){
        this.editnews();
        event.preventDefault();
    }

    render() {
        return (
            <div className="Npost" onSubmit={this.handleSubmit}>
                <h5>{this.props.headernews}</h5>
                <p>{this.props.textn}</p>
                <button onClick={this.delnews}>Удалить</button>
                <button onSubmit={this.handleSubmit}>Сохранить</button>
            </div>
        );
    }
}

export default Edit;