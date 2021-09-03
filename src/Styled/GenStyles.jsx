import styled from 'styled-components'

const HeaderStyle = styled.div`
    width:100vw;
    background:#343a40;
    padding:40px;
    // display:grid;
    overflow-y:hidden;

    background: ${props => props.proyectos ? "#FFFFFE" : "343a40"};
    max-height: ${props => props.proyectos ? "250vh" : "100vh"};
    
`;
const TituloStyle = styled.h2`
    font-family: Nunito;
    font-style: normal;
    line-height: 80px;

    font-size: ${props => props.titulocard ? "48px" : "64px"};
    color: ${props => props.titulocard ? "#0F0E17" : "#FFFFFE"};
    letter-spacing: ${props => props.titulocard ? "-0.005em" : "0.01em"};
    width: ${props => props.titulocard ? "35%" : "100%"};
`;

const SubTituloStyle = styled.p`
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #A7A9BE;
    padding-bottom:50px;
    
    color: ${props => props.subtitulocard ? "#0F0E17" : "#A7A9BE"};
    letter-spacing: ${props => props.subtitulocard ? "-0.005em" : "0.01em"};
    width: ${props => props.subtitulocard ? "35%" : "100%"};
    margin-top: ${props => props.subtitulocard ? "20px" : "0"};
`;

const ArrowStyle = styled.p`
    color:#ff8906;
    margin-top:150px;
`;

const FlexStyle = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:start;
    flex-wrap:wrap; 
`;



export const HeaderS =  HeaderStyle
export const TituloS =  TituloStyle
export const SubTituloS =  SubTituloStyle
export const ArrowS =  ArrowStyle
export const FlexS =  FlexStyle

