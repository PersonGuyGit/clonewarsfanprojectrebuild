import * as React from 'react';
import './App.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Album from './Components/Album/Album';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <Album/>
  );
}

export default App;