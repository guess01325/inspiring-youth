export default function EventDisplay(props) {
  
  
  
  
  
  
  
  return (
    <div>
      {props.events.map((event) => (
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
