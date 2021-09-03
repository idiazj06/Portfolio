import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { HeaderS, TituloS, SubTituloS, FlexS } from '../Styled/GenStyles'

export default class Proyectos extends Component {
    render() {
        return (
            <HeaderS proyectos>
                <FlexS className="flex">
                    <TituloS titulocard>Parece magia,funciona con código.</TituloS>
                    <SubTituloS subtitulocard>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</SubTituloS>
                </FlexS>

                

                <FlexS>
                    <ReactBootStrap.Card style={{ width: '90%', margin:'auto' }}>
                        <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" />
                        <ReactBootStrap.Card.Body className="bg-dark p-4">
                            <ReactBootStrap.Card.Title className="text-white">NetNet</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="text-light">
                                Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.
                            </ReactBootStrap.Card.Text>
                            <ReactBootStrap.Button className="m-2 p-2 text-white" variant="warning">Ver proyecto completo</ReactBootStrap.Button>
                            <ReactBootStrap.Button className="m-2 p-2" variant="outline-warning">Ver código</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card style={{ width: '49%', margin:'auto' }}>
                        <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" />
                        <ReactBootStrap.Card.Body className="bg-dark p-4">
                            <ReactBootStrap.Card.Title className="text-white">Vuse</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="text-light">
                                Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.
                            </ReactBootStrap.Card.Text>
                            <ReactBootStrap.Button className="m-2 p-2 text-white" variant="warning">Ver proyecto completo</ReactBootStrap.Button>
                            <ReactBootStrap.Button className="m-2 p-2" variant="outline-warning">Ver código</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>
                    <ReactBootStrap.Card style={{ width: '49%', margin:'auto' }}>
                        <ReactBootStrap.Card.Img variant="top" src="https://res.cloudinary.com/duaokxfsp/image/upload/v1630543894/Portfolio/screenshot-idiazj06.github.io-2021.09.01-19_50_47_gy3iuo.png" />
                        <ReactBootStrap.Card.Body className="bg-dark p-4">
                            <ReactBootStrap.Card.Title className="text-white">Otro proyecto</ReactBootStrap.Card.Title>
                            <ReactBootStrap.Card.Text className="text-light">
                                Niko es una de las marcas y proveedores de equipamiento deportivo más  reconocidas y valiosas en todo el mundo.
                            </ReactBootStrap.Card.Text>
                            <ReactBootStrap.Button className="m-2 p-2 text-white" variant="warning">Ver proyecto completo</ReactBootStrap.Button>
                            <ReactBootStrap.Button className="m-2 p-2" variant="outline-warning">Ver código</ReactBootStrap.Button>
                        </ReactBootStrap.Card.Body>
                    </ReactBootStrap.Card>

                    <button className="m-3 p-2">Ver mas proyectos</button>
                </FlexS>
            </HeaderS>
        )
    }
}
