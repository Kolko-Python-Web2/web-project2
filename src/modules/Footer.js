import React from 'react'
import "../Footer.css"
import { FaGithub } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function Footer() {
  return (
    
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
            backgroundColor: '#ffde57',
        }}
      >
        <Container maxWidth="sm">
        Designed by Web2.0 
        <br />
          <a href="https://github.com/Kolko-Python-Web2" target="_blank"><FaGithub /></a>
          <Copyright />
        </Container>
      </Box>
    
  );
}
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}