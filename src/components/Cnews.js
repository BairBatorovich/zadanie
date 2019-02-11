import React, { Component } from 'react';
import './Components.css';

const createNewsUrl="http://testapi.ibb.su/createNews";
const deleteUrl="http://testapi.ibb.su/removeNews";
const getNews="http://testapi.ibb.su/getNews";
const getdetNews="http://testapi.ibb.su/getNewsDetails";
const edtNews="http://testapi.ibb.su/setNews";

class Cnews extends Component {
    constructor (props) {
        super(props);
        this.state = {zn: ''};
        this.state = {txtn: ''};

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
            body: JSON.stringify({"header": this.state.zn, "text": this.state.txtn})
        })
        console.log()
    }

    handleChange(event){
        this.setState({zn: event.target.value});
        event.preventDefault();
    }
    handleChange1(event){
        this.setState({txtn: event.target.value});
        event.preventDefault();
    }
    handleSubmit(event){
        this.createNews();
        document.getElementById("zagolovok").value = "";
        document.getElementById("txtnews").value = "";
        event.preventDefault();
    }


    render() {
        return (
                <div className="Cnews" onSubmit={this.handleSubmit}>
                    <input type='text' name={"zn"} id={"zagolovok"} placeholder={"введите заголовок"} value={this.state.zn} onChange={this.handleChange}/>
                    <p></p>
                    <input type='text' name={"txtn"} id={"txtnews"} placeholder={"введите текст новости"} value={this.state.txtn} onChange={this.handleChange1}/>
                    <p></p>
                    <button onClick={this.handleSubmit}>Добавить</button>
                </div>
        );
    }
}

export default Cnews;