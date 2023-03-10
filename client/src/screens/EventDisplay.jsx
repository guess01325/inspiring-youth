import { Outlet, useOutletContext } from "react-router-dom";
export default function EventDisplay(props) {
  const [events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent] = useOutletContext();
  
  
  
  
  
  
  return (
    <div>
      {events.map((event) => (
        <div className="events" key={event.id}>
          <p> {event.name}</p>
          <p>{event.place}</p>
          <p> {event.date}</p>
          <p>{event.time}</p>
        </div>
      ))}
    </div>
  );
}
