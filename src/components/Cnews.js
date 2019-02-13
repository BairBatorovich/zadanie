import React, { Component } from 'react';
import './Components.css';

const createNewsUrl="http://testapi.ibb.su/createNews";

class Cnews extends Component {
    constructor (props) {
        super(props);
        this.state = {headerNews: ''};
        this.state = {textNews: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    createNews = () => {
        fetch(createNewsUrl, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"header": this.state.headerNews, "text": this.state.textNews})
        });
    };

    handleChange(event){
        this.setState({headerNews: event.target.value});
        event.preventDefault();
    }; //
    handleChange1(event){
        this.setState({textNews: event.target.value});
        event.preventDefault();
    };
    handleSubmit(event){
        this.createNews();
        document.getElementById("header").value = "";
        document.getElementById("txtNews").value = "";
        event.preventDefault();
    };


    render() {
        return (
                <div className="Cnews" onSubmit={this.handleSubmit}>
                    <input type='text' name={"zn"} id={"header"} placeholder={"введите заголовок"} value={this.state.headerNews} onChange={this.handleChange}/>
                    <p></p>
                    <input type='text' name={"txtn"} id={"txtNews"} placeholder={"введите текст новости"} value={this.state.textNews} onChange={this.handleChange1}/>
                    <p></p>
                    <button onClick={this.handleSubmit}>Добавить</button>
                </div>
        );
    }
}

export default Cnews;