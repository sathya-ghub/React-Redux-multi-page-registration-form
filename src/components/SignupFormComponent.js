import React, { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Button, Label, Row, Col } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CardForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1
        }

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
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

    render() {
        const { page } = this.state;
        return (
            <div className="container mt-5">
                <LocalForm onSubmit={(values) => this.props.signupUser(values)} model="user">
                    {page === 1 &&
                        <div>
                            <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                                <Row className="form-group">
                                    <Label htmlFor="username" md={2}>Username</Label>
                                    <Col md={10}>
                                        <Control.text model=".username" placeholder="Username" className="form-control" autoComplete="off"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".username" show="touched" messages={{
                                            required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less' }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" placeholder="Email" className="form-control" autoComplete="off"
                                            validators={{ required, validEmail, maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".email" show="touched" messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password" md={2}>Password</Label>
                                    <Col md={10}>
                                        <Control.text type="password" model=".password" placeholder="Password" className="form-control"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15)}} />
                                        <Errors className="text-danger" model=".password" show="touched" messages={{
                                            required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less' }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }} className="d-flex justify-content-end">
                                        <Button color="primary" onClick={this.nextPage}>
                                            Next
                                        </Button>
                                    </Col>
                                </Row>
                            </FadeTransform>
                        </div>}
                    {page === 2 &&
                        <div>
                             <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstname" placeholder="First Name" className="form-control" autoComplete="off"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".firstname" show="touched" messages={{
                                            required: 'Required', minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastname" placeholder="Last Name" className="form-control" autoComplete="off"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".lastname" show="touched" messages={{
                                            required: 'Required', minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={2}>Occupation</Label>
                                    <Col md={10}>
                                        <Control.text model=".occupation" placeholder="Last Name" className="form-control" autoComplete="off"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                        <Errors className="text-danger" model=".occupation" show="touched" messages={{
                                            required: 'Required', minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="telnum" md={2}>Telephone</Label>
                                    <Col md={10}>
                                        <Control.text model=".telephone" placeholder="Telephone" className="form-control" autoComplete="off"
                                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15), isNumber }} />
                                        <Errors className="text-danger" model=".telephone" show="touched" messages={{
                                            required: 'Required', minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                            isNumber: 'Must be a number'
                                        }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }} className="d-flex justify-content-between">
                                        <Button color="secondary" onClick={this.previousPage}>
                                            Back
                                        </Button>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </FadeTransform>
                        </div>}
                        
                </LocalForm>
            </div>
        );
    }
}

export default CardForm;
