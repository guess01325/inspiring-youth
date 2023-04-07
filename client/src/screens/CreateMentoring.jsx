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
  const [tagData,mentorInfo, handleCreateMentorings, handleDeleteMentorings] =
  useOutletContext();

  
  
  
    console.log(tagData)
  
  
  
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
      {/* {mentorInfo.map((tags) =>(
        <div key={tags.id}>
          <p>{tags.tags}</p>
          
        </div>

    ))} */}
      <form onSubmit={handleSubmit}>
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
        <label>

        {tagData.map((tags, i)=>(
                <div key={i}>
                    <p>{tags}</p>
                    < input type="checkbox" name="tags" value={formData.tags} />

                </div>
            ))}
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
