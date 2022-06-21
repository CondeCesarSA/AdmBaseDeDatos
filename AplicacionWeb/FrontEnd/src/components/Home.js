import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Grid, Typography, CssBaseline, Box } from '@mui/material';
import { LoginForm } from './LoginForm'
import { KanbanBoard } from './KanbanBoard';
import { NavigationBar } from './NavigationBar';
import { SideBar } from './SideBar';
import { Configuration } from './Configuration';
import { Users } from './Users';
import { Dashboard } from './Dashboard';
import { Orders } from './Orders';
import { Inventory } from './Inventory';
import { Provider } from './Provider';
import { Invoice } from './Invoice';

export const Home = () => {

    useEffect(() => {
        if (!localStorage.getItem('UserOrders')) {
            const orders = require('../orders.json')
            localStorage.setItem('UserOrders', JSON.stringify(orders))
        }
        if (!localStorage.getItem('UserList')) {
            const users = require('../users.json')
            localStorage.setItem('UserList', JSON.stringify(users))
        }
    }, [])

    return (
        <Grid container component="main" sx={{ height: '100vh', overflow: 'hidden', background: '#e9eff4' }}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
                <NavigationBar></NavigationBar>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
                    <SideBar></SideBar>
                    <Routes>
                        <Route path="dashboard/*" element={<Dashboard />} />
                        <Route path="inventory" element={<Inventory />} />
                        <Route path="provider" element={<Provider />} />
                        <Route path="invoice" element={<Invoice />} />
                        <Route path="configuration" element={<Configuration />} />
                        <Route path="users" element={<Users />} />
                        <Route path="orders" element={<Orders />} />
                    </Routes>

                </Box>
            </Box>
        </Grid>
    )
}