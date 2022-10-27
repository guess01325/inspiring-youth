import { Link } from "react-router-dom";

export default function Events(props) {
  return (
    <div>
      <div>
        {props.events.map((event) => (
          <div className="events" key={event.id}>
            <p> {event.name}</p>
            <p>{event.place}</p>
            <p> {event.date}</p>
            <p>{event.time}</p>
            <Link to={`create/events/${event.id}/volunteers`}>Volunteers</Link>
            <Link to={`create/events/${event.id}/students`}>Students</Link>

          </div>
        ))}
      </div>
    </div>
  );
}
