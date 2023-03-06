import { useState, useEffect } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

export default function StudentEdit(props) {
  const params = useParams();
  const { id } = params;
  const history = useNavigate();
  const [
    students,
    handleUpdateStudent,
    handleCreateStudent,
    handleDeleteStudent,
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
  );
}
