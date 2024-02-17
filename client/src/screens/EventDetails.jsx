import { useParams, Link, useOutletContext } from "react-router-dom";
import {
  createTheme,
  Container,
  CssBaseline,
  Box,
  ThemeProvider,
} from "@mui/material";

export default function EventDetails(props) {
  const theme = createTheme();

  const [
    events,
    setEvents,
    handleDeleteEvent,
    handleUpdateEvent,
    handleCreateEvent,
  ] = useOutletContext();
  const params = useParams();
  const {id} = params;


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


                     {events.length ? (
<div>

          {events.map((event) => (
            <Box  key={event.id}
            sx={{
              margin: 1,
              width: "200px",
              alignItems: "center",
              justifyContent: "center",
              border: 3,
              borderRadius: 6,
              fontSize: "20px",
            }}
            >
              <div className="event-display">
                <p> {event.name}</p>
                <p>{event.place}</p>
                <p> {event.date}</p>
                <p>{event.time}</p>

                <div>
                  <Link to={`/events/${event.id}/edit`}>Update</Link>
                  <Link to={`/events/${event.id}/create`}>New</Link>
                </div>
                <Link to={`/event/${event.id}/volunteer/all`}>Volunteers</Link>
                <Link to={`/event/${event.id}/student/all`}>Students</Link>
                <button onClick={() => handleDeleteEvent(event.id)}>
                  Delete
                </button>
              </div>
            </Box>
 ))}
                   
 </div>
 
 ):(   
<div>
       <Link to={`/events/${id}/create`}>Create</Link>
 </div>
                     )}
        </Box>

      </Container>
    </ThemeProvider>
  );
}
