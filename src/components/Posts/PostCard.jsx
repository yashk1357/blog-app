import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate, useNavigate } from 'react-router-dom';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
};
export default function PostCard({ id, title, description, initial, createdAt, isAuthor=false}) {
  const navigate = useNavigate()
  const handleClick = (id)=> {
    navigate(`/edit/${id}`)
  }

  return (
    <Card sx={{ maxWidth: 310 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            {initial}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={formatDate(createdAt)}
      />
      <CardMedia
        component="img"
        height="194"
        image="/test.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       {
            isAuthor?  <IconButton aria-label="edit" onClick={() => handleClick(id)}>
                          <EditIcon/>

                        </IconButton> :   <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                          </IconButton>

       }
        
      </CardActions>
    </Card>
  );
}
