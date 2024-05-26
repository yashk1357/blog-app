import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import TopCreator from '../Posts/TopCreator'
import Posts from '../Posts/Posts'

function PostsPage() {
  return (
    <Box>
        <Header/>
        <Grid container >
            <Grid item xs={2}>
                <SideBar/>
            </Grid>
            <Grid item xs={7} margin={"50px"}>
                <Typography variant='h1'>
                  ALL POSTS
                </Typography> 
                <Posts/>
            </Grid>
            <Grid item xs={3}>
                <TopCreator/>
            </Grid>
        </Grid>

    </Box>
  )
}

export default PostsPage