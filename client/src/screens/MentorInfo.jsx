
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Link,
  useParams,
  useNavigate,
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


export default function MentoringInfo(props) {
  const [
    isLoaded,
    tagData,
    mentorInfo,
    handleCreateMentorings,
    handleDeleteMentorings,
  ] = useOutletContext();

  return (
    
      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      
      }}
      >
      {mentorInfo.map((mentors) => (
        <div className="event-display" key={mentors.id}>
          <h4>First Name</h4>
          <p>{mentors.first_name}</p>
          <h4>Last Name</h4>
          <p>{mentors.last_name}</p>
          <h4>Email</h4>
          <p>{mentors.email}</p>
          <h4>School District</h4>
          <p>{mentors.school_district}</p>
          <h4>Phone Number</h4>
          <p>{mentors.phone}</p>
          <h4>How Many Kids</h4>
          <p>{mentors.how_many}</p>

          <h4>options</h4>
          <p>{mentors.tags}</p>

          <button onClick={() => handleDeleteMentorings(mentors.id)}>
            Delete
          </button>
        </div>
      ))}
    </Box>
  );
}
