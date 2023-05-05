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

  const handlePause = () => {
    setIsPlaying(false);
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
    src="/background.jpg"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
  <Box position="absolute" bottom={500} left={20} right={0} px={2} py={4}>
    {(!isPlaying && (
      <img
        src="/cam1.jpg"
        alt="Play button"
        style={{ width: 200, height: 200, borderRadius: 115, cursor: "pointer" }}
        onClick={handlePlay}
      />
    )) || (
      <img
        src="/cam2.jpg"
        alt="Pause button"
        style={{ width: 200, height: 200, borderRadius: 115, cursor: "pointer" }}
        onClick={handlePause}
      />
    )}
    <video
      ref={videoRef}
      style={{
        display: isPlaying ? "block" : "none",
        position: "absolute",
        left: "48%",
        bottom: "-22%",
        transform: "translate(-50%, -50%)",
      }}
      src="/video.mp4"
      width="1200"
      height="520"
      controls
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
    />
  </Box>
</Box>
  );
};

export default Featured;
