import React from 'react';
import { Table } from 'react-bootstrap';

const CrudTable = ({ users, fetchUpdateHandler, deleteHandler }) => {
    return (
        <Table responsive className="border border-secondary">
            <thead>
                <tr>
                    <th></th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>MOBILE PHONE</th>
                    <th>NATIONALITY</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 && users.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td><input type="checkbox" /></td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.phone}</td>
                            <td>{user.nationality}</td>
                            <td><button type="button" className="btn btn-info" onClick={() => fetchUpdateHandler(user.id)}>Edit</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteHandler(user.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};

export default CrudTable;