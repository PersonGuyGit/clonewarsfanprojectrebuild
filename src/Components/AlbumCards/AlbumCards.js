import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import './AlbumCards.css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OutputJson from '../JSON/fixeddata.json' 

function AlbumCards({inputData}) {

  var InputObject = JSON.stringify(OutputJson);
  var DataJson = JSON.parse(InputObject);

  return (
    <Container>
    {/* End hero unit */}

    <Grid container spacing={0} gap={4} margin='auto' justifyContent='center'>
     {DataJson.map((item, index) => (
        <Card
            sx={{ maxHeight: '45%', maxWidth: 325, display: 'flex', flexDirection: 'column'}}
            key={index}
            variant="outlined"
          >
            <CardMedia
              component="img"
              className='episodeImage'
              src= {item.imageURL}
              alt="Image from Star Wars: The Clone Wars"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {/* EpisodeTitle */}
              <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="h2" className='episodeTitle'>
                  {item.episodeTitle}
              </Typography>
              <Typography className='seasonAndEpisodeIndicator'>
                {"Season " + item.seasonIndex + ", Episode " + item.episodeIndex}
              </Typography>
              <Typography className='episodePlot' variant='h7'>
                  {/* Plot Title */}
                  {item.plot}
              </Typography>
            </CardContent>
          </Card>  
      ))}  
    </Grid>
  </Container>
  )
}

export default AlbumCards