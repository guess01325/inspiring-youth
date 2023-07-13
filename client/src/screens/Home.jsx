// import { Link } from "react-router-dom";
import { Player } from "video-react";
import "../assets/Home.css";

import {
  Box,
  Card,
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
export default function Home(props) {
  const defaultTheme = createTheme();


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        {/* Title */}

        <Typography
          variant="h1"
          sx={{
            mt: 14,
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
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 2,
              }}
              variant="h3"
            >
              Where Leaders Grow
            </Typography>
          </Box>

          <Box>
            <Card
              sx={{
                maxWidth: 350,
                margin: "0 auto",
                padding: "0.1em",
                border: "none",
                boxShadow: "none"
              }}
            >
              <CardMedia
                component="img"
                image={
                  "https://res.cloudinary.com/otisg/image/upload/v1689216272/IYAM/hear105_hx5itp.png"
                }
                alt={"alt"}
                title={"heart"}
                sx={{
                  padding: "1em 1em 0 1em",
                  objectFit: "contain",
                }}
              />
            </Card>
            <Typography variant="h6">
              We increase school success and improve overall well-being using
              sustainable mentoring practices.
            </Typography>
            <Link href="/about">Learn More</Link>
          </Box>

          <Box>
            <Card
              sx={{
                maxWidth: 350,
                margin: "0 auto",
                padding: "0.1em",
                border: "none",
                boxShadow: "none"
              }}
            >
              <CardMedia
                component="img"
                image={
                  "https://res.cloudinary.com/otisg/image/upload/v1650296869/IYAM/gives3_k7m97e.webp"
                }
                alt={"alt"}
                title={"hands"}
                sx={{
                  mt: 2,
                  mb: 2,
                  padding: "1em 1em 0 1em",
                  objectFit: "contain",
                }}
              />
            </Card>
            <Typography variant="h6">
              We support curious and motivated youth and mentors through
              adventurous programs and a variety of services.
            </Typography>
            <Link href="mentorings/create">Register</Link>
          </Box>

          <Box>
            <Card
              sx={{
                margin: 2,
                maxWidth: 350,
                margin: "0 auto",
                padding: "0.1em",
                border: "none",
                boxShadow: "none"
}}
            >
              <CardMedia
                component="img"
                image={
                  "https://res.cloudinary.com/otisg/image/upload/c_scale,w_120/v1689216968/IYAM/hand105_rl6hdj_te8d1c.webp"
                }
                alt={"alt"}
                title={"hand"}
                sx={{
                  mt: 2,
                  mb: 2,
                  padding: "1em 1em 0 1em",
                  objectFit: "contain",
                }}
              />
            </Card>

            <Typography variant="h6">
              Donate to our cause, make a impact for your youth
            </Typography>
            <Link href="/donate">Donate</Link>
          </Box>

          <Box
          sx={{
            mb: 4
          }}>
            <Card
              sx={{
                maxWidth: 350,
                margin: "0 auto",
                padding: "0.1em",
                border: "none",
                boxShadow: "none"
              }}
            >
              <CardMedia
                component="img"
                image={
                  "https://res.cloudinary.com/otisg/image/upload/v1650296446/IYAM/give2_kdwd0x.webp"
                }
                alt={"alt"}
                title={"hug"}
                sx={{
                  padding: "1em 1em 0 1em",
                  objectFit: "contain",
                }}
              />
            </Card>
            <Typography variant="h6">
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
          <Typography variant="h1">Our Partners</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "1000px"
            }}
          >
            <Card
            
            sx={{
              width: "33.3%",
              border: "none", 
              boxShadow: "none"
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
              </Card>
            <Card
             sx={{
              width: "33.3%",
              border: "none", 
              boxShadow: "none"
            }}
            >


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
            </Card>
<Card
 sx={{
  width: "33.3%",
  border: "none",
   boxShadow: "none"
}}
>

            <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1679236048/IYAM/community-level-up_f1fymm.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                height: "364px",
                padding: "1em 1em 0 1em",
                objectFit: "contain",
              }}
            />
</Card>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
