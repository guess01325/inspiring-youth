// import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import {
  Link,
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

import Image from 'mui-image'

import "../assets/LevelUp.css";

export default function LevelUp(props) {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <img src="https://res.cloudinary.com/otisg/image/upload/v1679236048/community-level-up_f1fymm.webp" />
        <Typography
          variant="h2"
          sx={{
            margin: 5,
          }}
        >
          Community Level Up
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="size"
            src="https://res.cloudinary.com/otisg/image/upload/v1679237394/clu1_aiiwgk.webp"
          />

          <div>
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
          </div>
          <Box
            sx={{
              margin: 5,
            }}
          >
            <img
              className="size"
              src="https://res.cloudinary.com/otisg/image/upload/v1679237139/CLU_qvowiu.webp"
            />
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

          <div>
            <YouTube videoId="Qelo6xWWoOo" />
            <YouTube videoId="ba4eiqETg_I" />
          </div>

          {/* <div >
        
        <img className="size" src="https://res.cloudinary.com/otisg/image/upload/v1679238118/clu2_mhidty.webp" />
        <Link sx={{
          fontSize: 40
        }}   href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          Facebook
        </Link>
      </div> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                margin: 5,
              }}
            >
              <Image  src="https://res.cloudinary.com/otisg/image/upload/v1679239011/clu3_bogspg.webp" />
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
          </Box>
          <Typography sx={{
            height: 1,
            width: 1

        }} variant="h3">Contact Info</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "50%",
              width: "50%",
              justifyContent: "center",
              border: 2,
              borderColor: "black",
              borderRadius: 1,
            }}
          >
           
              <Link
                href="https://www.facebook.com/CommunityLevelUp"
                target="_blank"
              >
                <Image 
                  className="c-image-1"
                  src="https://res.cloudinary.com/otisg/image/upload/v1679239572/fb_like_udjpl6.png"
                />
              </Link>

              <Link>
                <Image
                  className="c-image"
                  src="https://res.cloudinary.com/otisg/image/upload/v1679239681/Naviage-Icon_dqsorx.png"
                />

                <h4>
                  322 State Street, New London, CT <br></br> 06320
                </h4>
              </Link>

              <Link
                href="https://www.facebook.com/CommunityLevelUp"
                target="_blank"
              >
                <Image
                  className="c-image"
                  src="https://res.cloudinary.com/otisg/image/upload/v1679241134/mail-2_xycmgg.png"
                />
              </Link>
              <h4>mdaniels@cluinc.org</h4>

              <Link
                href="https://www.facebook.com/CommunityLevelUp"
                target="_blank"
              >
                <Image
                  className="c-image"
                  src="https://res.cloudinary.com/otisg/image/upload/v1679240016/phone-icon2_zocawv.jpg"
                />
              </Link>

              <h4>(860) 381-4228</h4>
          
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
