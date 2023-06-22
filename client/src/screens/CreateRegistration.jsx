import { useState, useEffect } from "react";
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
  TextField
} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles'


const defaultTheme = createTheme();


export default function CreateRegistration(props) {
  const [reg, handleCreateReg] = useOutletContext();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    how_often: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateReg(formData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
        <CssBaseline/>


    <h1> Mentoring
    Preregister Here</h1>
      <form onSubmit={handleSubmit}>
        <TextField>
          <input
          margin="normal"
          required
          id="firstName"
          label="firstName"
          
            name="first_name"
            
            value={formData.first_name}
            
            onChange={handleChange}
          />
        </TextField>
        <label>
          <input
            type="text"
            name="last_name"
            placeholder="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="how_often"
            placeholder="how_often"
            value={formData.how_often}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </Container>
    </ThemeProvider>
  );
}
