import {  useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Box,
} from "@mui/material";


export default function EditEvent(props) {
  const [events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent ] = useOutletContext()
  const params = useParams();
  const { id } = params;
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    date: "",
    time: ""
  });

  useEffect(() => {
    const preFillFormData = () => {
      const singleEvent = events.find(
        (eventItem) => eventItem.id === Number(id)
      );

      setFormData({
        name: singleEvent.name,
        place: singleEvent.place,
        date: singleEvent.date,
        time: singleEvent.time,
      });
    };

    if (events.length) {
      preFillFormData();
    }
  }, [events, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateEvent(id, formData);
  };

  return (
    <Box
    sx={{
      m: 14
    }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Place
          <input
            type="text"
            name="place"
            placeholder="place"
            value={formData.place}
            onChange={handleChange}
          />
        </label>
        <label>
          Date
          <input
            type="text"
            name="date"
            placeholder="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Time
          <input
            type="text"
            name="time"
            placeholder="time"
            value={formData.time}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}