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


const defaultTheme = createTheme();

export default function About(props) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
       <Box 
       sx={{
        margin: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center"

       }}
       >

            <Box> 
              <Typography sx={{
                whiteSpace: "nowrap",
                margin: 2 
              }} variant="h1">Our Mission</Typography>
              <Typography variant="subtitle1">
                Inspiring Youth and Mentors Inc. is an up and coming non profit
                whose mission is to support curious and motivated youth and
                mentors through adventurous programs and a variety of services.
              </Typography>
            </Box>

            <Box>

              <Typography variant="h1"  sx={{
                margin: 5, 
                whiteSpace: "nowrap"
              }}> Our Values</Typography>
             
            </Box>
            
         

          

          
            <Box>
            <Typography variant="h4">
              Community
            </Typography>

            <p>
              “We’re better together.” Everyone has their own strengths to bring
              to the table. When we work together to make a positive impact, we
              can move mountains or better yet, inspire millions.
            </p>
            </Box>

          


<Box>

          <Typography variant="h4">
            Integrity
          </Typography>

            {/* <Typography variant="h2">Our Vision</Typography> */}
          <p>
            We at IYAM will use ethical and transparent practices to ensure that
            our community always feels safe and welcome.
          </p>

</Box>
<Box>
          <Typography variant="h4">
            Diversify and Equality
          </Typography>
          <p>
            IYAM will serve anyone no matter race, sex, gender, or creed.
          </p>
          

</Box>
<Box>
<Typography variant="h4">
            Inspiration
          </Typography>
          <p>
            At IYAM we know that inspiration starts within. Not only within
            ourselves but also within our organization. We at IYAM will always
            be looking for ways to inspire those who sign up to carry out our
            mission.
          </p>

</Box>
<Box>

          <Typography variant="h4">
            Innovation
          </Typography>

          <p>
            IYAM will always be on the lookout to find new ways to inspire the
            community.
          </p>
</Box>
          
          
       </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
