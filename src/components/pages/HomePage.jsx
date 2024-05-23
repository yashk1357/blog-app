import React from 'react'
import Hero from '../Hero'
import { Box } from '@mui/material'
import { red } from '@mui/material/colors'

function HomePage() {
  return (
    <Box bgcolor={red}>
       <Hero/>
    </Box>
  )
}

export default HomePage