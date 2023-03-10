import { Route, Routes, useParams, useNavigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentContainer from "./StudentContainer";
import VolunteerContainer from "./VolunteerContainer";
import EventDetails from "../screens/EventDetails";
import EditEvent from "../screens/EditEvent";
import CreateEvent from "../screens/CreateEvent";
import EventDisplay from "../screens/EventDisplay";
import Volunteers from "../screens/Volunteers";
import CreateVolunteer from "../screens/CreateVolunteer";
import EditVolunteer from "../screens/EditVolunteer";
import Student from "../screens/Students";
import StudentEdit from "../screens/StudentEdit";
import StudentCreate from "../screens/StudentCreate";
import Home from "../screens/Home";

import {
  getAllEvents,
  getOneEvent,
  postEvent,
  putEvent,
  getUserEvent,
  deleteEvent,
} from "../services/event.js";

export default function MainContainer(props) {
  const [events, setEvents] = useState([])
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
      <Outlet context={[events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent ]} />
    </div>
  );
}
