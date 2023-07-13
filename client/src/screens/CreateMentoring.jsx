import { useState, useEffect } from "react";
import "../assets/CMentor.css";
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

import { createTheme, ThemeProvider } from "@mui/material/styles";




export default function Mentorings(props) {
  const defaultTheme = createTheme();
  const params = useParams();
  const { id } = params;
  const history = useNavigate();

  const [
    isLoaded,
    tagData,
    mentorInfo,
    handleCreateMentorings,
    handleDeleteMentorings,
  ] = useOutletContext();

  const data = tagData || [];
  const [isChecked, setIsChecked] = useState(
    new Array(data.length).fill(false)
  );

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    school_district: "",
    phone: "",
    how_many: "",
    tags: [],
  });

  const handleChange = (e, position) => {
    const { name, value } = e.target;

    if (name === "tags") {
      if (formData.tags.includes(value)) {
        setFormData((prevState) => ({
          ...prevState,
          tags: formData.tags.filter((tag) => tag !== value),
        }));
      } else {
        setFormData((prevState) => ({
          ...prevState,
          tags: [...formData.tags, value],
        }));
      }
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateMentorings(formData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm"
    sx={{
      width: "750px"
    }}>
        <CssBaseline />
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ border: 3, borderRadius: "16px", }}
            margin="normal"
            required
            fullWidth
            size="medium"
            id="firstName"
            label="firstName"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          ></TextField>

          <TextField
            sx={{ border: 3, borderRadius: "16px" }}
            margin="normal"
            required
            fullWidth
            size="medium"
            id="lastName"
            label="lastName"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          ></TextField>

          <TextField
            sx={{ border: 3, borderRadius: "16px" }}
            margin="normal"
            required
            fullWidth
            size="medium"
            id="email"
            label="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></TextField>

          <TextField
            sx={{ border: 3, borderRadius: "16px" }}
            margin="normal"
            required
            fullWidth
            size="medium"
            id="school_district"
            label="school_district"
            name="school_district"
            value={formData.school_district}
            onChange={handleChange}
          ></TextField>

          <TextField
            sx={{ border: 3, borderRadius: "16px" }}
            margin="normal"
            required
            fullWidth
            size="medium"
            id="phone"
            label="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          ></TextField>

          <TextField
            sx={{ border: 3, borderRadius: "16px" }}
            margin="normal"
            required
            fullWidth
            size="medium"
            id="how_many"
            label="how_many"
            name="how_many"
            value={formData.how_many}
            onChange={handleChange}
          ></TextField>

          <Box className="questions"
            sx={{
              border: 3,
              borderRadius: "16px",
              margin: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h6">How will you attend?</Typography>
              {data.slice(0, 2).map((data, index) => (
                <Typography variant="subtitle2" key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={data}
                        id={`custom-checkbox-${index}`}
                        name="tags"
                        checked={isChecked[index]}
                        onChange={(e) => handleChange(e, index)}
                      />
                    }
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography variant="h6">
                Is this your child's first time being mentored?
              </Typography>
              {data.slice(2, 4).map((data, index) => (
                <Typography variant="subtitle2" key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={data}
                        id={`custom-checkbox-${index}`}
                        name="tags"
                        checked={isChecked[index]}
                        onChange={(e) => handleChange(e, index)}
                      />
                    }
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography variant="h6">Program of interest</Typography>
              {data.slice(4, 7).map((data, index) => (
                <Typography variant="subtitle2" key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={data}
                        id={`custom-checkbox-${index}`}
                        name="tags"
                        checked={isChecked[index]}
                        onChange={(e) => handleChange(e, index)}
                      />
                    }
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
              ))}
            </Box>

            <Box>
              <Typography variant="h6">How did you hear about us?</Typography>

              {data.slice(7, 12).map((data, index) => (
                <Typography variant="subtitle2" key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value={data}
                        id={`custom-checkbox-${index}`}
                        name="tags"
                        checked={isChecked[index]}
                        onChange={(e) => handleChange(e, index)}
                      />
                    }
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
              ))}
            </Box>

            <Box>
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}
