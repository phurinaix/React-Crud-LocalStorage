import React, { Component } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
// import { Table } from 'react-bootstrap';

class Crud extends Component{
    state = {
        users: [],
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        updateEvent: false
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        
        // Validate
        if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "") {
            alert('กรุณากรอดข้อมูลให้ครบ');
            return false;
        }
        if (this.state.users.findIndex(user => user.email === this.state.email) !== -1) {
            alert('อีเมล์ซ้ำ');
            return false;
        }

        let previousId = 1;
        if (this.state.users.length > 0) {
            previousId = this.state.users[this.state.users.length - 1].id + 1;
        }
        const user = {
            id: previousId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
        const users = [...this.state.users, user];
        this.setState({
            users: users,
            firstName: '',
            lastName: '',
            email: ''
        }, localStorage.setItem("users", JSON.stringify(users)));

    }
    fetchUpdateHandler = (id) => {
        const user = this.state.users.find(user => user.id === id);
        this.setState({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            updateEvent: true
        });
    }
    updateHandler = () => {
        const users = this.state.users.map(user => {
            if (user.id === this.state.id) {
                user.id = this.state.id;
                user.firstName = this.state.firstName;
                user.lastName = this.state.lastName;
                user.email = this.state.email;
            }
            return user
        });
        this.setState({
            users,
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            updateEvent: false
        }, localStorage.setItem("users", JSON.stringify(users)));
    }
    cancelHandler = () => {
        this.setState({
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            updateEvent: false
        });
    }
    deleteHandler = (id) => {
        const users = this.state.users.filter(user => user.id !== id);
        this.setState({ users, updateEvent: false }, localStorage.setItem("users", JSON.stringify(users)));
    }
    componentDidMount() {
        let users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            this.setState({
                users: users
            })
        }
    }
    render() {
        return (
            <div>
                <CrudForm 
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                    updateHandler={this.updateHandler}
                    cancelHandler={this.cancelHandler}
                    updateEvent={this.state.updateEvent}
                />
                <CrudTable 
                    users={this.state.users}
                    fetchUpdateHandler={this.fetchUpdateHandler}
                    deleteHandler={this.deleteHandler}
                />
            </div>
        )
    }
}

export default Crud;