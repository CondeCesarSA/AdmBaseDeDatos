import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoLight from '../assets/logotipo_dark.png'

export const NavigationBar = () => {

    const [values, setValues] = useState({
        name: "",
        lastname: ""
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('UserInfo'));
        setValues({
            name: data.nombre,
            lastname: data.apellido
        })
    }, [values.name]);

    return (
        <Box sx={{ flexGrow: 0, background: "#000000" }}>
            <AppBar position="static" sx={{ background: "#303030" }}>
                <Toolbar>
                    {/*<IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
    </IconButton>*/}
                    {/*<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Kernel It Soluciones
</Typography>*/}
                    <Box component="img" src={LogoLight} alt="" sx={{ width: "10%", minWidth: "132px", marginRight: "72vw" }}></Box>

                    <Box sx={{ flexGrow: 0, marginRight: "3%" }}>
                        <Typography color="inherit">{values.name} {values.lastname}</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key="2"
                            component={RouterLink}
                            to="/"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Salir
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
