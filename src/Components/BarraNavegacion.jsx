import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import {  BtnSubmitS} from '../Styled/GenStyles'

export default class BarraNavegacion extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootStrap.Container>
                        <ReactBootStrap.Navbar.Brand href="#home">Ilan Diaz</ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav.Link href="#features">Hola</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#pricing">Proyectos</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#pricing">Testimonios</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#pricing">Servicios</ReactBootStrap.Nav.Link>
                                
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                                <BtnSubmitS type="button" value="Descargar Curriculum" />
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>
                    </ReactBootStrap.Container>
                </ReactBootStrap.Navbar>
            </div>
        )
    }
}

