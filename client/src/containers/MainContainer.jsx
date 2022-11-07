import { useState, useEffect } from "react";
import EditEvents from "../screens/EditEvents";
import Events from "../screens/Events";
import { getAllEvents } from "../services/event.js";
import { Route, Routes } from "react-router-dom";
import EventDetials from "../screens/EventDetails";

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/editEvents" element={<EditEvents events={events} />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route
          path="/eventsDetails"
          element={<EventDetials events={events} />}
        />
      </Routes>
    </div>
  );
}
