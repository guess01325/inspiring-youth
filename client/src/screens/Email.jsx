import React from "react";
import { useRef } from "react";

import {
  Link,
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

import emailjs from '@emailjs/browser';

export default function Email(props) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jy3dnij', 'template_l94ke9q', form.current, '3PRdcSQolp0dgo-uQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
e.target.reset()
  };  
  return (
    <Container>
      <Box
        ref={form}
        component="form"
        onSubmit={sendEmail}
        sx={{
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "center",
          margin: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">contact us</Typography>
        <Box
        sx={{
          width: "500px"
        }}>
        <TextField
          required
          fullWidth
          size="small"
          name="user-name"
          label="fullName"
          id="fullName"
        />
        <TextField
          required
          fullWidth
          size="small"
          name="user_email"
          label="email"
          type="email"
          id="email"
        />
        <TextField
          required
          fullWidth
          size="small"
          name="subject"
          label="subject"
          type="text"
          id="subject"
        />
        <TextField
          required
          fullWidth
          variant="outlined"
          placeholder="messsage"
          multiline
          rows={5}
          rowsMax={10}
          size="small"
          name="message"
          label="email"
          type="text"
          id="message"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>

        </Box>
      </Box>
    </Container>
  );
}
