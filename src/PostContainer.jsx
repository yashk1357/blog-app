import React from 'react'
import { Container } from '@mui/material'

function PostContainer({children}) {
  return (
    <Container maxWidth='auto'>
         {children}
    </Container>
  )
}

export default PostContainer