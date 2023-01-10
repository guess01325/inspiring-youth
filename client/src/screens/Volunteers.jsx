import { useState, useEffect } from "react";
import { useNavigate, useParams, Routes, Route, Link } from "react-router-dom";

export default function Volunteers(props) {
console.log(props.volunteers)
  return (
    <div>
      <div>
        {props.volunteers.map((volunteerItem) => (
          <div className="events" key={volunteerItem.id}>
            <p> {volunteerItem.first_name}</p>
            <p>{volunteerItem.last_name}</p>
            <p> {volunteerItem.email}</p>
            <p>{volunteerItem.message}</p>
            {/* <div>
            </div> */}
              <Link to={`/event/${volunteerItem.event_id}/volunteer/${volunteerItem.id}/update`}>Update</Link>
              {/* <Link to={`/event/${event.id}/create`}>New</Link> */}
            {/* <Link to={`/event/${event.id}/volunteer/all`}>Volunteers</Link>
            <Link to={`/events/edit${event.id}/students`}>Students</Link>
            <button onClick={() => props.handleDeleteEvent(event.id)}>
              Delete
            </button> */}
          </div>
        
        ))}
      </div>
    </div>
  );
}
