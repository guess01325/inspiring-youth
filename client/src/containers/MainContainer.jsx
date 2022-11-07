import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import EditEvents from "../screens/EditEvents";
import Events from "../screens/Events";
import { getAllEvents } from "../services/event.js";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </div>
  );
}
