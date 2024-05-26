import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function EditPostForm({id}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const {userInfo} = useSelector((state) => state.auth)
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(userInfo.token)
    const token = userInfo.token

     useEffect(() => {
     
      async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:3000/posts/${id}?token=${token}`);
          console.log('Post fetched:', response.data.id);
          setTitle(response.data.title);
          setDescription(response.data.description);
        } catch (error) {
          console.error('Error fetching post:', error);
          setError('Failed to fetch post');
        } finally {
          setLoading(false);
        } 

   }
      
   fetchData()}
      ,
      [id]
    )

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')

        try {
            const response = await axios.put(`http://localhost:3000/posts/${id}?token=${token}`,{
              title: title,
              description: description
            });
            console.log('Post Updated:', response.data);
            toast.success('Post Updated successfully!')
          } catch (error) {
            console.error('Error updating post:', error);
            setError('Failed to update post');
          } finally {
            setLoading(false);
          }   
      };

    return (
        <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Update Post
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
        <Button href='/your_posts'> Your Posts </Button>
      </Box>
    </Container>
    )
}

export default EditPostForm