import styled from 'styled-components'

const HeaderStyle = styled.div`
    width:100vw;
    background:#343a40;
    padding:40px;
    // display:grid;

    background: ${props => props.proyectos ? "white" : "343a40"};
`;
const TituloStyle = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    color: #FFFFFE;

    font-family: ${props => props.titulo ? "Lora" : "Nunito"};
    font-weight: ${props => props.titulo ? "normal" : "bold"};
    font-size: ${props => props.titulo ? "32px" : "64px"};
    line-height: ${props => props.titulo ? "40px" : "80px"};
    color: ${props => props.titulo ? "#0F0E17" : "#FFFFFE"};
`;

const SubTituloStyle = styled.p`
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #A7A9BE;
    
    font-size: ${props => props.subtitulo ? "20px" : "24px"};
    line-height: ${props => props.subtitulo ? "32px" : "40px"};
    color: ${props => props.subtitulo ? "#0F0E17" : "#A7A9BE"};
`;

const ArrowStyle = styled.p`
    color:#ff8906;
    margin-top:150px;
`;

export const HeaderS =  HeaderStyle
export const TituloS =  TituloStyle
export const SubTituloS =  SubTituloStyle
export const ArrowS =  ArrowStyle
