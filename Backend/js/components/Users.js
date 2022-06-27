import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Table } from './Table';
import { Box, Button, Grid, Typography } from '@mui/material';

export const Users = () => {

  const columns = [
    { field: 'name', headerName: 'Nombre', width: 200, flex: 2 },
    { field: 'lastname', headerName: 'Apellido', width: 230, flex: 2 },
    { field: 'email', headerName: 'Email', width: 230, flex: 4 },
    { field: 'fechaIngreso', headerName: 'Fecha de ingreso', width: 130, flex: 3 },
    { field: 'direccion', headerName: 'Direccion', /*description: 'This column has a value getter and is not sortable.', sortable: false,*/ width: 160, valueGetter: (params) => `${params.row.direccion || ''}`, flex: 3 },
    { field: 'telefono', headerName: 'Telefono', /*type: 'number',*/ width: 90, flex: 2 },
  ];
  const rows = [
    {id: 1, name: 'Ezequiel', lastname: "q", email: "ezequiel@hotmail.com", fechaIngreso: "02/07/2001", direccion: "calle falsa 123", telefono: "1123232323"},
    {id: 2, name: 'Cesar', lastname: "c", email: "cesar@outlook.com", fechaIngreso: "10/09/1997", direccion: "calle falsa 123", telefono: "1123232323"},
    {id: 3, name: 'Paula', lastname: "g", email: "paula@gmail.com", fechaIngreso: "24/03/1990", direccion: "calle falsa 123", telefono: "1123232323"}
  ];

  return (
    <Grid container component="main" sx={{
      mx: 10,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Typography component="h1" variant="h5">
          Usuarios
        </Typography>
        <Box>
          <Button variant="contained" sx={{mx:1}}>Agregar usuario</Button>
          <Button variant="contained" sx={{mx:1}} disabled>Eliminar usuario</Button>
        </Box>
      </Box>
      <Table columns={columns} rows={rows}></Table>
    </Grid>
  );
}
