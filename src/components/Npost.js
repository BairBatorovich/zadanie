import React, { Component } from 'react';
import './Components.css';
import Modal from 'react-modal';

const deleteUrl="http://testapi.ibb.su/removeNews";
const edtNews="http://testapi.ibb.su/setNews";
const getdetNews="http://testapi.ibb.su/getNewsDetails";


class Npost extends Component {

    constructor(props) {
        super(props);
        this.state = {headerNews: 'заголовок'};
        this.state = {textNews: ''};
        this.state={modalIsOpen:false};
        this.state={modalIsOpenEdit:false};

        this.delnews = this.delnews.bind(this);
        this.editnews = this.editnews.bind(this);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.openModalEdit = this.openModalEdit.bind(this);
        this.closeModalEdit = this.closeModalEdit.bind(this);

        this.handleChangeHeader = this.handleChangeHeader.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            body: JSON.stringify({"id":this.props.idNews, "header": this.state.headerNews, "text":this.state.textNews})
        });
    };

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

    handleChangeHeader(event){
        this.setState({headerNews: event.target.value});
        console.log(this.state.headerNews);
        event.preventDefault();
    };
    handleChangeText(event){
        this.setState({textNews: event.target.value});
        event.preventDefault();
    };
    handleSubmit(event){
        this.setState({headerNews: document.getElementById("header").value=""});
        this.setState({textNews: document.getElementById("txtNews").value=""});
        debugger;
        this.editnews();
        event.preventDefault();
    };

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
                    className="ModalEdit"
                    onSubmit={this.handleSubmit}
                >
                    <h5>Редактирование</h5>
                    <textarea className="txtEdit" value={this.state.headerNews} id="header" onChange={this.handleChangeHeader}>{this.props.headerNews}</textarea>
                    <textarea className="txtEdit" value={this.state.textNews} id="txtNews" onChange={this.handleChangeText}>{this.props.textN}</textarea>

                    <button onClick={this.handleSubmit}>Сохранить</button>
                    <button onClick={this.closeModalEdit}>Отмена</button>
                </Modal>

            </div>
        );
    }
}

export default Npost;