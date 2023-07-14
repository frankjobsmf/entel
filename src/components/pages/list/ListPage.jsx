import React from 'react'
import styled from 'styled-components';
import { ListComponent } from './components/ListComponent';


const Title = styled.h3`
font-size: 30px;
font-family: Barlow;
font-weight: 600;
`;

const Text = styled.p`
font-size: 18px;
color: #191919;
font-family: Barlow;
`;



const CenteredComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveComponent = styled.div`
  padding: 20px;
  max-width: 100%;
  width: 825px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ListPage = () => {
  return (
    <CenteredComponent>
        <ResponsiveComponent>
            <Title>Lista Formulario</Title>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odio, vero dignissimos, sapiente a natus eum accusamus enim quasi accusantium eius? Alias rerum voluptatum nostrum quo. Harum unde obcaecati quidem!</Text>
            <ListComponent/>
        </ResponsiveComponent>    
    </CenteredComponent>
  )
}
