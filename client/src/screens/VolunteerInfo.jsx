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
        }}
      >
    
      <Typography variant="h1"  sx={{
        margin: 5
      }}>
        Volunteer
        Opportunities
        
        </Typography>
        
    

    
        <div className="sub-div">
          <h3 className="sub-title">Volunteer Organizer</h3>
          <p>
            If you're great with people and have some experience with google
            sheets, this would be a great place for you to serve. You would keep
            volunteers up to date with the information they need and manage our
            data base Some administrative experience preferred.
          </p>
        </div>
    
        <div className="sub-div">
          <h3 className="sub-title">Board Members</h3>
          <p>
            We're looking for a dedicated team of hands on board members who
            want to lay down a great foundation for the future of our
            organization and our community. Non profit board experience
            preferred
          </p>
        </div>
    
        <div className="sub-div">
          <h3 className="sub-title">Event Facilitators</h3>
          <p>We are always looking for volunteers for different events.</p>
        </div>
    
        <div className="sub-div">
          <h3 className="sub-title">Communications</h3>
          <p>
            We're looking for a few people who can help us keep up with our
            social media and keep in touch with local non profits and businesses
            to keep lines of communication open.
          </p>
        </div>
    
        <div className="sub-div">
          <h3 className="sub-title">Youth Organizer</h3>
          <p>
            If you're heavily involved in youth activities and have a heart for
            the youth, this the best volunteer position for you. We are looking
            for someone to keep us in the know with what's going on with todays
            youth by reaching out and staying connected with them. We want to
            make sure our activities and programs are relevant
          </p>
        </div>
    
        <div className="sub-div">
          <h3 className="sub-title">Mentor Organizer</h3>
          <p>
            This is a position for those interested in keeping in touch with our
            community leaders. You'd make sure we're hearing the voices of our
            mentors and finding different ways we can support them.
          </p>
          ​
        </div>
    
    
        <div className="v-sign-up">
        <Typography variant="h1" noWrap={true} sx={{
      
      
      }}>
        Volunteer Sign up
        
        </Typography>
          
          <p>
            Wanna be part of all the fun! Let's find a volunteer position that
            will work best for you. 
            
            Please email us at
            Info@inspiringyouthandmentors.org
          </p>
        </div>
    </Box>
    </Container>
  </ThemeProvider>
  

  );
}
