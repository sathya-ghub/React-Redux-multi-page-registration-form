import React from 'react';
import { Jumbotron, Container, Table } from 'reactstrap';

function UserList({ users }) {
    if (users !=null && users.length > 0) {
        const rows = users.map((user, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.username}</td>
                    <td>{user.occupation}</td>
                </tr>
            )
        });

        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        )
    }
    else
        return (
            <div className="container mt-5">
                <Jumbotron fluid>
                    <Container fluid>
                        <h2 className="display-5">No users signed up yet.</h2>
                        <p className="lead">Sign up using our registration form!</p>
                    </Container>
                </Jumbotron>
            </div>
        )
}

export default UserList;