// import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
// import React from 'react'
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// function SideBar() {
//   return (
// //     <Container fixed  sx={{ border: "solid", borderColor: "blue"}}>
// //         <Grid container justifyContent='space-between' alignItems='center'>
// //             <Grid item>
// //                 <Typography variant='h4'>
// //                     Options
// //                 </Typography>
// //                 <Grid item>
// //                     Create New POst
// //                 </Grid>

// //                 <Grid item>
// //                     Your Posts
// //                 </Grid>
// //             </Grid>

// //             <Grid item>
// //                 <Button endIcon={<LogoutOutlinedIcon/>} variant='outlined'> Logout</Button>
// //             </Grid>
// //         </Grid>
// //     </Container>


//   )
// }

// export default PermanentDrawerLeft

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import {clearCredentials} from '../../slices/authSlice'
import { toast } from 'react-toastify';

const drawerWidth = 240;

export default function SideBar() {

    // const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(clearCredentials())
        navigate('/')
        toast.dark("Logged out!")
    }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" flexGrow={1}>
            Blog App
          </Typography>
          <Avatar></Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Toolbar />
          <Divider />
          <List>
            {[{ text: 'Create New Post', to: '/create_post' },
              { text: 'Your Posts', to: '/your_posts' },
              ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.to}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
        <Box>
          <List>
            {/* {[{ text: 'Profile', to: '/profile' },
              { text: 'Logout', to: '/logout' },].map((text, index) => ( */}
              <ListItem key={'profile'} disablePadding>
                    <ListItemButton component={Link} to='/profile'>
                        <ListItemIcon>
                           <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Profile"} />
                    </ListItemButton>
              </ListItem>

                <ListItem key={'logout'} disablePadding>
                    <ListItemButton onClick={handleLogout} >
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItemButton>
                </ListItem>
          </List>
        </Box>
      </Drawer>
      
    </Box>
  );
}

