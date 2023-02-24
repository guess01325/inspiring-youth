import { useState, useEffect } from "react";
import {
  Link,
  useParams,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

export default function CreateVolunteer(props) {

  const [volunteers, handleUpdateVolunteer, handleCreateVolunteer] = useOutletContext();



    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
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
      handleCreateVolunteer(formData)
    }
  
    return (
      <div className="add-pg">
        <form
          onSubmit={handleSubmit}
        >
          {/* <h1 id="add-gift-hOne">Add Gift</h1> */}
          <div className="add-form">
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
                name="message"
                placeholder="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
            <br />
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  