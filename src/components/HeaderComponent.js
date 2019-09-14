import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar dark color="dark" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        User Registration
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link ml-3" to='/dashboard'><span className="fa fa-tachometer fa-lg"></span>Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link ml-3" to='/userlist'><span className="fa fa-users fa-lg"></span>Users</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link ml-3" to='/signup'><span className="fa fa-user-plus fa-lg"></span>Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header