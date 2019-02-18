import React, { Component } from 'react';
import './Components.css';
import Axios from 'axios';

const createNewsUrl="http://testapi.ibb.su/createNews";

class Cnews extends Component {
    constructor (props) {
        super(props);
        this.state = {headerNews: ''};
        this.state = {textNews: ''};
        this.state = {otvet: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    /*FETCH*/
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
    /*AXIOS*/
    createNewsAxios = async() => {
        await Axios.post(createNewsUrl, {"header": this.state.headerNews, "text":this.state.textNews})
            .then(response => {this.setState({otvet: response.data.success});
            console.log(this.state.otvet)});
        document.getElementById("header").value = "";
        document.getElementById("txtNews").value = "";
    };
    /*присваивает переменной headerNews значение поля textarea*/
    handleChange(event){
        this.setState({headerNews: event.target.value});
        event.preventDefault(); /*отмена действия по умолчанию*/
    };
    /*присваивает переменной textNews значение поля textarea*/
    handleChange1(event){
        this.setState({textNews: event.target.value});
        event.preventDefault(); /*отмена действия по умолчанию*/
    };
    /*вызывется метод createNews и очищается текстовое поле*/
    handleSubmit(event){
        this.createNewsAxios();
        /*document.getElementById("header").value = "";
        document.getElementById("txtNews").value = "";*/
        event.preventDefault(); /*отмена действия по умолчанию*/
    };


    render() {
        return (
                <div className="Cnews" onSubmit={this.handleSubmit}>
                    <input type='text' name={"zn"} id={"header"} placeholder={"введите заголовок"} value={this.state.headerNews} onChange={this.handleChange}/> {/*при изменении текстового поля вызывается метод handleChange*/}
                    <p></p>
                    <input type='text' name={"txtn"} id={"txtNews"} placeholder={"введите текст новости"} value={this.state.textNews} onChange={this.handleChange1}/>
                    <p></p>
                    <button onClick={this.handleSubmit}>Добавить</button> {/*вызывается метод handleSubmit при шелчке левой кнопки мыши по кнопке*/}
                </div>
        );
    }
}

export default Cnews;