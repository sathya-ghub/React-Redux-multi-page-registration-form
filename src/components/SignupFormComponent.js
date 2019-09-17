import React, { Component } from 'react';
import PageOne from './FormOneComponent';
import PageTwo from './FormTwoComponent';
import { LocalForm } from 'react-redux-form';

class CardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            username: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            occupation: '',
            telephone: ''
        };

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nextPage() {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage() {
        this.setState({
            page: this.state.page - 1
        })
    }

    handleChange = (input) => (e) => {
        this.setState({
            [input]: e.target.value
        });
    }

    handleSubmit(values) {
        const registeredTime = new Date().toGMTString();
        
        const user = {
            username: values.username,
            email: values.email,
            password: values.password,
            firstname: values.firstname,
            lastname: values.lastname,
            occupation: values.occupation,
            telephone: values.occupation,
            registeredTime: registeredTime
        };

        this.props.signupUser(user);

        this.setState({
            page: 1
        });
    }

    render() {
        const { page } = this.state;
        const userInfo = this.state;
        return (
            <div className="container mt-5">
                <LocalForm model="currentUser" onSubmit={(values) => this.handleSubmit(values)}>
                    {page === 1 && <PageOne nextPage={this.nextPage} handleChange={this.handleChange} />}
                    {page === 2 && <PageTwo previousPage={this.previousPage} handleChange={this.handleChange} handleSubmit={this.handleSubmit} userInfo={userInfo}/>}
                </LocalForm>
            </div>
        );
    }
}

export default CardForm;
