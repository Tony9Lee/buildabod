import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  IconButton,
} from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const handleSubmit = (event) => {
  event.preventDefault();
  // Handle registration logic here
};

const Featured = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <Box
      position="relative"
      display="flex"
      direction="row"
      alignItems="flex-start"
    >
      <img
        src="./public/background.jpg"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Box position="absolute" bottom={500} left={20} right={0} px={2} py={4}>
        {!isPlaying && (
          <img
            src="./public/cam.png"
            alt="Play button"
            style={{ width: 200, height: 200, cursor: "pointer" }}
            onClick={handlePlay}
          />
        )}
        <video
          ref={videoRef}
          style={{
            display: isPlaying ? "block" : "none",
            position: "absolute",
            left: "48%",
            bottom: "-90%",
            transform: "translate(-50%, -50%)",
          }}
          src="./public/video.mp4"
          width="1200"
          height="520"
          controls
        />
      </Box>
    </Box>
  );
};

export default Featured;
