/* eslint-disable no-loop-func */
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import "./AlbumCards.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function AlbumCards() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchAndSortData();
  }, []);

  const fetchAndSortData = async () => {
    var masterArray = [];
    var url =
      "https://imdb-api.com/en/API/SeasonEpisodes/k_9dw8i06v/tt0458290/";
    var newArrayID = 0;
    for (var i = 1; i < 8; i++) {
      await fetch(url + i)
        .then(async (response) => {
          // indicates whether the response is successful (status code 200-299) or not
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          const APIData = await response.json();
          return APIData;
        })
        .then((data) => {
          let currentSeasonList = data.episodes;
          for (let i = 0; i < currentSeasonList.length; i++) {
    
            let tempTitle = currentSeasonList[i].title;
            let tempSN = currentSeasonList[i].seasonNumber;
            let tempEN = currentSeasonList[i].episodeNumber;
            let tempPlot = currentSeasonList[i].plot;
            let tempImage = currentSeasonList[i].image;
            const episode = {
              id: newArrayID,
              title: tempTitle,
              seasonNumber: tempSN,
              episodeNumber: tempEN,
              plot: tempPlot,
              image: tempImage,
            };
          
            masterArray.push(episode);
            newArrayID++;
          }
        })
        .catch((error) => {
          alert("An Error occurred: " + error)
        }
        
        );
    }

    if(masterArray.length > 0) {
      masterArray.sort(function (a, b) {
        var nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
    }


    setApiData(masterArray);
  };

  return (
    <Container>
      <Grid container spacing={0} gap={4} margin="auto" justifyContent="center">
        {apiData.map((item, index) => (
          <Card
            sx={{
              maxHeight: "45%",
              maxWidth: 325,
              display: "flex",
              flexDirection: "column",
            }}
            key={index}
            variant="outlined"
          >
            <CardMedia
              component="img"
              className="episodeImage"
              src={item.image}
              alt="Related episode image from Star  Wars: The Clone Wars"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              {/* EpisodeTitle */}
              <Typography
                sx={{ fontWeight: "bold" }}
                gutterBottom
                variant="h5"
                component="h2"
                className="episodeTitle"
              >
                {item.title}
              </Typography>
              <Typography className="seasonAndEpisodeIndicator">
                {"Season " +
                  item.seasonNumber +
                  ", Episode " +
                  item.episodeNumber}
              </Typography>
              <Typography className="episodePlot" variant="h7">
                {/* Plot Title */}
                {item.plot}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default AlbumCards;
