import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function CreatePostForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const {userInfo} = useSelector((state) => state.auth)
    console.log(userInfo)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Title:', title);
        console.log('Description:', description);
        setTitle('');
        setDescription('');
       
        navigate('/your_posts');
      };

    return (
        <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New Post
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            variant='outlined'
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
          />
          <TextField
            variant='outlined'
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            required
            multiline
            rows={4}
            placeholder='Description'
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
    )
}

export default CreatePostForm