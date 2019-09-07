import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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
        this.setState({ users }, localStorage.setItem("users", JSON.stringify(users)));
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
                <form onSubmit={this.onSubmitHandler} className="col-md-5 border border-secondary p-3 my-3">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>                        
                        <input type="text" className="form-control" placeholder="First Name" name="lastName" value={this.state.lastName} onChange={this.onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.onChangeHandler} />
                    </div>
                    {this.state.updateEvent ?
                        <React.Fragment>
                            <button type="button" className="btn btn-primary" onClick={this.updateHandler}>Update</button>
                            <button type="button" className="btn btn-danger" onClick={this.cancelHandler}>Cancel</button>
                        </React.Fragment>
                        :
                        <button type="submit" className="btn btn-primary">Create</button>
                    }
                </form>
                <Table responsive className="border border-secondary">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.length > 0 && this.state.users.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td><button type="button" className="btn btn-info" onClick={() => this.fetchUpdateHandler(user.id)}>Edit</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => this.deleteHandler(user.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Crud;