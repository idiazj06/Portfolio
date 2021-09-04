import styled from 'styled-components'

const HeaderStyle = styled.div`
    width:100vw;
    background:#343a40;
    padding:40px;
    overflow-y:hidden;

    background: ${props => props.proyectos ? "#FFFFFE" : "343a40"};
    // text-align: ${props => props.proyectos ? "center" : ""};
    
`;
const TituloStyle = styled.h2`
    font-family: Nunito;
    font-style: normal;
    line-height: 80px;
    width:100%;

    font-size: ${props => props.titulocard ? "48px" : "64px"};
    color: ${props => props.titulocard ? "#0F0E17" : "#FFFFFE"};
    letter-spacing: ${props => props.titulocard ? "-0.005em" : "0.01em"};
`;

const SubTituloStyle = styled.p`
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #A7A9BE;
    padding-bottom:50px;
    width:100%;
    
    color: ${props => props.subtitulocard ? "#0F0E17" : "#A7A9BE"};
    letter-spacing: ${props => props.subtitulocard ? "-0.005em" : "0.01em"};
    margin-top: ${props => props.subtitulocard ? "20px" : "0"};


`;

const ArrowStyle = styled.p`
    color:#ff8906;
    margin-top:150px;
`;

const DivFlexCenterStyle = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    

    flex-direction: ${props => props.flexcomun ? "column" : ""};
`;

const ButtonStyle = styled.button`
    width: 320px;
    height: 64px;
    margin:0 auto;
    background:transparent;
    border: 2px solid #0F0E17;
    box-sizing: border-box
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #0F0E17;
`;

const DivServiciosStyle = styled.div`
   background: linear-gradient(135deg, #FEB692 0%, #EA5455 100%);
   padding:50px 40px;
   
   
`;

const ListItemsStyle = styled.li`
    list-style:none;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    color: #0F0E17;
`;

const ListItemTitlesStyle = styled(ListItemsStyle)`
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.01em;
`;
const ListItemSubtitlesStyle = styled(ListItemsStyle)`
    font-size: 24px;
    line-height: 40px;
`;


const ListStyle = styled.ul`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:start;
`;

const ButtonServStyle = styled.button`
    width: 268px;
    height: 48px;
    background: #0F0E17;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #FF8906;
    border:none;
    margin-top:30px;
`;





export const HeaderS = HeaderStyle
export const TituloS = TituloStyle
export const SubTituloS = SubTituloStyle
export const ArrowS = ArrowStyle
export const ButtonS = ButtonStyle
export const DivFlexCenterS = DivFlexCenterStyle
export const DivServiciosS = DivServiciosStyle
export const ListItemsS = ListItemsStyle
export const ListS = ListStyle
export const ListItemTitlesS = ListItemTitlesStyle
export const ListItemSubtitlesS = ListItemSubtitlesStyle
export const ButtonServS = ButtonServStyle
