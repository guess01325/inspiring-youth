import { useState, useEffect } from "react";
import Events from "../screens/Events";
import { Route, Routes } from "react-router-dom";
import {getAllEvents} from "../services/event.js";

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
    <Events events = {events}/>
    </div>
  );
}
