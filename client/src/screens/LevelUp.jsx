// import { Link } from "react-router-dom";

import YouTube from "react-youtube";
import {
  Link,
  Card,
  CardMedia,
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  CssBaseline,
  Box,
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
} from "@mui/material";

import Image from "mui-image";

import "../assets/LevelUp.css";

export default function LevelUp(props) {
  const theme = createTheme();

  const styles = theme => ({
    Card: {
      width: 300,
      margin: 'auto'
    },
    Media: {
      height: '100%',
      width: '100%'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

{/* Logo */}
<Card>

        <CardMedia
            component="img"
            image={
              "https://res.cloudinary.com/otisg/image/upload/v1679236048/community-level-up_f1fymm.webp"
            }
            alt={"alt"}
            title={"podcast"}
            sx={{
              mt: 14,
              objectFit: "contain" }}
          />
</Card>

        {/* <img 
        sx={{
          mt: 2
        }} src="https://res.cloudinary.com/otisg/image/upload/v1679236048/community-level-up_f1fymm.webp" /> */}
        <Typography
          variant="h2"
          sx={{
        mt: 2,
        mb: 2
          }}
        >
          Community Level Up
        </Typography>

{/* Pictures */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card>

              <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1679237394/clu1_aiiwgk.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
                mt: 2,
                mb: 2,
                objectFit: "contain"
              }}
            />
          </Card>
       

          <Box>
            <Link
              href="https://www.instagram.com/communitylevelupinc/?hl=en"
              target="_blank"
            >
              <img src="https://res.cloudinary.com/otisg/image/upload/v1679591316/social21_iv8ves.webp" />
            </Link>

            <Link
              href="https://www.facebook.com/CommunityLevelUp"
              target="_blank"
            >
              <img src="https://res.cloudinary.com/otisg/image/upload/v1679591321/social22_wypiws.webp" />
            </Link>

            <Link
              href="https://twitter.com/level_community/status/1279384329232232449"
              target="_blank"
            >
              <img src="https://res.cloudinary.com/otisg/image/upload/v1679591327/social23_uhdd7g.webp" />
            </Link>

            <Link
              href="https://www.youtube.com/@CommunityLevelUp"
              target="_blank"
            >
              <img src="https://res.cloudinary.com/otisg/image/upload/v1679591333/social24_a5jtrt.webp" />
            </Link>

            <Link
              href="https://www.tiktok.com/@communitylevelup"
              target="_blank"
            >
              <img src="https://res.cloudinary.com/otisg/image/upload/v1679591340/socail25_umezbc.webp" />
            </Link>
          </Box>

          <Box
            sx={{
              margin: 5,
            }}
          >

            <Card>

              <CardMedia
              component="img"
              image={
                "https://res.cloudinary.com/otisg/image/upload/v1679237139/CLU_qvowiu.webp"
              }
              alt={"alt"}
              title={"podcast"}
              sx={{
            
                objectFit: "contain",
              }}
            />
            </Card>
         
            <Link
              sx={{
                fontSize: 40,
              }}
              href="https://playpass.com/NLCommunityTrack"
              target="_blank"
            >
              Register for Sports Club
            </Link>
          </Box>

{/* Youtube */}
       <Box>
            <YouTube videoId="Qelo6xWWoOo" />
            <YouTube videoId="ba4eiqETg_I" />

       </Box>
      

          <CardMedia
            component="img"
            image={
              "https://res.cloudinary.com/otisg/image/upload/v1679239011/clu3_bogspg.webp"
            }
            alt={"alt"}
            title={"podcast"}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
    

          <Link
            sx={{
              fontSize: 40,
            }}
            href="https://podcasters.spotify.com/pod/show/communitylevelup?fbclid=IwAR2QetXzkyKWmJTpzx6Z3Svig0usOvsoCKf1p1f2FWWJ2rPEdtFF4-c9lOQ\"
            target="_blank"
          >
            Podcast
          </Link>
        </Box>

{/* Contact */}
          <Typography
            sx={{
              margin: "40px"
            }}
            variant="h3"
          >
            Contact Info
          </Typography>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          float: "center",
          // border: 2,
          // borderColor: "black",
          // borderRadius: 2,
        }}
      >
        <Link
        sx={{
          height: "auto",
          width: "auto"
        }} 
         href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          <Image
            className="c-image-1"
            src="https://res.cloudinary.com/otisg/image/upload/c_scale,h_80,w_80/v1679239572/fb_like_udjpl6.png"
            />
          <Typography variant="p">Facebook</Typography>
        </Link>

        <Link
           sx={{
            height: "auto",
            width: "auto"
          }}
        href="https://www.google.com/maps/place/322+State+St,+New+London,+CT+06320/@41.3548976,-72.0988937,17z/data=!3m1!4b1!4m6!3m5!1s0x89e60e6121100001:0xf07f5149eb77b56e!8m2!3d41.3548976!4d-72.0988937!16s%2Fg%2F11hbms8tx6?entry=ttu" target="_blank">
          <Image
            className="c-image"
            src="https://res.cloudinary.com/otisg/image/upload/c_scale,w_80/v1679239681/Naviage-Icon_dqsorx.png"
          />

          <Typography variant="p">
            322 State Street, New London, CT <br></br> 06320
          </Typography>
        </Link>

        <Link href="/email"
           sx={{
            height: "auto",
            width: "auto"
          }}>
          <Image
            className="c-image"
            src="https://res.cloudinary.com/otisg/image/upload/c_scale,w_80/v1679241134/mail-2_xycmgg.png"
          />
          <Typography variant="p">mdaniels@cluinc.org</Typography>
        </Link>

        <Link
           sx={{
            height: "auto",
            width: "auto"
          }} href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          <Image
            className="c-image"
            src="https://res.cloudinary.com/otisg/image/upload/c_scale,w_80/v1679240016/phone-icon2_zocawv.jpg"
            />
          <Typography variant="p">(860) 381-4228</Typography>
        </Link>
      </Box>
            </Container>
    </ThemeProvider>
  );
}
