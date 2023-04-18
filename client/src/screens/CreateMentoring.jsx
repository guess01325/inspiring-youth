import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { getAllMentorings, postMentorings, deleteMentorings, getTagData } from "../services/Mentoring";
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
  const [isLoaded,tagData,
    mentorInfo,
    handleCreateMentorings,
    handleDeleteMentorings,
  ] = useOutletContext();
  const data = tagData || []
  const [isChecked, setIsChecked] = useState( 
     new Array(data.length).fill(false))
    console.log(data)
    // const [isLoaded, setLoaded] = useState(false);
    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      school_district: "",
      phone: "",
    how_many: "",
    tags: []
  });


//   useEffect(()=> {
//     const fetchTags = async () => {
//         const mentorTags = await getTagData();
//          setTagData(mentorTags)
//          setLoaded(true);
//     }
//     fetchTags()
// }, [])

// if (!isLoaded) {
//     return <h1>Loading...</h1>;
//   }

  
  
  // if (!isLoaded) {
  //   return <h1>Loading...</h1>;
  // }
  
  // const checks = isChecked || []
  
  

// const insertData = tagData || []




// const handleCheckboxChange = (position) =>{

//   const updatedCheckedState = isChecked.map((item, index) =>
//   index === position ? !item : item)

//   setIsChecked(updatedCheckedState)
//   formData.tags.concat(
//     position.target.type === "checkbox"
//     ? position.target.checked
//     : [position].target.value
//     )
  
    
//   }
  
  
  // console.log(formData.tags)
  

  const handleChange = (e,position) => {
  const { name, value } = e.target;
//   const updatedCheckedState = isChecked.map((item, index) =>
//   index === position ? !item : item)

//   setIsChecked(updatedCheckedState)
// formData.tags.push(isChecked)

if(name === "tags"){
  if(formData.tags.includes(value)){
    setFormData((prevState)=>({
      ...prevState, tags: formData.tags.filter((tag) => tag !== value),
    }))

  }
  else {
    setFormData((prevState)=>({
      ...prevState,tags:[...formData.tags, value]
    }))
  } 
  return
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
  
<div>
       How will you attend?
        {data.slice(0, 2).map((data,index) => (
          <li key={index}>
            
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name="tags"
                checked={isChecked[index]}
                value={data}
                onChange={(e) => handleChange(e,index)}
              />
              
            <label htmlFor={`custom-checkbox-${index}`}>{data}</label>

              
          </li>
        ))}
</div>
        <div>
    Is this your child's first time being mentored?
{data.slice(2, 4).map((data,index) => (
          <li key={index}>
            
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name="tags"
                checked={isChecked[index]}
                value={data}
                onChange={(e) => handleChange(e,index)}
              />
              
            <label htmlFor={`custom-checkbox-${index}`}>{data}</label>

              
          </li>
        ))}

        </div>
        <div>
          Program of interest
        {data.slice(4, 7).map((data,index) => (
          <li key={index}>
            
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name="tags"
                checked={isChecked[index]}
                value={data}
                onChange={(e) => handleChange(e,index)}
              />
              
            <label htmlFor={`custom-checkbox-${index}`}>{data}</label>

              
          </li>
        ))}
        </div>
        How did you hear about us?
        {data.slice(7, 12).map((data,index) => (
          <li key={index}>
            
              <input
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name="tags"
                checked={isChecked[index]}
                value={data}
                onChange={(e) => handleChange(e,index)}
              />
              
            <label htmlFor={`custom-checkbox-${index}`}>{data}</label>

              
          </li>
        ))}
    

        <button>Submit</button>
      </form>
    </div>
  );
}
