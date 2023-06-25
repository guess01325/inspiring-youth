import { Link } from "react-router-dom";
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

import "../assets/Donations.css"


export default function Donate(props) {
  return (
    <>

    <div>
      <h1>SUPPORT US</h1>
    </div>

      <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        
      }} className="sub-div">
        <a className="donations"
          href="https://www.gofundme.com/f/inspiring-youth-and-mentors?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
          target="_blank"
        >
          GoFundMe
        </a>
        <Link className="donations" to="wish-list">Wish List</Link>
      </Box>
      
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }
      }>

      <div className="sub-div-2">
        <p>
          Our strength is amplified with collective action, and you can help
          make a difference with Inspiring Youth and Mentors right now! The
          support we receive is a huge driver for the good work we do in
          addressing some of society’s most challenging problems. Donate today
          and support our community in making a lasting impact.
        </p>
      </div>
      
      <div className="sub-div-2">
        <p>
          Below we will provide two options Go Fund Me for monetary donations
          and Wish List for material donations.
        </p>
      </div>
      

      <div className="sub-div-2">
        ​
        <p>
          Our wish list shows exactly what material items we are looking to have
          donated for upcoming programs (things like pens, pencils, makeup
          tools, family style video games etc) to be directed to our GoFundMe
          page. If you'd like your monetary donation to go toward a specific
          program, please leave us a note. or Click the GoFundMe button
        </p>
      </div>
      
      <div>
        <h1> Thank you for your donation!</h1>
      </div>
      </Box>
      {/* <div>

<h1>We Welcome Your Donations</h1>
      </div> */}

    </>
  );
}
