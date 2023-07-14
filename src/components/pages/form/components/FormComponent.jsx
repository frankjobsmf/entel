import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from './ui/Input'
import { Select } from './ui/Select';
import { useForm } from '../../../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const Marcas = [
    { nombre: 'Volkswagen' },
    { nombre: 'Audi' },
    { nombre: 'BMW' }
];

const ModelosPorMarca = {
    'Volkswagen': [
        { nombre: 'Golf GTI' },
        { nombre: 'Amarok' }
    ],
    'Audi': [
        { nombre: 'A3' },
        { nombre: 'A5' }
    ],
    'BMW': [
        { nombre: 'M3' },
        { nombre: 'M4' }
    ]
};

const InfoText = styled.h5`
font-size: 20px; 
color: #0C0C0C;
font-family: Barlow;
`;

const ContainerInputs = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 768px) {
    width: 100%;
  }
`;

const LineSeparator = styled.hr`
margin-top: 15px;
border: 1px solid #CCCCCC; 
@media (max-width: 768px) {
          width: 100%;
          text-align: center;
        }
    
`;

const Button = styled.button`
background: #002EFF;
color: #FFFFFF;
width: 140px;
border-radius: 100px;
padding: 12px 16px 12px 16px;
outline: none;
border: 0;
height: 48px;
font-size: 16px;
margin-top: 10px;
aling: right;
display: block;
margin-right: 0;
margin-left: auto;

@media (max-width: 768px) {
    margin: 0 auto;
    width: 211px;
  }
`;

const Form = styled.form`

@media (max-width: 768px) {
          width: 100%;
        }
    
`;

export const FormComponent = () => {
    const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
    const [modeloSeleccionado, setModeloSeleccionado] = useState('');
    const [modelos, setModelos] = useState([]);
    const [value, handleInputChange] = useForm({
        name: '',
        rut: '',
        patent: '',
        price: ''
    });
    const navigate = useNavigate();

    const handleMarcaChange = (event) => {
        const marcaId = event.target.value;
        setMarcaSeleccionada(marcaId);
        setModelos(ModelosPorMarca[marcaId]);
    };

    const handleModelChange = (e) => {
        const model = e.target.value;
        setModeloSeleccionado(model);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = {
            name: value.name,
            rut: value.rut,
            patent: value.patent,
            brand: marcaSeleccionada,
            model: modeloSeleccionado,
            price: value.price
        };

        if (!form.name) {
            return;
        }

        if (!form.rut) {
            return;
        }

        if (!form.patent) {
            return;
        }
        if (!form.brand) {
            return;
        }

        if (!form.model) {
            return;
        }

        if (!form.price) {
            return;
        }

        const getArray = localStorage.getItem('entel');

        if (getArray) {
            let entel = JSON.parse(getArray);
            entel.push(form);
            localStorage.setItem('entel', JSON.stringify(entel));
            navigate('listado');
        } else {
            let entel = [];
            entel.push(form);
            localStorage.setItem('entel', JSON.stringify(entel));
            navigate('listado');
        }

    }
    return (
        <Form>
            <InfoText>Datos del vendedor:</InfoText>
            <ContainerInputs>
                <Input name="name" value={value.name} onChange={handleInputChange} label="Nombre completo" wide type="text" />
                <Input name="rut" value={value.rut} onChange={handleInputChange} label="Rut Vendedor" type="text" />
            </ContainerInputs>
            <LineSeparator />
            <InfoText>Datos del vehículo:</InfoText>
            <ContainerInputs>
                <Input label="Patente del vehículo" name="patent" value={value.patent} onChange={handleInputChange} type="text" />
                <Select label="Marca del vehículo" value={marcaSeleccionada} onChange={handleMarcaChange} options={Marcas} />
                <Select label="Modelo del vehículo" value={modeloSeleccionado} onChange={handleModelChange} options={modelos} />
                <Input label="Precio del vehículo" name="price" value={value.price} onChange={handleInputChange} type="text" />
            </ContainerInputs>
            <LineSeparator />
            <Button type='submit' onClick={handleSubmit}>Enviar</Button>
        </Form>
    )
}
