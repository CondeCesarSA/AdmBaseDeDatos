import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Table } from './Table';
import { Box, Button, Grid, Typography } from '@mui/material';

export const Orders = () => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, flex: 0.5 },
        { field: 'nombre', headerName: 'Nombre', width: 130, flex: 2 },
        { field: 'serie', headerName: 'Serie', width: 130, flex: 1.5 },
        { field: 'sistemaOperativo', headerName: 'Sistema operativo', width: 90, flex: 2 },
        { field: 'tipo', headerName: 'Tipo', width: 90, flex: 1.5 },
        { field: 'marca', headerName: 'Marca', width: 90, flex: 1.5 },
        { field: 'estado', headerName: 'Estado', width: 90, flex: 1.5 },
        { field: 'fechaCreacion', headerName: 'Fecha de creacion', width: 90, flex: 2 }
    ];

    const rows = [
        { id: 1, nombre: 'Samsung S20+', serie: null, sistemaOperativo: 'Android', tipo: 'Celular', marca: 'Samgung', estado: 'TO DO', fechaCreacion: "22/04/2022" },
        { id: 2, nombre: 'PC linux', serie: null, sistemaOperativo: 'Linux', tipo: 'PC', marca: 'Bangho', estado: 'IN PROCESS', fechaCreacion: "22/04/2022" },
        { id: 3, nombre: 'Macbook', serie: null, sistemaOperativo: 'iOS', tipo: 'PC', marca: 'Apple', estado: 'DONE', fechaCreacion: "22/04/2022" },
        { id: 4, nombre: 'samsung j2', serie: null, sistemaOperativo: 'Android', tipo: 'Celular', marca: 'Samsung', estado: 'BLOCKED', fechaCreacion: "22/04/2022" },
        { id: 5, nombre: 'Notebook Lenovo', serie: null, sistemaOperativo: 'Windows', tipo: 'PC', marca: 'Lenovo', estado: 'TO DO', fechaCreacion: "22/04/2022" }
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
                    Ordenes
                </Typography>
                <Box>
                    <Button variant="contained" sx={{ mx: 1 }}>Agregar orden</Button>
                    <Button variant="contained" sx={{ mx: 1 }} disabled>Eliminar orden</Button>
                </Box>
            </Box>
            <Table columns={columns} rows={rows}></Table>
        </Grid>
    );
}
