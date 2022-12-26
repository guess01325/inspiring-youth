import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { putEvent } from "../services/event";

export default function EditEvent(props) {
  const params = useParams();
  const { id } = params;
  const history = useNavigate;
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const preFillFormData = () => {
      const singleEvent = props.events.find(
        (eventItem) => eventItem.id === Number(id)
      );

      setFormData({
        name: singleEvent.name,
        place: singleEvent.place,
        date: singleEvent.date,
        time: singleEvent.time,
      });
    };

    if (props.events.length) {
      preFillFormData();
    }
  }, [props.events, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdateEvent(id, formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Place
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Time
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
