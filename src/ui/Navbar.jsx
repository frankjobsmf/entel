import React from 'react'
import entel from "../assets/entel.png";
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 90px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Button = styled(Link)`
padding: 8px 16px 8px 16px;
border: 0;
border-radius: 24px;
outline: none;
color: #002EFF;
font-size: 18px;
font-weight: 800;
margin-left: 10px;
text-decoration: none;
font-family: Barlow;

${(props) =>
    props.$isActive
      ? `
  background: #F3F5FF;
`
      : ''}

    @media (max-width: 768px) {
      padding: 5px;
      max-width: 320px;
      margin-right: 30px;
      background: #fff;
    }

`

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarContainer>
      <Logo src={entel} alt="Logo" />
      <Spacer />
      <DivButton>
        <Button to="/" $isActive={location.pathname === '/'}>Formulario</Button>
        <Button to="/listado" $isActive={location.pathname === '/listado'}>Lista formulario</Button>
      </DivButton>
    </NavbarContainer>
  )
}
