import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import './AlbumCards.css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OutputJson from '../JSON/OutputJsonV2.json' 

function AlbumCards() {

  var InputObject = JSON.stringify(OutputJson);
  var DataJson = JSON.parse(InputObject);

  return (
    <Container>
    {/* End hero unit */}

    <Grid container spacing={0} gap={4} margin='auto' justifyContent='center'>
     {Object.keys(DataJson.episodeIndex).map((i) => (
        <Card
            sx={{ maxHeight: '45%', maxWidth: 325, display: 'flex', flexDirection: 'column'}}
            key={i}
            variant="outlined"
          >
            <CardMedia
              component="img"
              className='episodeImage'
              src= {DataJson.imageURL[i]}
              alt="Image from Star Wars: The Clone Wars"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {/* EpisodeTitle */}
              <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="h2" className='episodeTitle'>
                  {DataJson.episodeTitle[i]}
              </Typography>
              <Typography className='seasonAndEpisodeIndicator'>
                {"Season " + DataJson.seasonIndex[i] + ", Episode " + DataJson.episodeIndex[i]}
              </Typography>
              <Typography className='episodePlot'>
                  {/* Plot Title */}
                  {DataJson.plot[i]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">IMDB</Button>
              <Button size="small">WATCH</Button>
            </CardActions>
          </Card>  
      ))}  
    </Grid>
  </Container>
  )
}

export default AlbumCards

  {/* {cards.map((card) => (
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
              src= 'OutputJson.image[1]'
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {/* EpisodeTitle */}
              {/* <Typography gutterBottom variant="h5" component="h2">
                  {OutputJson.episodeTitle[1]}
              </Typography>
              {/* Plot Title */}
                {/* {OutputJson.plot} */}
              {/* <Typography>
                {/* {OutputJson.seasonIndex + OutputJson.episodeIndex} */}
              {/* </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card> */} 