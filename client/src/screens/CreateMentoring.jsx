import { useState, useEffect } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

export default function Mentorings(props) {
  const params = useParams();
  const { id } = params;
  const history = useNavigate();
  const [mentorInfo, handleCreateMentorings, handleDeleteMentorings] =
  useOutletContext();
  const firstMentoring = mentorInfo[0]

  console.log(firstMentoring)
  
  
  
    
  
  
  
  const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      school_district: "",
      phone: "",
      how_many: "", 
      tags: []
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
    handleCreateMentorings(formData);
  };

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="first_name"
            placeholder="name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="last_name"
            placeholder="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
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

        {mentorInfo.map((tags)=>(
                <div key={tags.id}>
                    <p>{tags.first_name}</p>
                    <p>{tags.tags}</p>
                    <input type="checkbox" />

                </div>
            ))}
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
