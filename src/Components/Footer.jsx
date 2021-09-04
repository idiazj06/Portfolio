import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { FooterS, ContenedorFooterS, TextCopyrightS, LogosS, DivsContFooterS } from '../Styled/GenStyles'
import { BsArrowRightShort } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <FooterS >
                <ReactBootStrap.Row className=" d-flex justify-content-between align-items-center" >
                    <ReactBootStrap.Col xs={12} md={2} className="d-flex justify-content-center align-items-center">
                        <LogosS>Ilan Diaz</LogosS>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs={12} md={7} className="d-flex justify-content-center align-items-center">
                    <TextCopyrightS>Hecho con ❤ de Ilan. Copyright 2021 - Todos los derechos reservados</TextCopyrightS>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs={12} md={2} className="d-flex justify-content-center align-items-center">
                    <LogosS><FaGithub size={30} /></LogosS>
                    <LogosS><FaLinkedin size={30} /></LogosS>
                    <LogosS><FaTwitter size={30} /></LogosS>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                



            </FooterS >
        )
    }
}
