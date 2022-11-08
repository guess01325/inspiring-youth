import { Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetials from "../screens/EventDetails";
import EditEvents from "../screens/EditEvents";
import CreateEvent from "../screens/CreateEvent";
import Events from "../screens/Events";
import { getAllEvents } from "../services/event.js";

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null)
  const params = useParams
  const {id} = params


  useEffect(() => {
    const event = events.find((eventItem) => eventItem.id === Number(id));
    setEvent(event);
  }, [events, id]);

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
          <Route path="createEvent" events= {events}/>
      </Routes>

    </div>
  );
}
