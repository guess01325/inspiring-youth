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
            sx={{
              margin: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",



            }}
          >
            <label>
              <input
                type="text"
                name="first_name"
                placeholder="name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </label>
            
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
                name="school_district"
                placeholder="school_district"
                value={formData.school_district}
                onChange={handleChange}
                />
            </label>
            <label>
              <input
                type="integer"
                name="phone"
                placeholder="phone"
                value={formData.phone}
                onChange={handleChange}
                />
            </label>
            <label>
              <input
                type="text"
                name="how_many"
                placeholder="how_many"
                value={formData.how_many}
                onChange={handleChange}
                />
            </label>
                </Box>
            <div>
              How will you attend?
              {data.slice(0, 2).map((data, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name="tags"
                    checked={isChecked[index]}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </li>
              ))}
            </div>
            <div>
              Is this your child's first time being mentored?
              {data.slice(2, 4).map((data, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name="tags"
                    checked={isChecked[index]}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </li>
              ))}
            </div>
            <div>
              Program of interest
              {data.slice(4, 7).map((data, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name="tags"
                    checked={isChecked[index]}
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />

                  <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
                </li>
              ))}
            </div>
            How did you hear about us?
            {data.slice(7, 12).map((data, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name="tags"
                  checked={isChecked[index]}
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                />

                <label htmlFor={`custom-checkbox-${index}`}>{data}</label>
              </li>
            ))}
            <button>Submit</button>
        </form>
      </Container>
    </ThemeProvider>
  );
}
