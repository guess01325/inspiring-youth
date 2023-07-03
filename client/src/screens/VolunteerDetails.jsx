import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  Link,
  useLocation,
  useOutletContext,
} from "react-router-dom";

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

export default function Volunteers(props) {
  const location = useLocation;
  const [
    volunteers,
    handleUpdateVolunteer,
    handleCreateVolunteer,
    handleDeleteVolunteer,
  ] = useOutletContext();
  const params = useParams();
  const { eventId } = params;



  return (

    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    
    }}
    >
        {volunteers.length ? (
          <div>
            {volunteers.map((volunteerItem) => (
              <div className="event-display" key={volunteerItem.id}>
                <p> {volunteerItem.first_name}</p>
                <p>{volunteerItem.last_name}</p>
                <p> {volunteerItem.email}</p>
                <p>{volunteerItem.message}</p>

                <Link
                  to={`/event/${eventId}/volunteer/${volunteerItem.id}/update`}
                >
                  Update
                </Link>
                <Link to={`/event/${eventId}/volunteer/:id/create`}>New</Link>
                <button  onClick={() => handleDeleteVolunteer(volunteerItem.id)} component="main" maxWidth="xs">
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>
             <Link to={`/event/${eventId}/volunteer/:id/create`}>Create</Link>
          </div>
        )}
      </Box>
    
  );
}
