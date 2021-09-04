import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { BsArrowDown, BsArrowDownShort } from "react-icons/bs";
import {HeaderS, TituloS,SubTituloS,ArrowS} from '../Styled/GenStyles'

export default class Header extends Component {
    render() {
        return (
            <HeaderS>
                <ReactBootStrap.Container>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col xs={12} md={6}>
                            <TituloS>¡Hola a todos!
                                Soy Ilan Diaz</TituloS>
                            <SubTituloS>Developer que le encanta implementar diseños que
                                inspiran y atraen a las personas.</SubTituloS>
                                <ArrowS><BsArrowDownShort size={70}/></ArrowS>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={12} md={6}>
                            <ReactBootStrap.Image src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630539253/Portfolio/img_fce3nl.png" thumbnail />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </HeaderS>
        )
    }
}
