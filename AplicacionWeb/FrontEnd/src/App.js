import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { LoginForm } from './components/LoginForm';
import Image from './assets/Background-2.jpg';

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
                    //backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/005/308/621/non_2x/technical-support-icon-made-with-binary-code-customer-help-online-tech-support-customer-service-business-and-technology-concept-digital-matrix-background-with-digits-1-0-illustration-vector.jpg)',
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