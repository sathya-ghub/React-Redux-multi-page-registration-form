import React from 'react';
import { Control, Errors } from 'react-redux-form';
import { Alert, Col, Row, Label, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

function PageTwo(props) {
    const { previousPage, handleChange } = props;
    const { username, email, firstname, lastname, occupation, telephone } = props.userInfo;
    return (
        <div>
            <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
                <Row className="form-group">
                    <Label htmlFor="firstname" md={2}>First Name</Label>
                    <Col md={10}>
                        <Control.text onChange={handleChange('firstname')} model=".firstname" placeholder="First Name" className="form-control" autoComplete="off"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(25) }} />
                        <Errors className="text-danger" model=".firstname" show="touched" component="div" messages={{
                            required: 'Required', minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                    <Col md={10}>
                        <Control.text onChange={handleChange('lastname')} model=".lastname" placeholder="Last Name" className="form-control" autoComplete="off"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(25) }} />
                        <Errors className="text-danger" model=".lastname" show="touched" component="div" messages={{
                            required: 'Required', minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="lastname" md={2}>Occupation</Label>
                    <Col md={10}>
                        <Control.text onChange={handleChange('occupation')} model=".occupation" placeholder="Occupation" className="form-control" autoComplete="off"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                        <Errors className="text-danger" model=".occupation" show="touched" component="div" messages={{
                            required: 'Required', minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="telnum" md={2}>Telephone</Label>
                    <Col md={10}>
                        <Control.text onChange={handleChange('telephone')} model=".telephone" placeholder="Telephone" className="form-control" autoComplete="off"
                            validators={{ required, minLength: minLength(3), maxLength: maxLength(15), isNumber }} />
                        <Errors className="text-danger" model=".telephone" show="touched" component="div" messages={{
                            required: 'Required', minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 15 characters or less',
                            isNumber: 'Must be a number'
                        }} />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={{ size: 10, offset: 2 }} className="d-flex justify-content-between">
                        <Button color="secondary" onClick={previousPage}>Back</Button>
                        <Button type="submit" color="primary">Submit</Button>
                    </Col>
                </Row>
            </FadeTransform>
            <Alert color="primary">
                What we have so far:
            </Alert>
            <ListGroup>
                <ListGroupItem disabled tag="a" href="#"><span className="font-weight-bold">Username: </span><span className="font-weight-bold text-primary">{username}</span></ListGroupItem>
                <ListGroupItem disabled tag="a" href="#"><span className="font-weight-bold">Email: </span><span className="font-weight-bold text-primary">{email}</span></ListGroupItem>
                <ListGroupItem disabled tag="a" href="#"><span className="font-weight-bold">First Name: </span><span className="font-weight-bold text-primary">{firstname}</span></ListGroupItem>
                <ListGroupItem disabled tag="a" href="#"><span className="font-weight-bold">Last Name: </span><span className="font-weight-bold text-primary">{lastname}</span></ListGroupItem>
                <ListGroupItem disabled tag="a" href="#"><span className="font-weight-bold">Occupation: </span><span className="font-weight-bold text-primary">{occupation}</span></ListGroupItem>
                <ListGroupItem disabled tag="a" href="#"><span className="font-weight-bold">Telephone: </span><span className="font-weight-bold text-primary">{telephone}</span></ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default PageTwo;
