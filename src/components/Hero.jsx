import React from 'react'
import {Box, Container, Grid, Stack, Typography} from '@mui/material'
import { blue, red } from '@mui/material/colors'


function Hero() {
  return (
    <Box >
      <Stack spacing={8}>
        <Typography variant='h5'>
          BlopApp
        </Typography>

        <Typography variant='h3' component='p'>
          Lorem ipsum similique eum? Itaque porro omnis dolores necessitatibus voluptatem repudiandae, nisi aperiam veritatis quo ea iure eaque sit?
        </Typography>

        <Typography variant='h4'>
          To create your own posts and share with world!
          <Typography variant='h4' component='a' href='/login_options'>Login</Typography>
        </Typography>
      </Stack>

    </Box>
  )
}

export default Hero