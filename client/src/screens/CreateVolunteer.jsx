import { useState, useEffect } from "react";


export default function CreateVolunteer(props) {
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
  
    return (
      <div className="add-pg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleCreateVolunteer(formData);
          }}
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
  