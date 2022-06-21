import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Table } from './Table';
import { Box, Button, Grid, Typography } from '@mui/material';

export const Provider = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 200, flex: 0.5 },
    { field: 'marca', headerName: 'Marca', width: 230, flex: 2 },
    { field: 'material', headerName: 'Material', width: 230, flex: 2 },
    { field: 'nombreEnte', headerName: 'Nombre Ente', width: 230, flex: 2 }
  ];
  const rows = [
    { id: 1, marca: 'Test', material: 'Test', nombreEnte: 'Test' }
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
          Proveedor
        </Typography>
        <Box>
          <Button variant="contained" sx={{mx:1}}>Agregar proveedor</Button>
          <Button variant="contained" sx={{mx:1}} disabled>Eliminar proveedor</Button>
        </Box>
      </Box>
      <Table columns={columns} rows={rows}></Table>
    </Grid>
  );
}
