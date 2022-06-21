import { Grid, Typography, CssBaseline, Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { KanbanBoard } from './KanbanBoard';
import { NavigationBar } from './NavigationBar';
import { SideBar } from './SideBar';

export const Dashboard = () => {
    return (
        /*<Grid container component="main" sx={{ height: '100vh' }}>*/
        <Grid container component="main" sx={{ 
            px: 8,
            py: 4,
            height: 'calc(100vh - 68.5px)',
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'space-evenly',
            width: '100vw', overflowX: 'auto',
            flexWrap: 'unset' }}>
            {/*<Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', overflowX: 'auto' }}>*/}
                <Typography component="h1" variant="h5">Panel principal</Typography>
                <KanbanBoard></KanbanBoard>
            {/*</Box>*/}
            

        </Grid>
    )
}