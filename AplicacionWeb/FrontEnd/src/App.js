import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { LoginForm } from './components/LoginForm';
import Image from './assets/Background.jpg';

const App = () => {
    return(
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    transform: 'scaleX(-1)'
                }}
            />
            <LoginForm></LoginForm>
        </Grid>
    )
}

export default App;