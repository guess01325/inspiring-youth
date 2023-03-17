import {Link} from "react-router-dom";

export default function Footer(props) {
    return(
        <div className="header">
           <h2>call us</h2>
           <h2>find us</h2>
           <Link to="/registrations/create">Register</Link>
           <img src="https://res.cloudinary.com/otisg/image/upload/v1679058719/instagram_dyciqe.webp"/>
           <img src="https://res.cloudinary.com/otisg/image/upload/v1679059343/twitter_eeblzx.webp"/>
           <img src="https://res.cloudinary.com/otisg/image/upload/v1679059355/youtube_pnwyvc.webp"/>
        </div>
    
    )
}
