import { Link, useOutletContext } from "react-router-dom";
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
  TextField,
  FormControl,
} from "@mui/material";

export default function EventDetails(props) {
  const [events,setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent ] = useOutletContext();
  return (
    
    <Box
    sx={{
      mt: 6,
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
        ))}
      </Box>
    
  );
}
