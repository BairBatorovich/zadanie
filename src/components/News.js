import React, { Component } from 'react';
import './Components.css';
import Npost from './Npost';
import Axios from 'axios';

const getNews="http://testapi.ibb.su/getNews";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {news: ''};

        this.getnews = this.getnews.bind(this);
        this.getnewsAxios = this.getnewsAxios.bind(this);
    }

    /*получаю данные с сервера данные в массив arr далее создается массив компонентов "Npost"
    в переменную news с помощью map. в рендере выводится массив news*/
    getnews = async () => {
        const arr1 = await fetch(getNews,).then(result => result.json());
        const arr2 = arr1.news;
        const arr3 = arr2.map(el => {
            return (
                <Npost key={el._id} idNews={el._id} headerNews={el.header} textN={el.text}/>
            )
        });
        this.setState({news: arr3});
    };
    /*AXIOS*/
    getnewsAxios = async () => {
        const arr1 = await Axios.get(getNews).then(response => (response.data.news));
        const arr2 = arr1.map(el => {
            return (
                <Npost key={el._id} idNews={el._id} headerNews={el.header} textN={el.text}/>
            )
        });
        this.setState({news: arr2});
    };
    render() {
        this.getnewsAxios();
        return (
            <div className="News">
                {this.state.news}
            </div>
        );
    }
}

export default News;