import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { SeccionS, DivFlexCenterS, ListItemsS, ListS, ListItemTitlesS, ListItemSubtitlesS, ButtonServS} from '../Styled/GenStyles'
import { BsArrowRightShort } from "react-icons/bs";

export default class Servicios extends Component {
    render() {
        return (
            <SeccionS>
                <h1>Servicios</h1>

                <ReactBootStrap.Row className="flex d-flex justify-content-center">
                    <ReactBootStrap.Col xs={12} md={4} className="d-flex justify-content-center">

                                <DivFlexCenterS flexcomun>
                                    <ListS ListS >
                                        <ListItemTitlesS>Diseño</ListItemTitlesS>
                                        <ListItemSubtitlesS>Experiencia de usuario</ListItemSubtitlesS>
                                        <ListItemSubtitlesS> Interfaz de usuario</ListItemSubtitlesS>
                                        <ListItemSubtitlesS>Aplicaciones web</ListItemSubtitlesS>
                                        <ListItemSubtitlesS>Prueba de concepto</ListItemSubtitlesS>
                                        <ButtonServS>Ver servicios de diseño <BsArrowRightShort size={35}/></ButtonServS>
                                    </ListS >
                                    
                                </DivFlexCenterS>

                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} className="d-flex justify-content-center">

                                <DivFlexCenterS flexcomun>
                                    <ListS ListS>
                                        <ListItemTitlesS>Desarrollo</ListItemTitlesS>
                                        <ListItemSubtitlesS>Aplicaciones moviles</ListItemSubtitlesS>
                                        <ListItemSubtitlesS>Sitios web</ListItemSubtitlesS>
                                        <ListItemSubtitlesS>Aplicaciones web progresivas</ListItemSubtitlesS>
                                        <ButtonServS>Ver servicios de desarrollo<BsArrowRightShort size={35}/></ButtonServS>
                                    </ListS> 
                                    
                                </DivFlexCenterS>

                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} className="d-flex justify-content-center">

                                <DivFlexCenterS flexcomun>
                                    <ListS ListS>
                                        <ListItemTitlesS>Marca</ListItemTitlesS>
                                        <ListItemSubtitlesS>Identidad de marca</ListItemSubtitlesS>
                                        <ListItemSubtitlesS>Estrategia de marca</ListItemSubtitlesS>
                                        <ButtonServS>Ver servicios de marca<BsArrowRightShort size={35}/></ButtonServS>
                                    </ListS>
                                    
                                </DivFlexCenterS>

                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </SeccionS>
        )
    }
}
