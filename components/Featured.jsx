import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const Featured = () => {
  return (
    <Box display="flex" direction="row" alignItems="flex-start">
      <Stack
        px={20}
        marginLeft={-60}
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <img src="./public/g.webp" style={{ borderRadius: "10px" }} />
      </Stack>
      <Box sx={{ paddingTop: "40px", width: "100%" }}>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          BUILD YOUR BODY!
        </Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          FIND YOUR SUSTENANCE!
        </Typography>
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          BE THE HERO!
        </Typography>
      </Box>
    </Box>
  );
};

export default Featured;
