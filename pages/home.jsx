import React from "react";
import Featured from "../components/Featured.jsx";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#dfc789",
        minHeight: "100vh"
      }}
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Featured />
    </Box>
  );
};

export default Home;
