import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  useOutletContext,
} from "react-router-dom";

import {
  Box,
  Toolbar,
  Button,
  IconButton,
  SearchIcon,
  Typography, 
  Container,
  CssBaseline

} from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles'

const defaultTheme = createTheme(); 

export default function Registration(props) {
  const [reg, handleCreateReg, handleDeleteRegistration] = useOutletContext();


  return (
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
      
        {reg.map((reg) => (
          <div key={reg.id}>
            <p> {reg.first_name}</p>
            <p> {reg.last_name}</p>
            <p> {reg.email}</p>
            <p> {reg.how_often}</p>
            <Button  onClick={() => handleDeleteRegistration(reg.id)}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt:  3, mb: 2 }}
            >
           
                Delete
                </Button>

          </div>
        ))}
      
    </Box>
</Container>
    </ThemeProvider>
  );
}
