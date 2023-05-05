import React from "react";
import { Box } from "@mui/material";

const Movies = () => {
  return <Box
  sx={{
    backgroundColor: "#040303",
    minHeight: "100vh",
  }}
  width="100vw"
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


</Box>
};

export default Movies;
