import {
  Route,
  Routes,
  useParams,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";


import {
  getAllEvents,
  getOneEvent,
  postEvent,
  putEvent,
  getUserEvent,
  deleteEvent,
} from "../services/event.js";

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);
  const params = useParams;
  const { id } = params;
  const history = useNavigate();


  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

  const handleUpdateEvent = async (id, formData) => {
    const eventItem = await putEvent(id, formData);
    setEvents((prevState) =>
      prevState.map((event) => {
        return event.id === Number(id) ? eventItem : event;
      })
    );
    history(`/events/eventsDetails`);
  };

  const handleCreateEvent = async (formData) => {
    const eventItem = await postEvent(formData);
    setEvents((prevState) => [...prevState, eventItem]);
    history(`events/eventsDetails`);
  };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    setEvents((prevState) => prevState.filter((event) => event.id !== id));
  };

  return (
    <div>
      <Outlet
        context={[
          events,
          setEvents,
          handleDeleteEvent,
          handleUpdateEvent,
          handleCreateEvent,
        ]}
      />
    </div>
  );
}
