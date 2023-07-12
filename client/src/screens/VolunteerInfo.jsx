import {
  Box,
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Grid,
} from "@mui/material";

import { StyledEngineProvider } from '@mui/material/styles';




import "../assets/VolunteerInfo.css"



export default function VolunteerInfo(props) {
  const theme  = createTheme();

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

    theme.typography.h1 = {
    fontSize: '3rem',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
  };

  return (

    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
  
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
    
      <Typography variant="h1"  sx={{
        margin: 5
      }}>
        Volunteer
        Opportunities
        
        </Typography>
        
    

    
      
          <Typography variant="h3">Volunteer Organizer</Typography>
          <Typography variant="p">
            If you're great with people and have some experience with google
            sheets, this would be a great place for you to serve. You would keep
            volunteers up to date with the information they need and manage our
            data base Some administrative experience preferred.
          </Typography>

          <Typography variant="h3">Board Members</Typography>
          <Typography variant="p">
          We're looking for a dedicated team of hands on board members who
            want to lay down a great foundation for the future of our
            organization and our community. Non profit board experience
            preferred
          </Typography>

<Typography variant="h3">Event Facilitators</Typography>
          <Typography variant="p">
          We are always looking for volunteers for different events
          </Typography>

<Typography variant="h3">Communications</Typography>
          <Typography variant="p">
          We're looking for a few people who can help us keep up with our
            social media and keep in touch with local non profits and businesses
            to keep lines of communication open.
          </Typography>


          <Typography variant="h3">Youth Organizer</Typography>
          <Typography variant="p">
          If you're heavily involved in youth activities and have a heart for
            the youth, this the best volunteer position for you. We are looking
            for someone to keep us in the know with what's going on with todays
            youth by reaching out and staying connected with them. We want to
            make sure our activities and programs are relevant
          </Typography>



          <Typography variant="h3">Mentor Organizer</Typography>
          <Typography variant="p">
          This is a position for those interested in keeping in touch with our
            community leaders. You'd make sure we're hearing the voices of our
            mentors and finding different ways we can support them.
          </Typography>


        <Typography variant="h1" 
         sx={{
      
      
      }}>
        Volunteer Sign up
        
        </Typography>
          
          <p>
            Wanna be part of all the fun! Let's find a volunteer position that
            will work best for you. 
            
            Please email us at
            Info@inspiringyouthandmentors.org
          </p>
    </Box>
    </Container>
  </ThemeProvider>
  

  );
}
