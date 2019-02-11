import React, { Component } from 'react';
import './Components.css';

const deleteUrl="http://testapi.ibb.su/removeNews";
const edtNews="http://testapi.ibb.su/setNews";
const getdetNews="testapi.ibb.su/getNewsDetails";

class Npost extends Component {

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

    delnews = () => {
        fetch(deleteUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id": this.props.idn})
        })
    };

    editnews =() => {
        fetch(edtNews, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id":"5c611d8be0b07548cc55f3bf", "header":"rerererer", "text":"ererererere"})
        });
    };
    getdetnews =() => {
        fetch(getdetNews, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id":"5c501011418c4446a3cc1ccd"})
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
            })
    };

    handleChange(event){
        const {target:{z, value}} = event;
        this.setState({z: value});
        console.log(this.state.z);
        event.preventDefault();
    }
    handleChange1(event){
        const {target:{t, value}} = event;
        this.setState({t: value});
        console.log(this.state.t);
        event.preventDefault();
    }
    handleSubmit(event){
        this.editnews();
        console.log(this.state.z);
        event.preventDefault();
    }

    render() {
        return (
            <div className="Npost" onSubmit={this.handleSubmit}>
                <textarea rows={1} onChange={this.handleChange} id="z">{this.props.headernews}</textarea>
                <textarea rows={1} onChange={this.handleChange1} id="t">{this.props.textn}</textarea>
                <button onClick={this.delnews}>Удалить</button>
                <button onSubmit={this.handleSubmit}>Редактировать</button>
            </div>
        );
    }
}

export default Npost;