// import { Link } from "react-router-dom";
import { Player } from "video-react";
import "../assets/Home.css";

import {
  Box,
  Link,
  Toolbar,
  cardMedia,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Grid,
  CardMedia,
} from "@mui/material";
;
export default function Home(props) {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container  component="main" maxWidth="xs" >
        <CssBaseline />

        {/* Title */}

        <Typography
          variant="h1"
          sx={{
            mt: 16,
          }}
        >
          Inspiring Youth & Mentors
        </Typography>

{/* Section 2 */}
        <Box
    
          sx={{
            margin: 2,
            padding: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 4,
              }}
              variant="h2"
            >
              Where Leaders Grow
            </Typography>
          </Box>
          <Box>
            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1686415466/well-being_uwu5bm.png"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />

            <Typography variant="p">
              We increase school success and improve overall well-being using
              sustainable mentoring practices.
            </Typography>
            <Link href="/about">Learn More</Link>
          </Box>

          <Box>
            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1650296869/gives3_k7m97e.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />
 
            <Typography variant="p">
              We support curious and motivated youth and mentors through
              adventurous programs and a variety of services.
            </Typography>
            <Link href="mentorings/create">Register</Link>
          </Box>
          <Box>
            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1650295179/giveS1_hkjqmp.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />

            <Typography variant="p">Donate to our cause, make a impact for your youth</Typography>
            <Link href="/donate">Donate</Link>
          </Box>

          <Box>
            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1650296446/give2_kdwd0x.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />

            <Typography variant="p">
              Great things are done by a series of small things brought together
              <br></br>
              Vincent Van Gogh
            </Typography>
            <Link>Get Involved</Link>
          </Box>
          <Box>

          <Player
            src="https://video.wixstatic.com/video/63347b_1108524e1cc34d2996d618c72e4b9433/480p/mp4/file.mp4"
            type="video/mp4"
            fluid={false}
          
          />
          </Box>
      
        </Box>

{/* Video */}

{/* Secton 3 */}
        <Box
    
          sx={{
            margin: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: 6,
          }}
        >
          <Typography variant="h4">Our Partners</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/c_scale,h_133,w_260/v1679057135/prevent-partner_jlwurc.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />

            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1679057153/community-level-up_dy7ah5.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />

            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1679057145/culture-coalition_fkpkaq.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
