import React, { Component } from 'react'
import BarraNavegacion from '../Components/BarraNavegacion'
import Header from '../Components/Header'
import Proyectos from '../Components/Proyectos'



export default class ListContainer extends Component {
    render() {
        return (
            <>
               <BarraNavegacion/>
               <Header/>
               <Proyectos/>
            </>
        )
    }
}
