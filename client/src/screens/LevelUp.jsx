import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import {
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  CssBaseline,
  Box,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
} from "@mui/material";

import "../assets/LevelUp.css"

export default function LevelUp(props) {
  return (
    <Box
    sx={{
    
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        


      }}>
      <div>
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679236048/community-level-up_f1fymm.webp" />
      </div>

        <h1>Community Level UP</h1 >

      <div>
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679237394/clu1_aiiwgk.webp" />

        <img src="https://res.cloudinary.com/otisg/image/upload/v1679591316/social21_iv8ves.webp" />
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679591321/social22_wypiws.webp" />
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679591327/social23_uhdd7g.webp" />
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679591333/social24_a5jtrt.webp" />
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679591340/socail25_umezbc.webp" />
</div>
<div>
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679237139/CLU_qvowiu.webp" />
        <a href="https://playpass.com/NLCommunityTrack" target="_blank">
          Register for Sports Club
        </a>
      </div>

     
      <div>
        <YouTube videoId="Qelo6xWWoOo" />
        <YouTube videoId="ba4eiqETg_I" />
      </div>
     
      <div>
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679238118/clu2_mhidty.webp" />
        <a href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          Facebook
        </a>
      </div>
     
      <Box
         sx={{
    
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            
    
    
          }}>
        <img src="https://res.cloudinary.com/otisg/image/upload/v1679239011/clu3_bogspg.webp" />
        <a
          href="https://podcasters.spotify.com/pod/show/communitylevelup?fbclid=IwAR2QetXzkyKWmJTpzx6Z3Svig0usOvsoCKf1p1f2FWWJ2rPEdtFF4-c9lOQ"
          target="_blank"
        >
          Podcast
        </a>
      </Box>

      <Box
   sx={{
    margin: 10,
    border: 2,
    borderColor: "black",
    borderRadius: 1

   }}
      >
        <h1 className="c-info">Contact Info</h1>

        <div className="c-contacts">
        <a href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          <img className="c-image-1" src="https://res.cloudinary.com/otisg/image/upload/v1679239572/fb_like_udjpl6.png" />
        </a>
        </div>

        {/* <div className="c-contacts">
        <h4>Community Level UP</h4>
        <a
          href="https://www.google.com/maps/place/322+State+St,+New+London,+CT+06320/@41.3548976,-72.0988937,17z/data=!3m1!4b1!4m6!3m5!1s0x89e60e6121100001:0xf07f5149eb77b56e!8m2!3d41.3548976!4d-72.0988937!16s%2Fg%2F11hbms8tx6"
          target="_blank"
        />

        </div> */}


        <div className="c-contacts">

          <img className="c-image" src="https://res.cloudinary.com/otisg/image/upload/v1679239681/Naviage-Icon_dqsorx.png" />
        
        <h4>322 State Street, New London, CT <br></br> 06320</h4>
        </div>
        <div>
        <a href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          <img className="c-image" src="https://res.cloudinary.com/otisg/image/upload/v1679241134/mail-2_xycmgg.png" />
        </a>
        <h4>mdaniels@cluinc.org</h4>

        </div>
        <div className="c-contacts">
        <a href="https://www.facebook.com/CommunityLevelUp" target="_blank">
          <img className="c-image" src="https://res.cloudinary.com/otisg/image/upload/v1679240016/phone-icon2_zocawv.jpg" />
        </a>

        <h4>(860) 381-4228</h4>
        </div>
      </Box>
    </Box>
  );
}
