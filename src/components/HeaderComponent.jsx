import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';





class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            wells: []
        }
         // how to bind event handler in a constructor
        this.addWell = this.addWell.bind(this); 
        this.viewWell = this.viewWell.bind(this); 
       
    }

    //add well method created here
    //when we click on add well button, we will navigate to add well component
    addWell(){
        this.props.history.push('/Well'); //when we click on add well, this route will be called
    }

    viewWell(uwid){
        this.props.history.push(`/wellList/${uwid}`);
    }

   

    render() {
        return (
            <div>
                <Navbar collapseOnSelect fixed='top' expand='sm'>
                    <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/images/logo.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="logo"
                        /></Navbar.Brand>
                        <Navbar.Brand className = 'fw-bold ' style={{color: "#99C0DB"}} href="/"> WMS App</Navbar.Brand>
                        <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />
                        <Navbar.Collapse id = 'responsive-navbar-nav' className="justify-content-end">

                            <Nav>
                                <Nav.Link className = 'fw-bold' style={{color: "#99C0DB"}} href="/">Home</Nav.Link>
                                <Nav.Link className = 'fw-bold' style={{color: "#99C0DB"}} href="/addWell">Create Well</Nav.Link>
                                <Nav.Link className = 'fw-bold' style={{color: "#99C0DB"}} href="/wellList">View Wells</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        )
    }

}
export default HeaderComponent;


