import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
position: relative;
margin-bottom: 20px;

@media (max-width: 768px) {
  width: 100%;
}
`;

const InputLabel = styled.label`
position: absolute;
top: -10px;
left: 10px;
background-color: white;
padding: 0 5px;
font-size: 14px;
color: #002EFF;
font-family: Barlow;
font-weight: bold;

&:after {
    content: '*';
    margin-left: 5px;
    color: #DC2020;
  }
`;

const StyledInput = styled.input`
border: 2px solid #002EFF;
border-radius: 6px;
padding: 10px;
font-size: 16px;
width: 225px;

@media (max-width: 768px) {
  width: 100%;
}
`;

const WideInput = styled(StyledInput)`
  width: 540px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Input = ({ label,wide, ...rest }) => {

    const InputComponent = wide ? WideInput : StyledInput;
    return (
        <InputContainer>
            <InputLabel>{label}</InputLabel>
            <InputComponent {...rest} />
        </InputContainer>
    )
}
