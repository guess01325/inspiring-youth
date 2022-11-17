import { Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import UserEventDetials from "../screens/UserEventDetails";
import EditEvents from "../screens/MainPageEvents";
import CreateEvent from "../screens/CreateEvent";
import MainPageEvents from "../screens/MainPageEvents";
import { getAllEvents, getOneEvent, postEvent, putEvent, getUserEvent } from "../services/event.js";

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState(null)
  const params = useParams
  const {id} = params
 

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

  
  const handleCreateEvent = async (formData) => {
    const eventItem = await postEvent(events.id, formData);
    setEvents((prevState) => [...prevState, eventItem]);
    history.push(`/events/${events.id}`);
  };

  const handleUpdateLuggage = async (id, formData) => {
    const luggageItem = await putLuggage(id, formData);
    setLuggage((prevState) =>
      prevState.map((luggage) => {
        return luggage.id === Number(id) ? luggageItem : luggage;
      })
    );
    history.push(`/events/${event.id}/luggages`);
  };

  const handleDeleteLuggage = async (id) => {
    await deleteLuggage(id);
    setLuggage((prevState) => prevState.filter((luggage) => luggage.id !== id));
  };



  return (
    <div>
      <Routes>
        <Route path="/events" element={<MainEvents events={events} />} />
        <Route path="/editEvents" element={<EditEvents events={events} />} />
        <Route
          path="/eventsDetails"
          element={<UserEventDetials events={events} />}
          />
          <Route path="createEvent" events= {events}/>
      </Routes>

    </div>
  );
}
