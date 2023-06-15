import { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import {
  Box,
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

    
    <div>
        <div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Call us</h2>
      </div>
      {displayNumber && <span>Phone: 123-450-855</span>}
      
        <div>

      <Link to="/about">About Us</Link>
        </div>
        <div>
      <Link to="/registrations/create">Register</Link>

        </div>
        </div>
      <div className="iconGroup">
        <a href="https://www.instagram.com/iyam_inc2021/" target="_blank">
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679058719/instagram_dyciqe.webp"
          />
        </a>
        <a href="https://twitter.com/IYAM_Inc" target="-blank">
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679059343/twitter_eeblzx.webp"
          />
        </a>
        <a href="https://www.youtube.com/user/Wix" target="-blank">
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679059355/youtube_pnwyvc.webp"
          />
        </a>
      </div>
    </div>
  );
}
