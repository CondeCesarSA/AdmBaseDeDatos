import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Table } from './Table';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Link as RouterLink} from "react-router-dom";

export const Invoice = () => {

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
                    Facturacion
                </Typography>
                <Box>
                    <Button 
                        variant="contained" 
                        component={RouterLink}
                        to="/pdf_file"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ mx: 1 }}
                    >
                        Abrir en una nueva ventana
                    </Button>
                    <Button variant="contained" sx={{ mx: 1 }} disabled>Eliminar usuario</Button>
                </Box>
            </Box>
        </Grid>
    );
}
