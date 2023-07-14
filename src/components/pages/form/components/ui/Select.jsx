import React from 'react'
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const SelectContainer = styled.div`
position: relative;
margin-bottom: 20px;

@media (max-width: 768px) {
  width: 100%;
}
`;

const SelectLabel = styled.label`
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

const SelectInput = styled.select`
border: 2px solid #002EFF;
border-radius: 6px;
padding: 10px;
font-size: 16px;
width: 225px;

@media (max-width: 768px) {
  width: 100%;
}
`;

export const Select = ({ label, options, ...rest }) => {


  return (
      <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <SelectInput {...rest}>
      <option value=""></option>
        {options.map((option) => (
          <option value={option.nombre} key={option.nombre}>
            {option.nombre}
          </option>
        ))}
      </SelectInput>
      
    </SelectContainer>
  )
}
