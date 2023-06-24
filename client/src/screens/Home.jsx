import { Link } from "react-router-dom";
import { Player } from "video-react";
import "../assets/Home.css";

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


export default function Home(props) {
  return (
    <div>
      <div>
        <h1>Inspiring Youth</h1>
      </div>

      <Box className="container">
        
        <Box className="title"    sx={{
            margin: 4,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Where Leaders Grow</h1>
         <img
         src="https://res.cloudinary.com/otisg/image/upload/v1686415466/well-being_uwu5bm.png">
         
         </img>
          <p>
            We increase school success and improve overall well-being using
            sustainable mentoring practices.
          </p>
          <Link to="/about">Learn More</Link>
        </Box>


        <Box className="elements"
             sx={{
              margin: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1650296869/gives3_k7m97e.webp"
            alt="react logo"
          />
          <p>
            We support curious and motivated youth and mentors through
            adventurous programs and a variety of services.
          </p>
          <Link to="registrations/create">Register</Link>
        </Box>
        <Box
        className="element"
        sx={{
          margin: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        >
          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1650295179/giveS1_hkjqmp.webp"
            alt="react logo"
          />
          <Link to="/donate">Donate</Link>
          <p>Donate to our cause, make a impact for your youth</p>
        </Box>
        <Box
       className="element"
       sx={{
        margin: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
        >
          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1650296446/give2_kdwd0x.webp"
            alt="react logo"
          />
          <Link>Get Involved</Link>
          <p>
            Great things are done by a series of small things brought together
            <br></br>
            Vincent Van Gogh
          </p>
        </Box>
      </Box>

      
      
      <Box
        className="section-three"
        sm={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 4,
        }}
      >
        <Box
          className="video"
          sm={{
            margin: 10,
          }}
        >
          <Player
            src="https://video.wixstatic.com/video/63347b_1108524e1cc34d2996d618c72e4b9433/480p/mp4/file.mp4"
            type="video/mp4"
            fluid={false}
            height={450}
          />
        </Box>
        <Box
          sx={{
            margin: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "auto",
          }}
        >
          <Box
            sx={{
              alignment: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <h1>Our Partners</h1>
          </Box>
          <Box
            sx={{
              margin: 4,
            }}
          >
            <img src="https://res.cloudinary.com/otisg/image/upload/c_scale,h_133,w_260/v1679057135/prevent-partner_jlwurc.webp" />
          </Box>
          <Box
            sx={{
              margin: 4,
            }}
          >
            <img src="https://res.cloudinary.com/otisg/image/upload/v1679057153/community-level-up_dy7ah5.webp" />
          </Box>
          <Box
            sx={{
              margin: 4,
            }}
          >
            <img src="https://res.cloudinary.com/otisg/image/upload/v1679057145/culture-coalition_fkpkaq.webp" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
