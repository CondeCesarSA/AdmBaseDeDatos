import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AlertStatus } from './AlertStatus';

export const Configuration = () => {
    const [alertVisible, setAlertVisible] = useState(false)
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        dateOfBirth: null,
        email: '',
        phoneNumber: '',
        dateOfAdmission: null,
        cuil: '',
        address: '',
        accessLevel: ''
    });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('UserInfo'));
        setValues({
            name: data.nombre,
            lastname: data.apellido,
            dateOfBirth: new Date(data.fechaNacimiento),
            email: data.email,
            phoneNumber: data.telefono,
            dateOfAdmission: new Date(data.fechaIngreso),
            cuil: data.cuil,
            address: data.direccion,
            accessLevel: data.accessLevel
        })
    }, []);

    const handleChange = (prop) => (event) => {
        if (prop == "dateOfBirth" || prop == "dateOfAdmission") {
            setValues({ ...values, [prop]: event });
        } else {
            setValues({ ...values, [prop]: event.target.value });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('UserInfo', JSON.stringify({
            nombre: values.name,
            apellido: values.lastname,
            fechaNacimiento: values.dateOfBirth,
            email: values.email,
            telefono: values.phoneNumber,
            fechaIngreso: values.dateOfAdmission,
            cuil: values.cuil,
            direccion: values.address,
            accessLevel: values.accessLevel
        }))
        setAlertVisible(true)
    };

    return (
        <Grid container component="main" sx={{
            mx: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
        }}>
            {
                alertVisible ?
                    <AlertStatus alertVisible={setAlertVisible}></AlertStatus>
                    : null
            }
            <Typography component="h1" variant="h5">
                Configuracion
            </Typography>
            <Grid item xs={12} sm={8} md={10} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        mx: 10,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: "90%" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField
                                sx={{ mt: 2, width: '45%' }}
                                variant="standard"
                                id="name"
                                type='text'
                                label="Nombre"
                                value={values.name}
                                onChange={handleChange('name')}
                            />
                            <TextField
                                sx={{ mt: 2, width: '45%' }}
                                variant="standard"
                                id="lastname"
                                type='text'
                                label="Apellido"
                                value={values.lastname}
                                onChange={handleChange('lastname')}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Fecha de nacimiento"
                                    inputFormat="dd/MM/yyyy"
                                    value={values.dateOfBirth}
                                    onChange={handleChange('dateOfBirth')}
                                    renderInput={(params) => <TextField variant="standard" sx={{ mt: 2, width: '45%' }} {...params} />}
                                />
                            </LocalizationProvider>
                            <TextField
                                sx={{ mt: 2, width: '45%' }}
                                variant="standard"
                                id="email"
                                type='text'
                                label="Email"
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField
                                sx={{ mt: 2, width: '45%' }}
                                variant="standard"
                                id="telefono"
                                type='text'
                                label="Telefono"
                                value={values.phoneNumber}
                                onChange={handleChange('phoneNumber')}
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Fecha de ingreso"
                                    inputFormat="dd/MM/yyyy"
                                    value={values.dateOfAdmission}
                                    onChange={handleChange('dateOfAdmission')}
                                    renderInput={(params) => <TextField variant="standard" sx={{ mt: 2, width: '45%' }} {...params} />}
                                />
                            </LocalizationProvider>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextField
                                sx={{ mt: 2, width: '45%' }}
                                variant="standard"
                                id="email"
                                type='text'
                                label="Cuil"
                                value={values.cuil}
                                onChange={handleChange('cuil')}
                            />
                            <TextField
                                sx={{ mt: 2, width: '45%' }}
                                variant="standard"
                                id="email"
                                type='text'
                                label="Direccion"
                                value={values.address}
                                onChange={handleChange('address')}
                            />
                        </Box>
                        <Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 8, mb: 4, width: "50%" }}
                            >
                                Guardar cambios
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}