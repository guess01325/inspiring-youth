import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllEvents } from "../services/event.js";





export default function EditEvents(props) {
  // const [events, setEvents] = useState([]);
  
  
  
  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const eventList = await getAllEvents();
  //     setEvents(eventList);
  //   };
  //   fetchEvents();
  // }, []);
  return (
    <div>
      <div>
        {props.events.map((event) => (
            <div className="events" key={event.id}>
            <p> {event.name}</p>
            <p>{event.place}</p>
            <p> {event.date}</p>
            <p>{event.time}</p>
            <Link to={`/events/edit${event.id}/volunteers`}>Volunteers</Link>
            <Link to={`/events/edit${event.id}/students`}>Students</Link>
            </div>
        ))}
      </div>
    </div>
  );
}
