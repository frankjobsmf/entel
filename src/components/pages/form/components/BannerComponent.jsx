import React from 'react'
import styled from 'styled-components';

const CenteredDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
`;

const StyledH1 = styled.h1`
  font-weight: normal;
  color: #002EFF;
  font-size: 56px;
  font-family: Barlow;
  
  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    ont-weight: normal;
color: #002EFF;
font-family: Barlow;
display: flex;
flex-direction: column;

span {
  font-weight: bold;
}
  }
`;

const Circle = styled.div`
  width: 337.35px;
  height: 337.35px;
  border-radius: 50%;
  background-color: #F3F5FF;

  @media (max-width: 768px) {
    width: 123.93px;
    height: 123.93px;
  }
  `;

const LineSeparator = styled.hr`
        margin-top: 15px;
        border: 1px solid #CCCCCC; 
        margin-top: -60px;

        @media (max-width: 768px) {
          display: none;
        }
    `;

export const BannerComponent = () => {
  return (

    <>
      <CenteredDiv>
        <StyledH1>
          Formulario <span>de Prueba</span>
        </StyledH1>

        <Circle></Circle>

      </CenteredDiv>
      <LineSeparator />
    </>

  )
}
