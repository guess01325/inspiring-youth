import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllEvents, getOneEvent, postEvent, putEvent, getUserEvent } from "../services/event.js";

export default function EditEvent(props) {
  const [event, setEvent] = useState(null);
  const params = useParams;
  const { id } = params;
  const history = useNavigate;
  
  const [formData, setFormData] = useState({
    name: "",
    amount: 0,
    place: "",
    date: "",
    time: "",
  });
  
  useEffect(() => {
    const event = props.events.find((eventItem) => eventItem.id === Number(id));
    setEvent(event);
  }, [props.events, id]);
  console.log(event)
  
  const handleUpdateEvent = async (id, formData) => {
    const eventItem = await putEvent(id, formData);
    setEvent((prevState) =>
      prevState.map((event) => {
        return event.id === Number(id) ? eventItem : event;
      })
    );
    history.push(`/event/${event.id}`);
  };

  useEffect(() => {
    const preFillFormData = () => {
      const event = props.events.find(
        (eventItem) => eventItem.id === Number(id)
      );
      setFormData(event);
    };

    if (props.events.length) {
      preFillFormData();
    }
  }, [event, id]);

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
          Amount
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
