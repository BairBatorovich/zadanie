import React, { Component } from 'react';
import './Components.css';

const createNewsUrl="http://testapi.ibb.su/createNews";

class Cnews extends Component {
    constructor (props) {
        super(props);
        this.state = {zagolovok: ''};
        this.state = {textnews: ''};

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
            body: JSON.stringify({"header": this.state.zagolovok, "text": this.state.textnews})
        });
    };

    handleChange(event){
        this.setState({zagolovok: event.target.value});
        event.preventDefault();
    };
    handleChange1(event){
        this.setState({textnews: event.target.value});
        event.preventDefault();
    };
    handleSubmit(event){
        this.createNews();
        document.getElementById("zagolovok").value = "";
        document.getElementById("txtnews").value = "";
        event.preventDefault();
    };


    render() {
        return (
                <div className="Cnews" onSubmit={this.handleSubmit}>
                    <input type='text' name={"zn"} id={"zagolovok"} placeholder={"введите заголовок"} value={this.state.zagolovok} onChange={this.handleChange}/>
                    <p></p>
                    <input type='text' name={"txtn"} id={"txtnews"} placeholder={"введите текст новости"} value={this.state.textnews} onChange={this.handleChange1}/>
                    <p></p>
                    <button onClick={this.handleSubmit}>Добавить</button>
                </div>
        );
    }
}

export default Cnews;