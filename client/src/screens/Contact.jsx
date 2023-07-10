import React from "react"
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

export default Contact = () => {
    return(
      <Container>
        <Typography variant="h2">
          contact us    
        </Typography>
        <Box
        
            component="form"
            onSubmit={handleSubmit}
            sx={{
              margin: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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

        </Box>

      </Container>
    )
}