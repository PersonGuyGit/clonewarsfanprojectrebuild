import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AlbumCards from "../AlbumCards/AlbumCards";

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
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
              Star Wars: The Alphabetical Wars
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Use this guide for alphabetized Clone Wars marathons...
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
        Made with Python, the iMDB API, React, and MUI
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          This fan-made website is not made or associated with any rightholders of Star Wars
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
