import { Outlet, useOutletContext,Link } from "react-router-dom";
import "../css/Events.css"

import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box
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
      justifyContent: "center",

    }}
    >


<Box
sx={{
  margin: 1,
  width: "200px",
  alignItems: "center",
  justifyContent: "center",
  border: 3,
  borderRadius: 6,
  fontSize: "20px"
}}>
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
    
          </Box>
          </Container>
    </ThemeProvider>
  );
}
