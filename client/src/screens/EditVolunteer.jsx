import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function EditVolunteer(props) {
  const params = useParams();
  const { id } = params;
  const history = useNavigate;

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

console.log(id)
  useEffect(() => {
    const preFillFormData = () => {
      const singleVolunteer = props.volunteers.find(
        (volunteerItem) => volunteerItem.id === Number(id)
      );
      setFormData({
        first_name: singleVolunteer.first_name,
        last_name: singleVolunteer.last_name,
        email: singleVolunteer.email,
        message: singleVolunteer.message,
      });
    };

    if (props.volunteers.length) {
      preFillFormData();
    }
  }, [props.volunteers, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefualt();
    props.handleUpdateVolunteer(id, formData)
  }

  return (
    <div className="add-pg">
      <form onSubmit={handleSubmit}>
        {/* <h1 id="add-gift-hOne">Add Gift</h1> */}
        <div className="add-form">
          <label>
            <input
              type="text"
              name="first_name"
              placeholder="first_name"
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
