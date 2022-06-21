import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Table } from './Table';
import { Box, Button, Grid, Typography } from '@mui/material';

export const Inventory = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 200, flex: 0.5 },
    { field: 'nombre', headerName: 'Nombre', width: 230, flex: 4 },
    { field: 'stock', headerName: 'Stock', width: 230, flex: 1 }
  ];
  const rows = [
    { id: 1, nombre: 'Tornillos', stock: "150" },
    { id: 2, nombre: 'Destornillador', stock: "5" },
    { id: 3, nombre: 'Cuchillo', stock: "9" }
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
          Inventario
        </Typography>
        <Box>
          <Button variant="contained" sx={{mx:1}}>Agregar producto</Button>
          <Button variant="contained" sx={{mx:1}} disabled>Eliminar producto</Button>
        </Box>
      </Box>
      <Table columns={columns} rows={rows}></Table>
    </Grid>
  );
}
