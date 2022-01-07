import styled from 'styled-components';
import logomini from '../assets/logomini.svg'
import { useContext } from 'react';
import ContextoUsuario from '../contexts/ContextoUsuario'

function Topo() {
    const { usuario } = useContext(ContextoUsuario)

    return (
        <Container>
            <img src={logomini} alt="logo"></img>
            <ImagemUsuario src={usuario.image} alt="imagem do usuário"></ImagemUsuario>
        </Container>
    )    
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    padding: 0 18px;

    position: fixed;
    left: 0px;
    top: 0px;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ImagemUsuario = styled.img`
    width: 51px;
    height: 51px;
    
    border-radius: 98.5px;
`;

export default Topo;