import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function CreatePostForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const {userInfo} = useSelector((state) => state.auth)
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(userInfo.token)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')

        try {
            const response = await axios.post('http://localhost:3000/posts', {
              title,
              description,
              token: userInfo.token
            });
            console.log('Post created:', response.data);
            toast.success('Post created successfully!')
            setTitle('');
            setDescription('');
            // Navigate back to posts page or any other page
            navigate('/your_posts');
          } catch (error) {
            console.error('Error creating post:', error);
            setError('Failed to create post');
          } finally {
            setLoading(false);
          }       
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