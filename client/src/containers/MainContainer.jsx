import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EventDetials from "../screens/EventDetails";
import EditEvent from "../screens/EditEvent";
// import CreateEvent from "../screens/CreateEvent";
import MainEvents from "../screens/EditEvent";
import { getAllEvents, getOneEvent, postEvent, putEvent, getUserEvent } from "../services/event.js";

export default function MainContainer(props) {
  const [events, setEvents] = useState([]);
  const params = useParams
  const {id} = params
  const history = useNavigate()
  


  useEffect(() => {
    const fetchEvents = async () => {
      const eventList = await getAllEvents();
      setEvents(eventList);
    };
    fetchEvents();
  }, []);
  
  console.log(events)
 
// useEffect(() => {
//     const event = events.find((eventItem) => eventItem.id === Number(id));
//     setEvent(event);
//   }, [event, id]);
                  
  
    
  // const handleUpdateEvent = async (id, formData) => {
  //   const eventItem = await putEvent(id, formData);
  //   setEvent((prevState) =>
  //     prevState.map((event) => {
  //       return event.id === Number(id) ? eventItem : event;
  //     })
  //     );
  //     history.push(`/event/${event.id}`);
  //   };
    
  
  
  
  // const handleCreateEvent = async (formData) => {
  //   const eventItem = await postEvent(events.id, formData);
  //   setEvents((prevState) => [...prevState, eventItem]);
  //   history(`/events/${events.id}`);
  // };

  
  
  // const handleUpdateLuggage = async (id, formData) => {
  //   const luggageItem = await putLuggage(id, formData);
  //   setLuggage((prevState) =>
  //     prevState.map((luggage) => {
  //       return luggage.id === Number(id) ? luggageItem : luggage;
  //     })
  //   );
  //   history.push(`/events/${event.id}/luggages`);
  // };

  
  // const handleDeleteLuggage = async (id) => {
  //   await deleteLuggage(id);
  //   setLuggage((prevState) => prevState.filter((luggage) => luggage.id !== id));
  // };


  return (
    <div>
      <Routes>
        <Route path= "events" element={<MainEvents events={events} />} />
        <Route path= "editEvent/:id" element={<EditEvent events={events}  />} />
        <Route
          path= "eventsDetails"
          element={<EventDetials events={events} />}
          />
          <Route path= "createEvent" events= {events}/>
      </Routes>

    </div>
  );
}
