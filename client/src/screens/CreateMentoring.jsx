import { useState, useEffect } from "react";
import "../assets/Mentor.css"
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
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function Mentorings(props) {
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
  console.log(data);
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <form onSubmit={handleSubmit}>
          <Box
          // onSubmit={handleSubmit}
            sx={{
              margin: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",



            }}
          >
            <TextField
              margin="normal"        
              required
              fullWidth
              size="small"
              id="firstName"
              label="firstName"
                name="first_name"

              
                value={formData.first_name}
                onChange={handleChange}
              >
            </TextField>
            <TextField
              margin="normal"        
              required
              fullWidth
              size="small"
              id="lastName"
              label="lastName"
                name="last-Name"

              
                value={formData.last_name}
                onChange={handleChange}
              >
            </TextField>


           
            
          
            <TextField
              margin="normal"        
              required
              fullWidth
              size="small"
              id="email"
              label="email"
                name="email"
                
              
                value={formData.email}
                onChange={handleChange}
              >
            </TextField>
            <TextField
              margin="normal"        
              required
              fullWidth
              size="small"
              id="school_district"
              label="school_district"
                name="school_district"
                
              
                value={formData.school_district}
                onChange={handleChange}
              >
            </TextField>
            
            <TextField
              margin="normal"        
              required
              fullWidth
              size="small"
              id="phone"
              label="phone"
                name="phone"
                
              
                value={formData.phone}
                onChange={handleChange}
              >
            </TextField>
            <TextField
              margin="normal"        
              required
              fullWidth
              size="small"
              id="how_many"
              label="how_many"
                name="how_many"
                
              
                value={formData.how_many}
                onChange={handleChange}
              >
            </TextField>
         
                </Box>



                <Box 
                sx={{
                margin: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between"
    
    
    
                }}
                >
            <Box
              sx={{
                
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between"
                
  
  
              }}>
                <Typography
              variant="h6"
                >

              How will you attend?
                </Typography>
              {data.slice(0, 2).map((data, index) => (
                <div key={index}>
                   <Typography
                variant="subtitle2">

                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name="tags"
                    checked={isChecked[index]}
                    value={data}  
                    onChange={(e) => handleChange(e, index)}
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
                </div>
              ))}
            </Box>
            <Box>
            <Typography
              variant="h6"
                >

              
              Is this your child's first time being mentored?
                </Typography>
              {data.slice(2, 4).map((data, index) => (
                <div key={index}>
                   <Typography
                variant="subtitle2">

                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name="tags"
                    checked={isChecked[index]}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
                </div>
              ))}
            </Box>
            <Box>
            <Typography
              variant="h6"
                >

              Program of interest
              
                </Typography>
              {data.slice(4, 7).map((data, index) => (
                <div key={index}>
                   <Typography
                variant="subtitle2">

                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name="tags"
                    checked={isChecked[index]}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </Typography>
                </div>
              ))}
            </Box>
            <Box>
            <Typography
              variant="h6"
                >
            How did you hear about us?

              
                </Typography>

            {data.slice(7, 12).map((data, index) => (
              <div key={index}>
                <Typography
                variant="subtitle2">

                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name="tags"
                  checked={isChecked[index]}
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                  />

                <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                  </Typography>
              </div>
            ))}
            </Box>
            <Box>
              
            <button>Submit</button>
            </Box>

                </Box>
        </form>
      </Container>
    </ThemeProvider>
  );
}
