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

            <Link 
              sx={{
                fontSize: "30px"
              }} href="/events/eventsDetails" to="/events/eventsDetails"> Events</Link>
            {/* <Link to="registrations/all">Registrations</Link> */}
            <Link
              sx={{
                fontSize: "30px"
              }} href="/mentorings/all" to="/mentorings/all">Applicants</Link>

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
              <Link 
              sx={{
                fontSize: "30px"
              }} href="/" to="/">Home</Link>
              <Link
                sx={{
                  fontSize: "30px"
                }} href="/mentorings/create">Register</Link>
              <Link
                sx={{
                  fontSize: "30px"
                }} href="/volunteer-info">Volunteer</Link>
              <Link
                sx={{
                  fontSize: "30px"
                }}
               href="/events/displayEvents">Events</Link>
              <Link
                sx={{
                  fontSize: "30px"
                }} href="/donate">Donate</Link>
              

              {/* </Box> */}
            </Toolbar>
        

            <Toolbar     component="nav"
              variant="dense"
              sx={{ justifyContent: "space-between", overflowX: "auto" }}>
                
              <Link
                sx={{
                  fontSize: "30px"
                }} href="/level-up">Level Up</Link>
              <Link
                sx={{
                  fontSize: "30px"
                }} href="/about">About Us</Link>
              <Link
                sx={{
                  fontSize: "30px"
                }} href="/sign-in">Sign In</Link>
              
            </Toolbar>
    
            </AppBar>
            
            
        
        )}
      </header>
  
  );
}

export default Header;
