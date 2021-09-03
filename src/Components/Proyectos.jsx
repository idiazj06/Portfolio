import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { HeaderS, TituloS, SubTituloS } from '../Styled/GenStyles'

export default class Proyectos extends Component {
    render() {
        return (
            <HeaderS proyectos>
                <TituloS titulo>Parece magia, pero funciona con código.</TituloS>
                <SubTituloS subtitulo>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</SubTituloS>

                <ReactBootStrap.Container>
                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col xs={12} md={6}>
                            <div className="caption-imagen bg-dark">
                                <h2>NIKO</h2>
                                <p>Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.</p>
                                <ReactBootStrap.Button variant="outline-warning">Warning</ReactBootStrap.Button>{' '}
                                <ReactBootStrap.Button variant="warning">Warning</ReactBootStrap.Button>{' '}
                            </div>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col xs={12} md={6}>
                            <ReactBootStrap.Image src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" fluid />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>
            </HeaderS>
        )
    }
}
