import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  AppBar,
  Link,
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
} from "@mui/material";
import Link2 from "@mui/material/Link";

function Header(props) {
  const { currentUser, handleLogout, event, setEvent } = props;
  const params = useParams();
  const { eventId } = params;
  const { id } = params;

  return (

      <header>
        {currentUser ? (
          <AppBar
          style={{ background: '#2E3B55' }}>

          <Toolbar
            component="nav"
            variant="dense"
            sx={{
              justifyContent: "space-between",
              overflowX: "auto",
              color: "gray",
            }}
          >
            <p>{props.currentUser.username}</p>

            <Link href="/events/eventsDetails" to="/events/eventsDetails"> Events</Link>
            {/* <Link to="registrations/all">Registrations</Link> */}
            <Link href="/mentorings/all" to="/mentorings/all">Applicants</Link>

            <button onClick={handleLogout}>Logout</button>
          </Toolbar>
          </AppBar>
  
        ) : (
          
            <AppBar
            style={{ background: '#2E3B55' }}>

            <Toolbar
              component="nav"
              variant="dense"
              sx={{ justifyContent: "space-between", overflowX: "auto" }}
            >
              <Link href="/" to="/">Home</Link>
              <Link href="/mentorings/create">Register</Link>
              <Link href="/volunteer-info">Volunteer</Link>
              <Link href="/events/displayEvents">Events</Link>
              <Link href="/donate">Donate</Link>
              {/* <Link to="/wish-list">Wish List</Link> */}

              {/* </Box> */}
            </Toolbar>
        

            <Toolbar     component="nav"
              variant="dense"
              sx={{ justifyContent: "space-between", overflowX: "auto" }}>
                
              <Link href="/level-up">Level Up</Link>
              <Link href="/about">About Us</Link>
              <Link href="/sign-in">Sign In</Link>
              
            </Toolbar>
    
            </AppBar>
            
            
        
        )}
      </header>
  
  );
}

export default Header;
