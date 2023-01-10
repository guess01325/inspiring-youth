import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentContainer from "./StudentContainer";
import VolunteerContainer from "./VolunteerContainer";
import EventDetials from "../screens/EventDetails";
import EditEvent from "../screens/EditEvent";
import CreateEvent from "../screens/CreateEvent";
import EditVolunteer from "../screens/EditVolunteer";
import Volunteers from "../screens/Volunteers";
import CreateVolunteer from "../screens/CreateVolunteer";
// import CreateEvent from "../screens/CreateEvent";
import MainEvents from "../screens/EditEvent";
// import {
//   deleteVolunteer,
//   getAllVolunteers,
//   getOneVolunteer,
//   postVolunteer,
//   putVolunteer,
// } from "../services/volunteers";
import {
  getAllEvents,
  getOneEvent,
  postEvent,
  putEvent,
  getUserEvent,
  deleteEvent,
} from "../services/event.js";
import Home from "../screens/Home";

export default function MainContainer(props) {
  const [volunteers, setVolunteers] = useState([]);
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const params = useParams;
  const { id } = params;
  const history = useNavigate();

  // useEffect(() => {
  //   const event = events.find((eventItem) => eventItem.id === Number(id));
  //   setEvent(event);
  // }, [events, id]);

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
    history(`/eventsDetails`);
  };

  const handleCreateEvent = async (formData) => {
    const eventItem = await postEvent(formData);
    setEvents((prevState) => [...prevState, eventItem]);
    history(`/eventsDetails`);
  };

  // const handleUpdateLuggage = async (id, formData) => {
  //   const luggageItem = await putLuggage(id, formData);
  //   setLuggage((prevState) =>
  //     prevState.map((luggage) => {
  //       return luggage.id === Number(id) ? luggageItem : luggage;
  //     })
  //   );
  //   history.push(`/events/${event.id}/luggages`);
  // };

  const handleDeleteEvent = async (id) => {
    await deleteEvent(id);
    setEvents((prevState) => prevState.filter((event) => event.id !== id));
  };

  return (
    <div>
      <Routes>
        <Route path="events" element={<MainEvents events={events} />} />
        <Route
          path="/event/:id/edit"
          element={
            <EditEvent
              // setEventss={setEvents}
              events={events}
              handleUpdateEvent={handleUpdateEvent}
            />
          }
        />
        <Route
          path="/eventsDetails"
          element={
            <EventDetials
              events={events}
              handleDeleteEvent={handleDeleteEvent}
            />
          }
        />
        <Route
          path="/event/:id/create"
          element={
            <CreateEvent
              events={events}
              handleCreateEvent={handleCreateEvent}
            />
          }
        />
        <Route
          path="/event/:id/student"
          element={<StudentContainer events={events} />}
        />
        <Route
          path="/event/:id/*"
          element={
            <VolunteerContainer
              events={events}
              volunteers={volunteers}
              setVolunteers={setVolunteers}
            />
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
