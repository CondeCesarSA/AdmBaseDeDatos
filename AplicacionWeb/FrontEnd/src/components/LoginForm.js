import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginForm = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setEmailError(false)
        setPasswordError(false)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (values.email == "test" && values.password == "test") {
            navigate("/home")
        }
        else {
            setEmailError("El email o la contraseña son invalidos")
            setPasswordError("El email o la contraseña son invalidos")
        }

        if (values.email == ""){
            setEmailError("El campo no puede estar vacio")
        }

        if (values.password == ""){
            setPasswordError("El campo no puede estar vacio")
        }
        
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
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
                <Typography component="h1" variant="h5">
                    Kernel IT Soluciones
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                        sx={{ mt: 2, width: '100%' }}
                            error={emailError}
                            helperText={emailError}
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
                            helperText={passwordError}
                            variant="standard"
                            id="password"
                            type= {values.showPassword? "text": "password"}
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