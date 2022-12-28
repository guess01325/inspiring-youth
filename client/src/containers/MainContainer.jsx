import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentContainer from "./StudentContainer"
import VolunteerContainer from "./VolunteerContainer";
import EventDetials from "../screens/EventDetails";
import EditEvent from "../screens/EditEvent";
import CreateEvent from "../screens/CreateEvent";
// import CreateEvent from "../screens/CreateEvent";
import MainEvents from "../screens/EditEvent";
import { getAllEvents, getOneEvent, postEvent, putEvent, getUserEvent, deleteEvent } from "../services/event.js";

export default function MainContainer(props) {
  const [event, setEvent] = useState([])
  const [events, setEvents] = useState([]);
  const params = useParams
  const {id} = params
  const history = useNavigate()
  
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
            const eventItem = await postEvent( formData);
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
        <Route path= "events" element={<MainEvents events={events} />} />
        <Route path= "editEvent/:id" element={<EditEvent setEventss={setEvents} events={events} handleUpdateEvent={handleUpdateEvent}  />} />
        <Route
          path= "eventsDetails"
          element={<EventDetials events={events}   handleDeleteEvent={handleDeleteEvent} />}
          />
          <Route path="events/create/:id" element={ <CreateEvent events= {events} handleCreateEvent={handleCreateEvent}/>} />
          <Route path="events/:id/" element={<StudentContainer events={events}/>}   
          />
          <Route path="volunteer/:id/" element={<VolunteerContainer events={events} />}/>

      </Routes>

    </div>
  );
}
