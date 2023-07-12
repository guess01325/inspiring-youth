import { useState, useEffect } from "react";
import "../assets/Footer.css"


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
<BottomNavigation        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          justifyContent: "space-between"
        }} >
       

      

      
      
   -
        <Link className="call">

        <Typography variant="h4" >Call us</Typography>
        </Link>
     
      {displayNumber && <span>Phone: 123-450-855</span>}
      
      <Link className="about"      href="/about"
           >About Us</Link>
        
      
      <Link className="register"      href="/mentorings/create"
          >Register</Link>

      
      



        
        
      
        <Link href="https://www.instagram.com/iyam_inc2021/" target="_blank">
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679058719/instagram_dyciqe.webp"
          />
        </Link>
        <Link href="https://twitter.com/IYAM_Inc" target="-blank">
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679059343/twitter_eeblzx.webp"
          />
        </Link>
        <Link href="https://www.youtube.com/user/Wix" target="-blank">
          <img
            className="icons"
            src="https://res.cloudinary.com/otisg/image/upload/v1679059355/youtube_pnwyvc.webp"
          />
        </Link>
      

</BottomNavigation>
 
  
  );
}
