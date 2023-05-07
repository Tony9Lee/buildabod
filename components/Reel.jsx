import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const Reel = ({ items, title }) => {

  return (
    <Box
      sx={{
        marginBottom: "20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{ marginLeft: "70px", marginBottom: "10px", color: "white", fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      
      >
        <ArrowBackIosOutlined
          sx={{ fontSize: "50px", color: "grey", cursor: "pointer" }}
        />
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "225px",
              height: "120px",
              backgroundColor: "white",
            }}
          >
            <Typography>{item}</Typography>
          </Box>
        ))}
        <ArrowForwardIosOutlined
          sx={{ fontSize: "50px", color: "grey", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default Reel;
