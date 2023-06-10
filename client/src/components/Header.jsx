import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  CssBaseline

} from "@mui/material";
import Link2 from '@mui/material/Link'


function Header(props) {
  const { currentUser, handleLogout, event, setEvent } = props;
  const params = useParams();
  const { eventId } = params;
  const { id } = params;

  return (
    <div className="header">
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <header>
      

          <nav>
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center"

        }}>
            {currentUser ? (
              <div>
                <p>{props.currentUser.username}</p>

                <Link to="/events/eventsDetails"> Events</Link>
                <Link to="registrations/all">Registrations</Link>
                <Link to="/mentorings/all">Applicants</Link>

                <button onClick={handleLogout}>Logout</button>
              </div>
            ) 
            :
             (
              <div className="nav-buttons">
                <div>
                  <Link to="/sign-in">Sign In</Link>
                </div>
                <Link to="/">Home</Link>
                <Link to="/mentorings/create">Register</Link>
                <Link to="volunteer-info">Volunteer</Link>
                <Link to="/events/displayEvents">Events</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/level-up">Level Up</Link>
                <Link to="/about">About Us</Link>
                {/* <Link to="/wish-list">Wish List</Link> */}
              </div>
            )}
        </Box>
          </nav>
        </header>

      </Toolbar>
    </div>
  );
}

export default Header;
