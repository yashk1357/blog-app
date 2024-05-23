import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';

function LoginOptions() {
  return (
        <Grid sx={{paddingTop: '200px'}} container direction="column" spacing={5} justifyContent="center" alignItems='stretch'>
            <Grid item >
                <Button sx={{height: '50px', width: '270px'}} href="/login" size="large" startIcon={<LoginOutlinedIcon />} color="success" variant="contained">Login</Button>
            </Grid>

            <Grid item >
            <Button sx={{height: '50px', width: '270px'}} href="/signup" size="large" startIcon={<AppRegistrationOutlinedIcon />}  variant="contained">Sign Up</Button>
            </Grid>

            <Grid item >
            <Button sx={{height: '50px', width: '270px'}} href="/google" size="large"  variant="contained">Login with google</Button>
            </Grid>
        </Grid>
        
  )
}

export default LoginOptions