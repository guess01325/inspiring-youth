import { Link } from "react-router-dom";
import { Player } from "video-react";
// import "./style/Home.css";

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
    <>
      <div>
        <h1>Inspiring Youth</h1>
      </div>

      <div>
      </div>
      <Box
        sx={{
          margin: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
        >
        <Box
          sx={{
            margin: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
          >
          <h1>Where Leaders Grow</h1>
          <p>
            We increase school success and improve overall well-being using
            sustainable mentoring practices.
          </p>

          <Link to="/about">Learn More</Link>
        </Box>

        <Box
          sx={{
            margin: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Link to="registrations/create">Register</Link>

          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1650296869/gives3_k7m97e.webp"
            alt="react logo"
          />
          <p>
            We support curious and motivated youth and mentors through
            adventurous programs and a variety of services.
          </p>
        </Box>

        <Box
          sx={{
            margin: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Link to="/donate">Donate</Link>
          <img
            src="https://res.cloudinary.com/otisg/image/upload/v1650295179/giveS1_hkjqmp.webp"
            alt="react logo"
          />
        </Box>

        <Box
          sx={{
            margin: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Link>Get Involved</Link>
          <p>
            Great things are done by a series of small things brought together
            Vincent Van Gogh
          </p>
        </Box>
      </Box>

      <div className="video">
        <Player
          src="https://video.wixstatic.com/video/63347b_1108524e1cc34d2996d618c72e4b9433/480p/mp4/file.mp4"
          type="video/mp4"
        />
      </div>

      <div className="partners">
        <h1>Our Partners</h1>
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679057135/prevent-partner_jlwurc.webp" />
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679057153/community-level-up_dy7ah5.webp" />
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679057145/culture-coalition_fkpkaq.webp" />
      </div>
    </>
  );
}
