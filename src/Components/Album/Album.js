import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AlbumCards from '../AlbumCards/AlbumCards';
import CustomAppBar from '../Appbar/CustomAppbar';

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

const theme = createTheme({ 
  palette: {
    mode: 'dark',
  },
  
});




theme.typography.h1 = {
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.5rem',
  },
};


theme.typography.h5 = {
  '@media (min-width:600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  },
};


export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            }
          }
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant='h1'
              align="center"
              color="text.primary"
            >
              Star Wars: The Clone Wars
            </Typography>
            <Typography
              component="h3"
              variant='h3'
              align="center"
              padding-bottom="1rem"
              color="text.primary"
            >
              In Alphabetical Order
            </Typography>

            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The one true viewing order, to bring balance to the force.<br/> Use this as a guide for disordered marathons of Star Wars: The Clone Wars.
            </Typography>
          </Container>
        </Box>
        <span>
          <AlbumCards
          justifyContent='center'
          >

          </AlbumCards>
        </span>
        
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This site was made using Python and the IMDb API, to sort the episodes into the correct order.
          <br/>
          Then the frontend was made using React, as well as the MUI framework.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}


/*
<Container sx={{ py: 8 }} maxWidth="md">
          
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
*/