import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers, createUser, deleteUser, updateUser, cancel, fetchOneUser, changeEvent } from '../actions/user-action';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

class Crud extends Component{
    onSubmitHandler = (e) => {
        e.preventDefault();
        // Validate
        this.validateForm();
        this.props.createUser().then(() => localStorage.setItem("users", JSON.stringify(this.props.users)));
    }
    updateHandler = () => {
        this.props.updateUser().then(() => localStorage.setItem("users", JSON.stringify(this.props.users)));
    }
    deleteHandler = (id) => {
        this.props.deleteUser(id).then(() => localStorage.setItem("users", JSON.stringify(this.props.users)));
    }
    componentDidMount() {
        if (this.props.users.length === 0) { 
            this.props.fetchUsers();
        }
    }
    validateForm = () => {
        if (this.props.firstName === "" || this.props.lastName === "" || this.props.email === "") {
            alert('กรุณากรอดข้อมูลให้ครบ');
            return false;
        }
        if (this.props.users.findIndex(user => user.email === this.props.email) !== -1) {
            alert('อีเมล์ซ้ำ');
            return false;
        }
    }
    render() {
        return (
            <div>
                <CrudForm 
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    onChangeHandler={this.props.changeEvent}
                    onSubmitHandler={this.onSubmitHandler}
                    updateHandler={this.updateHandler}
                    cancelHandler={this.props.cancel}
                    updateEvent={this.props.updateEvent}
                />
                <CrudTable 
                    users={this.props.users}
                    fetchUpdateHandler={this.props.fetchOneUser}
                    deleteHandler={this.deleteHandler}
                />
            </div>
        )
    }
}

Crud.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    fetchOneUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    changeEvent: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    users: state.users.users,
    id: state.users.id,
    firstName: state.users.firstName,
    lastName: state.users.lastName,
    email: state.users.email,
    gender: state.users.gender,
    updateEvent: state.users.updateEvent
});

export default connect(mapStateToProps, { fetchUsers, createUser, deleteUser, cancel, fetchOneUser, changeEvent, updateUser })(Crud);
