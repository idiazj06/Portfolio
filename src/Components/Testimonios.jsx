import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap"
import { SeccionS, ImgTestimonioS, HeaderCardS, BodyCardS,HeaderCardSpanS,TituloTestimonioS } from '../Styled/GenStyles'
import { BsArrowRightShort } from "react-icons/bs";

export default class Testimonios extends Component {
    render() {
        return (
            <SeccionS darktheme>
                <TituloTestimonioS>TESTIMONIOS</TituloTestimonioS>
                <ReactBootStrap.Row className="flex d-flex justify-content-center">
                    <ReactBootStrap.Col xs={12} md={4} className="">

                            <HeaderCardS>
                                <ImgTestimonioS src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
                                <HeaderCardSpanS>Juan Antonio</HeaderCardSpanS>
                            </HeaderCardS>

                            <BodyCardS><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid voluptas eius neque necessitatibus commodi amet accusantium excepturi dolores rem ab sequi velit nobis asperiores tempore suscipit odit, ipsum veniam!</span></BodyCardS>
                            
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} className="">

                            <HeaderCardS>
                                <ImgTestimonioS src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
                                <HeaderCardSpanS>Juan Antonio</HeaderCardSpanS>
                            </HeaderCardS>

                            <BodyCardS><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid voluptas eius neque necessitatibus commodi amet accusantium excepturi dolores rem ab sequi velit nobis asperiores tempore suscipit odit, ipsum veniam!</span></BodyCardS>
                            
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs={12} md={4} className="">

                            <HeaderCardS>
                                <ImgTestimonioS src="https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg" alt="" />
                                <HeaderCardSpanS>Juan Antonio</HeaderCardSpanS>
                            </HeaderCardS>

                            <BodyCardS><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aliquid voluptas eius neque necessitatibus commodi amet accusantium excepturi dolores rem ab sequi velit nobis asperiores tempore suscipit odit, ipsum veniam!</span></BodyCardS>
                            
                    </ReactBootStrap.Col>
                    
                </ReactBootStrap.Row>
            </SeccionS>
        )
    }
}
