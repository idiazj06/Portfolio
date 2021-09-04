import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { SeccionS, DivFlexCenterS, FormularioS, InputFormularioS, TextareaS, BtnSubmitS, TituloTestimonioS, SpanFormularioS} from '../Styled/GenStyles'
import { BsArrowRightShort } from "react-icons/bs";

export default class FormContatco extends Component {

    constructor(){
        super();
        this.state = {
            form: {
                nombre : "",
                email:"",
                mensaje:""
            }
        }
    }

    handleSubmit = e =>{
        e.preventDefault()
        this.mostrarAlerta()
    }

    mostrarAlerta = () =>{
        let nombre = this.state.form.nombre
        alert(`Muchas gracias ${nombre}, tu mensaje ha sido enviado con exito, pronto me pondre en contacto contigo!`)
        window.location.reload();
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) //imprimir todo el estado 
    }


    render() {
        return (
            <SeccionS >
                <DivFlexCenterS flexcomun action="">
                    <FormularioS  className="contenedor-form" onSubmit={this.handleSubmit}>
                        <div className="DivFlexCenterS flexcomun-header">
                            <TituloTestimonioS>Contacto</TituloTestimonioS>
                            <SpanFormularioS>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.</SpanFormularioS>
                        </div>
                        <InputFormularioS 
                        type="text" 
                        name="" id="nombre" 
                        placeholder="Nombre Completo"
                        name="nombre"
                        required=""
                        onChange={this.handleChange} />

                        <InputFormularioS 
                        type="email" name="" 
                        id="email" 
                        placeholder="Correo Electronico"
                        name="email"
                        required=""
                        onChange={this.handleChange} />

                        <TextareaS 
                        name="textarea" 
                        rows="10" 
                        cols="50" 
                        name="mensaje"
                        required=""
                        onChange={this.handleChange}/>

                        <BtnSubmitS type="submit" value="Enviar mensaje" />
                    </FormularioS>


                </DivFlexCenterS >
            </SeccionS>
        )
    }
}
