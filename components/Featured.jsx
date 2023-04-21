import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Featured = () => {
  return (
    <Box
    px={20}
      sx={{
        borderRadius: "20px",
        objectFit: "cover",
        width: "100%",

        height: 300,
      }}
    >
      <img src="./public/g.webp"/>
    </Box>

  );
};

export default Featured;