  import { useState, useEffect } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

export default function EditVolunteer(props) {
  const params = useParams();
  const { id } = params;
  const history = useNavigate()
  const [volunteers, handleUpdateVolunteer] = useOutletContext();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const preFillFormData = () => {
      const singleVolunteer = volunteers.find(
        (volunteerItem) => volunteerItem.id === Number(id)
      );
      setFormData({
        first_name: singleVolunteer.first_name,
        last_name: singleVolunteer.last_name,
        email: singleVolunteer.email,
        message: singleVolunteer.message,
      });
    };

    if (volunteers.length) {
      preFillFormData();
    }
  }, [volunteers, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleUpdateVolunteer(id, formData);
  };

  return (
    <form onSubmit={ handleSubmit  }>
      <label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </label>
 
      <label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </label>
   
      <label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
  
      <label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
    
      <button type="submit">Submit</button>
    </form>
  );
}
