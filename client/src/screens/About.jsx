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
        <Container component="main" maxWidth="md">
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
                whiteSpace: "noWrap",
                mt: 10,
                mb: 2
              }} variant="h1">Our Mission</Typography>
              <Typography variant="h3"
              >
                Inspiring Youth and Mentors Inc. is an up and coming Non Profit,
                whose mission is to support curious and motivated youth and
                mentors, through adventurous programs and a variety of services.
              </Typography>
            </Box>

            <Box>

              <Typography variant="h1"  sx={{
                mt: 5, 
                whiteSpace: "nowrap"
              }}> Our Values</Typography>
             
            </Box>
            
         

          

          
            <Box>
            <Typography
            sx={{
              mt: 2,
          
            }} variant="h3">
              Community
            </Typography>

            <Typography variant="h4"
            sx={{
            
            }}>
              “We’re better together.” Everyone has their own strengths to bring
              to the table. When we work together to make a positive impact, we
              can move mountains or better yet, inspire millions.
            </Typography>
            </Box>

          


<Box>

          <Typography
          sx={{
            mt: 2
          }} variant="h3"
>
            Integrity
          </Typography>

            {/* <Typography variant="h2">Our Vision</Typography> */}
          <Typography variant="h4">
            We at IYAM will use ethical and transparent practices to ensure that
            our community always feels safe and welcome.
          </Typography>

</Box>
<Box>
          <Typography
          sx={{
            mt: 2
          }} variant="h3">
            Diversify and Equality
          </Typography>
          <Typography variant="h4">
            IYAM will serve anyone no matter race, sex, gender, or creed.
          </Typography>
          

</Box>
<Box>
<Typography 
  sx={{
    mt: 2
  }}
variant="h3">
            Inspiration
          </Typography>
          <Typography variant="h4">
            At IYAM we know that inspiration starts within. Not only within
            ourselves but also within our organization. We at IYAM will always
            be looking for ways to inspire those who sign up to carry out our
            mission.
          </Typography>

</Box>
<Box>

          <Typography
            sx={{
              mt: 2
            }} variant="h3">
            Innovation
          </Typography>

          <Typography
          sx={{
          
          }} variant="h4">
            IYAM will always be on the lookout to find new ways to inspire the
            community.
          </Typography>
</Box>
          
          
       </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
