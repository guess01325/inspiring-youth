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
    TextField
  } from "@mui/material";
  
  import { createTheme, ThemeProvider } from '@mui/material/styles'

  const defaultTheme = createTheme();

  
  export default function About(props) {


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline/>

<Box>

  <Typography component="h1" variant="h3"  >

        Our Mission
  </Typography>
  <Typography component="p">
        
          Inspiring Youth and Mentors Inc. is an up and coming non profit whose
          mission is to support curious and motivated youth and mentors through
          adventurous programs and a variety of services.
        

  </Typography>
</Box>


<Box>
  <Typography component="h1" variant="h3"  >

        Our Values
  </Typography>
  <Typography component="p">
        
        “To see youth and mentors living a life with purpose.” 
        

  </Typography>

</Box>



<Box>
  <Typography component="h1" variant="h3"  >

        Our Vision
  </Typography>
      <Box>
        <Typography compennt="h1" variant="h4"> 

          Community
        </Typography>
  <Typography component="p">
        
            “We’re better together.” Everyone has their own strengths to bring
            to the table. When we work together to make a positive impact, we
            can move mountains or better yet, inspire millions.
        

  </Typography>
          
          
        </Box>
        <Typography component="h1" variant="h4"  >

      Integrity

        </Typography>
        

  <Typography component="p">
        
        
          We at IYAM will use ethical and transparent practices to ensure that
          our community always feels safe and welcome.
        

  </Typography>


  <Typography component="h1" variant="h4"  >

        Diversify and Equality

  </Typography>
  <Typography component="p">
        
        IYAM will serve anyone no matter race, sex, gender, or creed.

  </Typography>
      <Typography component="h1" variant="h4">
        Inspiration

      </Typography>
      <Typography component="p">
        At IYAM we know that inspiration starts within. Not only within ourselves but also within our organization. We at IYAM will always be looking for ways to inspire those who sign up to carry out our mission.

      </Typography>
        
      <Typography component="h1" variant="h4">

        Innovation
      </Typography>

      <Typography component="p">
      
        IYAM will always be on the lookout to find new ways to inspire the community.

      </Typography>
      
</Box>
        
        

  
 
    
      
      
      
      
      
      </Container>
      </ThemeProvider>
    </>
  );
}
