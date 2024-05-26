import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import { useSelector } from 'react-redux';
import { Box, Container, Typography, CircularProgress, Grid, Button } from '@mui/material';
import PostCard from '../Posts/PostCard';

const YourPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const {userInfo} = useSelector((state) => state.auth)

  const fetchPosts = async () => {
    try {
      const token = userInfo.token; 
      const response = await axios.get(`http://localhost:3000/posts?token=${token}`);
      console.log(response.data.data)
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  },[]);



  return (
      <Box sx={{ mt: 4 }}>
        <Button href='/posts'>
          Go to Main
        </Button>
        <Typography variant="h4" gutterBottom>
          Your Posts
        </Typography>
        <Grid container margin={'0px'} justifyContent={'space-around'} > 
        {posts.length > 0 ? (
          posts.map((post) => (
            <Grid marginLeft={'2px'} marginBottom={'30px'} item md={3} xs={12}>
               <PostCard id={post.id} title={post.title} createdAt={post.created_at} description={post.description} initial={userInfo.account.full_name[0].toUpperCase()} isAuthor={userInfo? true:false} />
            </Grid>
          ))
        ) : (

          <Typography>No posts available.</Typography>
        )}
        </Grid>
      </Box>
  );
};

export default YourPostsPage;
