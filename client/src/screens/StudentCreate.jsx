import { useState, useEffect } from "react";

import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

export default function StudentCreate(props) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateStudent(formData);
  };

  return (
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
  );
}
