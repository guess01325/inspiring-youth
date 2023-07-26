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

import "../assets/Donations.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Donate(props) {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            noWrap={true}
            sx={{
          mt: 14,
          mb: 6
            }}
          >
            Support Us
          </Typography>

          <Typography
          sx={{
            mb: 4
          }} variant="h6">
            Our strength is amplified with collective action. You can help
            make a difference with Inspiring Youth and Mentors right now! The
            support we receive is a huge driver for the good work we do in
            addressing some of society’s most challenging problems. Donate today
            and support our community in making a lasting impact!!!
          </Typography>
          ​
          <Typography sx={{
            
          }} variant="h6">
            Our wish list shows exactly what material items we are looking to
            have donated for upcoming programs (things like pens, pencils,
            makeup tools, family style video games etc).
          </Typography>

          <Link href="wish-list" 
          sx={{mb: 4,
          fontSize: 40}}
          >
            Wish List
          </Link>
          
          <Typography variant="h6" sx={{}}>
            If you'd like your monetary donation to go toward a specific
            program, please leave us a note. or Click the GoFundMe button
          </Typography>
          <Link
            sx={{
              fontSize: 40,  
              mb: 6,
              color: "#1976d2",
            }}
            className="donations"
            href="https://www.gofundme.com/f/inspiring-youth-and-mentors?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer"
            target="_blank"
          >
            GoFundMe
          </Link>
        </Box>

        <Typography
        sx={{
          m: 2
        }} 
        variant="h3"> Thank you for your donation!</Typography>
      </Container>
    </ThemeProvider>
  );
}
