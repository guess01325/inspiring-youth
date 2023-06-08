import React from "react";
import { useState } from "react";

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
  Checkbox 
} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles'

const defaultTheme = createTheme();

export default function SignIn (props){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
    return(
     
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit= {(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }} noValidate sx={{ mt: 1 }}>

       
        <div className="labels">
          
          <label>
            <input
              className="sign-in-inputs"
              id="username"
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter username"
              onChange={handleChange}
              
            />
          </label>
  
          
          <label>
            <input
              className="sign-in-inputs"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </label>
        </div>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
  
        <div className="sign-in-div">
          <button className="sign-in-button">Sign In</button>
        </div>
      


          </Box>

      </Box>

        </Container>
      </ThemeProvider>
      
    )
}