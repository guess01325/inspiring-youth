import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

import {
  Box,
} from "@mui/material";

export default function StudentEdit(props) {
  const params = useParams();
  const { id } = params;
  const history = useNavigate();
  const [
    students,
    handleUpdateStudent,
  ] = useOutletContext();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  useEffect(() => {
    const preFillFormData = () => {
    const singleStudent = students.find((studentItem)=> studentItem.id === Number(id));
    setFormData({
        name: singleStudent.name,
        address: singleStudent.address,
        contact: singleStudent.contact,
    });
};

if (students.length){
    preFillFormData();
}
  }, [students, id])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState)=> ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateStudent(id, formData)
  }

  return (
    <Box
    sx={{
      m: 14
    }}>

 <form onSubmit = {handleSubmit} >
  <label>
    <input
    type= "text"
    name = "name"
    value= {formData.name}
    onChange = {handleChange}/>
  </label>
  <label>
    <input
    type= "text"
    name = "address"
    value= {formData.address}
    onChange = {handleChange}/>
  </label>
  <label>
    <input
    type= "text"
    name = "contact"
    value= {formData.contact}
    onChange = {handleChange}/>
  </label>
  <button type="submit">Submit</button>

 </form>
    </Box>
  );
}
