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
  const [tagData, mentorInfo, handleCreateMentorings, handleDeleteMentorings] =
    useOutletContext();
    const [isChecked, setIsChecked] = useState(false)
    
    const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    school_district: "",
    phone: "",
    how_many: "",
    tags: [
      // {
      //   id: 0,
      //   name: "Angular",
      // },
      // {
      //   id: 1,
      //   name: "React",
      // },
      // {
      //   id: 2,
      //   name: "Java",
      // },
      // {
      //   id: 3,
      //   name: "Angular",
      // },
      // {
      //   id: 4,
      //   name: "React",
      // },
      // {
      //   id: 5,
      //   name: "Java",
      // },
      // {
      //   id: 6,
      //   name: "Angular",
      // },
      // {
      //   id: 7,
      //   name: "React",
      // },
      // {
      //   id: 8,
      //   name: "Java",
      // }, {
      //   id: 9,
      //   name: "Angular",
      // },
      // {
      //   id: 10,
      //   name: "React",
      // },
      // {
      //   id: 11,
      //   name: "Java",
      // },
      
      
    ],
  });
  
  console.log(tagData)
  
  const handleChange = (e) => {
    setIsChecked(!isChecked)
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
        {tagData.map((tags, index) => (
          <div key={index}>

          <label>
            
              {tags}
              <input
               id={index}
                type="checkbox"
                name="tags"
                checked={isChecked}
                value={formData.tags}
                onChange={handleChange}
              />
          
          </label>
          </div>
        ))}
        {/* <label>
          {formData.map((tags) => (
            <div key={tags.id}>
              {tags}

              <input
                type="checkbox"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              />
            </div>
          ))}
        </label> */}
        {/* <label>
            < input type="checkbox"
                    name="tags" 
                    value={formData.tags}
                    onchange={handleChange}
                    />
            </label> */}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
