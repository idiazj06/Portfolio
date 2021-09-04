import styled from 'styled-components'

const HeaderStyle = styled.div`
    background:#343a40;
    padding:40px;
    overflow-y:hidden;

    background: ${props => props.proyectos ? "#FFFFFE" : "343a40"};
    // text-align: ${props => props.proyectos ? "center" : ""};
    
`;
const TituloStyle = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    line-height: 80px;
    width:100%;

    font-size: ${props => props.titulocard ? "48px" : "64px"};
    color: ${props => props.titulocard ? "#0F0E17" : "#FFFFFE"};
    letter-spacing: ${props => props.titulocard ? "-0.005em" : "0.01em"};
`;



const SubTituloStyle = styled.p`
    font-family: 'Lora', serif;
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
    justify-content: ${props => props.flexcomun ? "" : "center"};
`;

const ButtonStyle = styled.button`
    width: 320px;
    height: 64px;
    margin:0 auto;
    background:transparent;
    border: 2px solid #0F0E17;
    box-sizing: border-box
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #0F0E17;
`;

const SeccionStyle = styled.div`
   background: linear-gradient(135deg, #FEB692 0%, #EA5455 100%);
   padding:50px 40px;

   background: ${props => props.darktheme ? "#343a40" : "linear-gradient(135deg, #FEB692 0%, #EA5455 100%)"};
   
   
   
`;

const ListItemsStyle = styled.li`
    list-style:none;
    font-family: 'Lora', serif;
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
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #FF8906;
    border:none;
    margin-top:30px;
`;

const ImgTestimonioStyle = styled.img`
width: 48px;
height: 48px;
border-radius:100%;
`

const HeaderCardStyle = styled.div`
width:100%;
    font-family: 'Lora', serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #F25F4C;


    display:flex;
    align-items: center;
    justify-content: flex-start;
    padding:20px 0;

`;

const HeaderCardSpanStyle = styled(HeaderCardStyle)`
    margin-left:10px;
`;
const BodyCardStyle = styled.div`
    font-family: 'Lora', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #FFFFFE;
`;

const TituloTestimonioStyle = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.005em;
    color: #FFFFFE;
`;

const FormularioStyle = styled.form`
    display:flex;
    flex-direction: column;    
    width:100%;
    background:#343a40;
    padding:30px;
    font-family: 'Lora', serif;

`;

const InputFormularioStyle = styled.input`
    padding:5px 10px;
    margin-bottom:10px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #0F0E17;
`;
const TextareaStyle = styled.textarea`
    padding:5px 10px;
    margin-bottom:10px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 40px;
    color: #0F0E17;
`;
const BtnSubmitStyle = styled.input`
    background: #FF8906;
    border:none;
    padding:10px;
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFE;
`;

const SpanFormularioStyle = styled.p`
    font-family: 'Lora', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    color: #A7A9BE;
    padding:20px 0;
`;

const ContenedorFooterStyle = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    text-align:center;
`;

const TextCopyrightStyle = styled.span`
    font-family: 'Lora', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    // text-align: center;
    color: #FFFFFE;
`;

const LogosStyle = styled.span`
    padding:5px;
    color: #FFFFFE;
    font-size:24px;
`;
const SocialLogosStyle = styled.span`
    font-family: 'Lora', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    // text-align: center;
    color: #FFFFFE;
`;

const DivsContFooterStyle = styled.div`
    width:calc(100/3);
`;

const FooterStyle = styled.div`
   width:100%;
   background: #343a40;
   padding:30px 20px;
   text-align:center;  
`;




export const HeaderS = HeaderStyle
export const TituloS = TituloStyle
export const SubTituloS = SubTituloStyle
export const ArrowS = ArrowStyle
export const ButtonS = ButtonStyle
export const DivFlexCenterS = DivFlexCenterStyle
export const SeccionS = SeccionStyle
export const ListItemsS = ListItemsStyle
export const ListS = ListStyle
export const ListItemTitlesS = ListItemTitlesStyle
export const ListItemSubtitlesS = ListItemSubtitlesStyle
export const ButtonServS = ButtonServStyle
export const ImgTestimonioS = ImgTestimonioStyle
export const HeaderCardS = HeaderCardStyle
export const BodyCardS = BodyCardStyle
export const TituloTestimonioS = TituloTestimonioStyle
export const HeaderCardSpanS = HeaderCardSpanStyle
export const FormularioS = FormularioStyle
export const InputFormularioS = InputFormularioStyle
export const TextareaS = TextareaStyle
export const BtnSubmitS = BtnSubmitStyle
export const SpanFormularioS = SpanFormularioStyle
export const ContenedorFooterS = ContenedorFooterStyle
export const TextCopyrightS = TextCopyrightStyle
export const LogosS = LogosStyle
export const DivsContFooterS = DivsContFooterStyle
export const FooterS = FooterStyle
