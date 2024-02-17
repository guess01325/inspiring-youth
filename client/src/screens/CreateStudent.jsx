import { useState, useEffect } from "react";

import {
  useOutletContext,
} from "react-router-dom";

import {
  Box,
} from "@mui/material";

export default function StudentCreate(props) {
  const [ students,handleUpdateStudent,handleCreateStudent,handleDeleteStudent
  ] = useOutletContext();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreateStudent(formData)
  };

  return (

    <Box
    sx={{
      m: 16
    }}>
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="text"
          name="address"
          placeholder="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="text"
          name="contact"
          placeholder="contact"
          value={formData.contact}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
    </Box>
  );
}
