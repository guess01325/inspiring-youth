import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
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
  const [
    tagData,
    setTagData,
    mentorInfo,
    handleCreateMentorings,
    handleDeleteMentorings,
  ] = useOutletContext();
  const data = tagData || []
  const [isChecked, setIsChecked] = useState( 
    new Array(data.length).fill(false))
console.log(data)
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    school_district: "",
    phone: "",
    how_many: "",
    tags: [],
  });
  formData.tags = tagData;
  // const checks = isChecked || []
  // console.log(checks)
  

const insertData = formData.tags || []

const handleChange = (e, position) => {
  
  const updatedCheckedState = isChecked.map((item, index) =>
  index === position ? !item : item)
  setIsChecked(updatedCheckedState)
  
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
            {/* {insertData.map((tag)=>{
            <label>
              {tag}
      
            </label>
            })} */}
        {/* <ul className="toppings-list">
        {tagData.map(( name , index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
              
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={isChecked[index]}
                    onChange={handleChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
            
              
            </li>
          );
        })}
      </ul> */}

        {insertData.map((tags, index) => (
          <div key={index}>
            
              {tags}
              <input
                type="checkbox"
                name="tags"
                checked={isChecked}
                value={formData.tags}
                onChange={handleChange}
              />
          
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

        <button>Submit</button>
      </form>
    </div>
  );
}
