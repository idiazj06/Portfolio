import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { HeaderS, TituloS, SubTituloS, ButtonS, DivFlexCenterS,BtnSubmitS } from '../Styled/GenStyles'
import { BsArrowRightShort } from "react-icons/bs";

export default class Proyectos extends Component {
    render() {
        return (
            <HeaderS proyectos>
                <ReactBootStrap.Row className="flex d-flex justify-content-center">
                    <ReactBootStrap.Col xs={12} md={5} className="d-flex justify-content-center">
                        <TituloS titulocard>Parece magia,funciona con código.</TituloS>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={5} className=" d-flex justify-content-center">
                        <SubTituloS subtitulocard>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</SubTituloS>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>




                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={12}>
                        <ReactBootStrap.Card >
                            <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" />
                            <ReactBootStrap.Card.Body className="bg-dark p-4">
                                <ReactBootStrap.Card.Title className="text-white">NetNet</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text className="text-light">
                                    Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.
                                </ReactBootStrap.Card.Text>
                                <BtnSubmitS type="button" value="Ver proyecto completo" />
                                <ReactBootStrap.Button className="m-2 p-2" variant="outline-warning">Ver código</ReactBootStrap.Button>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col xs={12} md={6}>
                        <ReactBootStrap.Card >
                            <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" />
                            <ReactBootStrap.Card.Body className="bg-dark p-4">
                                <ReactBootStrap.Card.Title className="text-white">Vuse</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text className="text-light">
                                    Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.
                                </ReactBootStrap.Card.Text>
                                <BtnSubmitS type="button" value="Ver proyecto completo" />
                                <ReactBootStrap.Button className="m-2 p-2" variant="outline-warning">Ver código</ReactBootStrap.Button>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs={12} md={6}>
                        <ReactBootStrap.Card >
                            <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" />
                            <ReactBootStrap.Card.Body className="bg-dark p-4">
                                <ReactBootStrap.Card.Title className="text-white">Otro proyecto</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text className="text-light">
                                    Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.
                                </ReactBootStrap.Card.Text>
                                <BtnSubmitS type="button" value="Ver proyecto completo" />
                                <ReactBootStrap.Button className="m-2 p-2" variant="outline-warning">Ver código</ReactBootStrap.Button>
                            </ReactBootStrap.Card.Body>
                        </ReactBootStrap.Card>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <DivFlexCenterS className="flex-center">
                    <ButtonS className="m-3 p-2 ">Ver mas proyectos <BsArrowRightShort size={35}/></ButtonS>
                </DivFlexCenterS>

            </HeaderS>
        )
    }
}
