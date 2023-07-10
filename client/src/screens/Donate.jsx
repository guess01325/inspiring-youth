// import { Link } from "react-rout er-dom";
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
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
} from "@mui/material";

import "../assets/Donations.css"
import { createTheme, ThemeProvider } from "@mui/material/styles";


export default function Donate(props) {
  const defaultTheme = createTheme();


  return (
    
  <ThemeProvider theme={defaultTheme}>
  <Container component="main" maxWidth="xs">
    <CssBaseline />

      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

        
      }} >

    <div>
      <Typography variant="h2" noWrap={true}
      sx={{
        margin: 5
      }}>SUPPORT US</Typography>
    </div>
    

        <a className="donations"
          href="https://www.gofundme.com/f/inspiring-youth-and-mentors?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
          target="_blank"
        >
          GoFundMe
        </a>
        <Link sx={{
          pt: "10px",
          pb: 0
        }} className="donations" to="wish-list">Wish List</Link>
    


      <Box sx={{
        pt: "20px",
        pb: "5px"
      }}>

        <Typography variant="p">
          Our strength is amplified with collective action, and you can help
          make a difference with Inspiring Youth and Mentors right now! The
          support we receive is a huge driver for the good work we do in
          addressing some of society’s most challenging problems. Donate today
          and support our community in making a lasting impact.
        </Typography>
     
      </Box>
      
      < Box
      
      sx={{
        pt: "80px",
        pb: "5px"
      }}>
        <Typography variant="p"
        sx={{
        
        }}>
          Below we will provide two options Go Fund Me for monetary donations
          and Wish List for material donations.
        </Typography>
      </Box >
      

      <Box sx={{
        margin: 2
      }}>
        ​
        <Typography variant="p">
          Our wish list shows exactly what material items we are looking to have
          donated for upcoming programs (things like pens, pencils, makeup
          tools, family style video games etc) to be directed to our GoFundMe
          page. If you'd like your monetary donation to go toward a specific
          program, please leave us a note. or Click the GoFundMe button
        </Typography>
      </Box>
      
      <Box>
        <Typography variant="h3"> Thank you for your donation!</Typography>
      </Box>
    

</Box>
</Container>
    </ThemeProvider>
  );
}
