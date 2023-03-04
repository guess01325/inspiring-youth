import { Link } from "react-router-dom";







export default function EventDetails (props){
  
    return(
        <div>   
                 <div>
        {props.events.map((event) => (
            <div className="events" key={event.id}>
            <p> {event.name}</p>
            <p>{event.place}</p>
            <p> {event.date}</p>
            <p>{event.time}</p>
            <div>
            <Link to= {`/events/${event.id}/edit`}>Update</Link>
            <Link to={`/events/${event.id}/create`}>New</Link>

            </div>
            <Link to={`/event/${event.id}/volunteer/all`}>Volunteers</Link>
            <Link to={`/event/${event.id}/student/all`}>Students</Link>
            <button onClick={() => props.handleDeleteEvent(event.id)}>Delete</button>
            </div>
        ))}
      </div>
        </div>
    )
}   