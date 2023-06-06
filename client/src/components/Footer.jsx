import {Link} from "react-router-dom";
import {
    Toolbar,
    Button,
    IconButton,
    SearchIcon,
    Typography
  } from "@mui/material";

export default function Footer(props) {
    return(
<Toolbar>
        <div className="footer">
           <h2>call us</h2>
           <h2>find us</h2>
           <Link to="/registrations/create">Register</Link>
           <a href="https://www.instagram.com/iyam_inc2021/" target="_blank">

           <img src="https://res.cloudinary.com/otisg/image/upload/v1679058719/instagram_dyciqe.webp"/>
           </a>
           <a href="https://twitter.com/IYAM_Inc" target="-blank">
           <img src="https://res.cloudinary.com/otisg/image/upload/v1679059343/twitter_eeblzx.webp"/>

           </a>
           <a href="https://www.youtube.com/user/Wix" target="-blank">
           <img src="https://res.cloudinary.com/otisg/image/upload/v1679059355/youtube_pnwyvc.webp"/>

           </a>
        </div>

</Toolbar>
    
    )
}
