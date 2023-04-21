import React from "react";
import Featured from "../components/Featured.jsx"
import { Box, Typography } from "@mui/material";

const Home = () => {
    return (
      <Box
        backgroundColor="#dfc789"
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Featured />
      </Box>
    );
  };

export default Home;