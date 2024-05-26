import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

const drawerWidth = 240;



export default function TopCreator() {
  const [creators, setCreators] = React.useState([])
  const {userInfo} = useSelector(state => state.auth)
  const token = userInfo.token

  useEffect(()=> {
  const fetchdata = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/top_creators?token=${token}`)
        console.log(response.data)
        setCreators(response.data)
      } catch (error) {
        console.log(error.message)
      }

    }

    fetchdata();
  },[])

  return (
    <Container sx={{marginTop: '60px', display: 'flex', justifyContent: 'space-evenly' }}>
      <CssBaseline />
      
      <Drawer
        sx={{marginTop: '20px',
            zIndex: 6,
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar />
        <Divider />
        <br></br>
        <Typography variant='h5'>
            Top Creators
        </Typography>
        <Divider />
        <List>
          {creators.map((acc) => (
            <ListItem key={acc.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <Avatar >
                  {acc.full_name[0].toUpperCase()}
                 </Avatar>
                </ListItemIcon>
                <ListItemText primary={acc.full_name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

      </Drawer>
    </Container>
  );
}
