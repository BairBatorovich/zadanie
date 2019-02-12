import React, { Component } from 'react';
import './Components.css';
import Npost from './Npost'

const getNews="http://testapi.ibb.su/getNews";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {n: ''};

        this.getnews = this.getnews.bind(this);
    }

    getnews = async () => {
        const arr1 = await fetch(getNews,).then(result => result.json());
        const arr2 = arr1.news;
        const arr3 = arr2.map(el => {
            return (
                <Npost key={el._id} idn={el._id} headernews={el.header} textn={el.text}/>
            )
        });
        this.setState({n: arr3})
    }
    render() {
        this.getnews();
        return (
            <div className="News">
                {this.state.n}
            </div>
        );
    }
}

export default News;