import { Outlet, useOutletContext,Link } from "react-router-dom";
import "../assets/Events.css"

import {
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography,
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box,
  FormControlLabel,
  Checkbox,
  TextField,
  FormControl,
} from "@mui/material";



export default function EventDisplay(props) {
  const theme = createTheme();
  const [events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent] = useOutletContext();
  
  
  
  
  
  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    <Box
    sx={{
      mt: 14,
      mb: 7,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"

    }}
    >

      {events.map((event) => (
        <div className="event-display" key={event.id}>
          <p> {event.name}</p>
          <p>{event.place}</p>
          <p> {event.date}</p>
          <p>{event.time}</p>
        </div>

      ))}
      <Link to>RSVP</Link>
    
          </Box>
          </Container>
    </ThemeProvider>
  );
}
