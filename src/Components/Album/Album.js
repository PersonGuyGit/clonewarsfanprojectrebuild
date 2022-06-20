import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AlbumCards from "../AlbumCards/AlbumCards";
import CustomAppBar from "../Appbar/CustomAppbar";
import episodes from '../JSON/OutputJsonV2.json'
import Fuse from 'fuse.js'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

theme.typography.h1 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5em",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.5rem",
  },
};

theme.typography.h5 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
};

export default function Album() {
  const fuse = new Fuse(episodes, {
    keys: ["episodeTitle", "plot"], includeScore: true
  });

  console.log(fuse);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="text.primary"
            >
              Star Wars: The Clone Wars
            </Typography>
            <Typography
              component="h2"
              variant="h2"
              align="center"
              padding-bottom="1rem"
              color="text.primary"
            >
              In Alphabetical Order
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              The one true viewing order, to bring balance to the force.
              <br /> Use this as a guide for disordered marathons of Star Wars:
              The Clone Wars.
            </Typography>
          </Container>
        </Box>
        <span>
          <AlbumCards justifyContent="center"></AlbumCards>
        </span>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This site was made using Python and the IMDb API, to sort the episodes
          into the correct order.
          <br />
          Then the frontend was made using React, as well as the MUI framework.
        </Typography>
        <Copyright/>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
