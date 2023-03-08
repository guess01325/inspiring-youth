import { Route, Routes, useParams, useNavigate } from "react-router-dom";
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
  const {event, setEvent} = props;
  const [events, setEvents] = useState()
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
      <Routes>
        <Route path="events">
          <Route
            path="eventsDetails"
            element={
              <EventDetails
                events={events}
                handleDeleteEvent={handleDeleteEvent}
              />
            }
          />
          <Route
            path=":id/edit"
            element={
              <EditEvent
                events={events}
                handleUpdateEvent={handleUpdateEvent}
              />
            }
          />

          <Route
            path=":id/create"
            element={
              <CreateEvent
                events={events}
                handleCreateEvent={handleCreateEvent}
              />
            }
          />
          <Route
          path="displayEvents"
          element= {<EventDisplay
          events={events}/>}/>
        </Route>

        <Route
          path="event/:eventId/volunteer"
          element={<VolunteerContainer events={events} event={event} setEvent={setEvent} />}
        >
          <Route path="all" element={<Volunteers />} />

          <Route path=":id/update" element={<EditVolunteer />} />

          <Route path=":id/create" element={<CreateVolunteer />} />
        </Route>
        
        
        <Route
          path="event/:eventId/student"
          element={<StudentContainer events={events} />}
        >
          <Route path="all" element={<Student />} />
          <Route path=":id/update" element={<StudentEdit />} />
          <Route path=":id/create" element={<StudentCreate />} />
        </Route>
      </Routes>
    </div>
  );
}
