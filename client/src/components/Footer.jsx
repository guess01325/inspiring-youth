import { useState, useEffect } from "react";
import "../assets/Footer.css";

import {
  Link,
  Box,
  BottomNavigation,
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Grid,
} from "@mui/material";

export default function Footer(props) {
  const [displayNumber, setDisplayNumber] = useState(false);

  const handleMouseEnter = () => {
    setDisplayNumber(true);
  };

  const handleMouseLeave = () => {
    setDisplayNumber(false);
  };
  return (
    <BottomNavigation
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        justifyContent: "space-between",
      }}
    >
      -
      <Box
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          sx={{
            margin: 4,
            
          }}
          className="call"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",  
              margin: 2,
            
            }}
          >
            <Typography
            sx={{
              bottom: "40px",
              textDecoration: "underline",
              fontSize: 30,
              backgroundColor: "#fff",
            }} variant="h4">Call us</Typography>
            {displayNumber && <span>Tel: 123-450-855</span>}
          </Box>
        </Link>

        <Link
          sx={{
            margin: 4,
            fontSize: 30,
          }}
          className="about"
          href="/about"
        >
          About Us
        </Link>

        <Link
          sx={{
            margin: 4,
            fontSize: 30,
          }}
          className="register"
          href="/mentorings/create"
        >
          Register
        </Link>
      </Box>
      <Box>
        <Link
          sx={{
            margin: 4,
          }}
          href="https://www.instagram.com/iyam_inc2021/"
          target="_blank"
        >
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679058719/instagram_dyciqe.webp"
          />
        </Link>
        <Link
          sx={{
            margin: 4,
          }}
          href="https://twitter.com/IYAM_Inc"
          target="-blank"
        >
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679059343/twitter_eeblzx.webp"
          />
        </Link>
        <Link
          sx={{
            margin: 4,
          }}
          href="https://www.youtube.com/user/Wix"
          target="-blank"
        >
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679059355/youtube_pnwyvc.webp"
          />
        </Link>
      </Box>
    </BottomNavigation>
  );
}
