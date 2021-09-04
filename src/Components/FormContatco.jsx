import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { SeccionS, DivFlexCenterS, FormularioS, InputFormularioS, TextareaS, BtnSubmitS, TituloTestimonioS, SpanFormularioS} from '../Styled/GenStyles'
import { BsArrowRightShort } from "react-icons/bs";

export default class FormContatco extends Component {
    render() {
        return (
            <SeccionS >
                <DivFlexCenterS flexcomun action="">
                    <FormularioS  className="contenedor-form">
                        <div className="DivFlexCenterS flexcomun-header">
                            <TituloTestimonioS>Contacto</TituloTestimonioS>
                            <SpanFormularioS>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</SpanFormularioS>
                        </div>
                        <InputFormularioS type="text" name="" id="nombre" placeholder="Nombre Completo" />
                        <InputFormularioS type="email" name="" id="email" placeholder="Correo Electronico" />
                        <TextareaS name="textarea" rows="10" cols="50">Mensaje</TextareaS>
                        <BtnSubmitS type="submit" value="Enviar mensaje" />
                    </FormularioS>


                </DivFlexCenterS >
            </SeccionS>
        )
    }
}
