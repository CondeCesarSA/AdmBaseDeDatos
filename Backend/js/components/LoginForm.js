import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LogoDark from '../assets/logotipo_light.png'

export const LoginForm = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailMessage, setEmailMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const orders = require('../users.json')

    const handleSubmit = (event) => {
        event.preventDefault();

        if (values.email == "test" && values.password == "test") {
            if (!localStorage.getItem('UserInfo')) {
                localStorage.setItem('UserInfo', JSON.stringify(orders.test))
            }
            navigate("/home")
        }
        else if (values.email == "user" && values.password == "user") {
            if (!localStorage.getItem('UserInfo')) {
                localStorage.setItem('UserInfo', JSON.stringify(orders.user))
            }
            navigate("/home")
        }
        else if (values.email == "admin" && values.password == "admin") {
            if (!localStorage.getItem('UserInfo')) {
                localStorage.setItem('UserInfo', JSON.stringify(orders.admin))
            }
            navigate("/home")
        }
        else {
            if (values.email == "") {
                setEmailError(true)
                setEmailMessage("Este campo no puede estar vacio")
            }
            else {
                setEmailError(true)
                setEmailMessage("El email o la contraseña son invalidos")
            }

            if (values.password == "") {
                setPasswordError(true)
                setPasswordMessage("Este campo no puede estar vacio")
            }
            else {
                setPasswordError(true)
                setPasswordMessage("El email o la contraseña son invalidos")
            }
        }

    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setEmailError(false)
        setPasswordError(false)
        setEmailMessage("")
        setPasswordMessage("")
    };

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                <Box component="img" src={LogoDark} alt="" sx={{ width: "50%", minHeight: "50px", minWidth: "190px" }}></Box>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        sx={{ mt: 2, width: '100%' }}
                        error={emailError}
                        helperText={emailMessage}
                        variant="standard"
                        id="email"
                        type='text'
                        label="Email Adrdess"
                        defaultValue={values.email}
                        onChange={handleChange('email')}
                    />
                    <TextField
                        sx={{ mt: 2, width: '100%' }}
                        error={passwordError}
                        helperText={passwordMessage}
                        variant="standard"
                        id="password"
                        type={values.showPassword ? "text" : "password"}
                        label="Password"
                        defaultValue={values.email}
                        onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 15, mb: 2 }}>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Grid>
    )
}