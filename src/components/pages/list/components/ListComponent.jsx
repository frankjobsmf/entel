import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  font-family: Barlow;
  font-size: 16px;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  font-family: Barlow;
  font-size: 14px;
`;

const DeleteIcon = styled.div`
  cursor: pointer;
  color: #002EFF;
  text-align: center;
`;

const NameCell = styled(TableCell)`
  width: 30%;
`;

const Label = styled.p`
  margin-top: 40px;
  text-align: center;
  font-family: Barlow;
  font-size: 16px;
  font-weight: bold;
`;

export const ListComponent = () => {

  const [entel, setEntel] = useState([]);

  useEffect(() => {
    const storedEntel = JSON.parse(localStorage.getItem('entel')) || [];
    const lastTen = storedEntel.slice(-10);
    setEntel(lastTen);
  }, []);

  const handleDelete = (id) => {
    const updatedEntel = entel.filter((item, index) => index !== id);
    setEntel(updatedEntel);
    localStorage.setItem('entel', JSON.stringify(updatedEntel));
  };

    return (
        <>
{
    (entel.length > 0 ) && <Table>
    <thead>
        <TableRow>
            <TableHeader>Nombre</TableHeader>
            <TableHeader>Rut vendedor</TableHeader>
            <TableHeader>Patente Vehiculo</TableHeader>
            <TableHeader>Marca Vehiculo</TableHeader>
            <TableHeader>Modelo Vehiculo</TableHeader>
            <TableHeader>Color Vehiculo</TableHeader>
            <TableHeader>Eliminar</TableHeader>
        </TableRow>
    </thead>
    <tbody>
        {
            entel.map((e, index) => (
                <TableRow>
                    <NameCell>{e.name}</NameCell>
                    <TableCell>{e.rut}</TableCell>
                    <TableCell>{e.patent}</TableCell>
                    <TableCell>{e.brand}</TableCell>
                    <TableCell>{e.model}</TableCell>
                    <TableCell>{e.price}</TableCell>
                    <TableCell>
                        <DeleteIcon >
                          
                              <FaTrash onClick={() => handleDelete(index)}/>
                          
                            
                        </DeleteIcon>
                    </TableCell>
                </TableRow>
            ))
        }
    </tbody>
</Table>
}
            
{
    (entel.length === 0 ) ? <Label>No hay registros.</Label> : <Label>{`Mostrando registros del 1 al ${entel.length} de un total de ${entel.length} registros.`}</Label>
}
            
        </>

    )
}
