import React from 'react';
import { Control, Errors } from 'react-redux-form';
import { Col, Row, Label, Button } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function PageOne(props) {
    const { nextPage, handleChange } = props;
    return (
        <div>
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                <Row className="form-group">
                    <Label htmlFor="username" md={2}>Username</Label>
                    <Col md={10}>
                        <Control.text onChange={handleChange('username')} model=".username" placeholder="Username" className="form-control" autoComplete="off"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                        <Errors className="text-danger" model=".username" show="touched" component="div" messages={{
                            required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="email" md={2}>Email</Label>
                    <Col md={10}>
                        <Control.text onChange={handleChange('email')} model=".email" placeholder="Email" className="form-control" autoComplete="off"
                            validators={{ required, validEmail }} />
                        <Errors className="text-danger" model=".email" show="touched" component="div" messages={{
                            required: 'Required',
                            validEmail: 'Invalid Email Address'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="password" md={2}>Password</Label>
                    <Col md={10}>
                        <Control.text type="password" model=".password" placeholder="Password" className="form-control"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                        <Errors className="text-danger" model=".password" show="touched" component="div" messages={{
                            required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }} className="d-flex justify-content-end">
                        <Button color="primary" onClick={nextPage}>Next</Button>
                    </Col>
                </Row>
            </FadeTransform>
        </div>
    );
}

export default PageOne;