import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function CreateEvent(props) {
  const [events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent ] = useOutletContext()
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    date: "",
    time: "",
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
          handleCreateEvent(formData);
        }}
      >
        {/* <h1 id="add-gift-hOne">Add Gift</h1> */}
        <div className="add-form">
          <label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="place"
              placeholder="place"
              value={formData.place}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="date"
              placeholder="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="time"
              placeholder="time"
              value={formData.time}
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
