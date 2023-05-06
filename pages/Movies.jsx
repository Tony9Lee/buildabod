import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import SearchBar from "../components/SearchBar.jsx";


const Movies = () => {
  return <Box
  sx={{
    backgroundColor: "#040303",
    minHeight: "100vh",
    width: "100vw",
    overflow: "hidden",
  }}
  width="110vw"
  display="flex"
  justifyContent="center"
  alignItems="center"
>
  <Box
  position="relative"
  display="flex"
  direction="row"
  alignItems="flex-start">
    <img
        src="/reel.jpg"
        style={{ width: "1400px", height: "680px", objectFit: "cover" }}
      />
  </Box>
  <Box display ="flex" flexDirection="column" alignItems="center" position="absolute" bottom={565} left={50} right={0} px={2} py={4}>
    <Typography color="white" fontWeight={700}>Explore and Add your Favorite Movies to your Playlist!</Typography>

  <SearchBar/>
  </Box>
  

</Box>
};

export default Movies;
