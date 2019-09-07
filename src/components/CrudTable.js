import React from 'react';
import { Table } from 'react-bootstrap';

const CrudTable = ({ users, fetchUpdateHandler, deleteHandler }) => {
    return (
        <Table responsive className="border border-secondary">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 && users.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td><button type="button" className="btn btn-info" onClick={() => fetchUpdateHandler(user.id)}>Edit</button></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => deleteHandler(user.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default CrudTable;