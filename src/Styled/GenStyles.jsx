import styled from 'styled-components'

const HeaderStyle = styled.div`
    width:100vw;
    background:#343a40;
    padding:40px;
    display:grid;
`;
const TituloStyle = styled.h2`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 80px;
    color: #FFFFFE;
`;

const SubTituloStyle = styled.p`
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #A7A9BE;
`;

const ArrowStyle = styled.p`
    color:#ff8906;
    margin-top:150px;
`;

export const HeaderS =  HeaderStyle
export const TituloS =  TituloStyle
export const SubTituloS =  SubTituloStyle
export const ArrowS =  ArrowStyle
