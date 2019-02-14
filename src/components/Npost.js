import React, { Component } from 'react';
import './Components.css';
import {NavLink} from "react-router-dom";
import Modal from 'react-modal';

const deleteUrl="http://testapi.ibb.su/removeNews";
const edtNews="http://testapi.ibb.su/setNews";
const getdetNews="http://testapi.ibb.su/getNewsDetails";


class Npost extends Component {

    constructor(props) {
        super(props);
        this.state = {headerNews: ''};
        this.state = {textNews: ''};
        this.state={modalIsOpen:false};
        this.state={modalIsOpenEdit:false};

        this.delnews = this.delnews.bind(this);
        this.editnews = this.editnews.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.openModalEdit = this.openModalEdit.bind(this);
        this.closeModalEdit = this.closeModalEdit.bind(this);
    };

    delnews = () => {
            fetch(deleteUrl, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"id": this.props.idNews})
            });
        this.closeModal();
    };
    editnews =() => {
        fetch(edtNews, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"id":"5c5ee5cde0b07548cc55f3bd", "header":"заголовок2222", "text":"Текст текст 2222"})
        })
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    openModalEdit() {
        this.setState({modalIsOpenEdit: true});
    }
    closeModalEdit() {
        this.setState({modalIsOpenEdit: false});
    }

    render() {
        return (
            <div className="Npost">
                <h5>{this.props.headerNews}</h5>
                <p>{this.props.textN}</p>

                <button onClick={this.openModalEdit}>Редактировать</button>
                <button onClick={this.openModal}>Удалить</button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                >

                    <h2>Удалить</h2>
                    <button onClick={this.delnews}>Да</button>
                    <button onClick={this.closeModal}>Отмена</button>
                </Modal>

                <Modal
                    isOpen={this.state.modalIsOpenEdit}
                    onRequestClose={this.closeModalEdit}
                    contentLabel="Example Modal"
                    className="ModalEdit"
                >
                    <h5>Редактирование</h5>
                    <textarea>Заголовок</textarea>
                    <button onClick={this.editnews()}>Да</button>
                    <button onClick={this.closeModalEdit}>Нет</button>
                </Modal>

            </div>
        );
    }
}

export default Npost;