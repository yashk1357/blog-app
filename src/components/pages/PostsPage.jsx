import { Box, Grid } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Post from '../Posts/Post'

function PostsPage() {
  return (
    <Box>
        <Header/>
        <Grid container >
            <Grid item xs={2}>
                <SideBar/>
            </Grid>
            <Grid item xs={7}>
                <Post/>
            </Grid>
        </Grid>

    </Box>
  )
}

export default PostsPage