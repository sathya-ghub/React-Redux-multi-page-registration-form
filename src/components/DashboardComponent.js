import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { signupUser } from '../redux/ActionCreators';
import Header from './HeaderComponent';
import UserList from './UserListComponent';
import SignupForm from './SignupFormComponent';

const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => ({
    signupUser: (user) => dispatch(signupUser(user))
});

function RenderDash({ users }) {
    return (
        <div className="container mt-5">
            <Jumbotron fluid>
                <Container fluid>
                    <h2 className="display-5">Number of users signed up: {users.length}</h2>
                    <p className="lead">Sign up using our registration form!</p>
                </Container>
            </Jumbotron>
        </div>
    )
}

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/dashboard' component={() => <RenderDash users={this.props.users.users} />} />
                    <Route path='/userlist' component={() => <UserList users={this.props.users.users} />} />
                    <Route path='/signup' component={() => <SignupForm signupUser={this.props.signupUser} />} />
                    <Redirect to='/dashboard' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));