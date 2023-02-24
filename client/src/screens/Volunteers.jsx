import { useState, useEffect } from "react";
import { useNavigate, useParams, Routes, Route, Link, useLocation, useOutletContext } from "react-router-dom";

export default function Volunteers(props) {
const params = useParams()
const location = useLocation
const [volunteers, handleUpdateVolunteer] = useOutletContext()
const {id} = params



  return (
    <div>
      <div>
        {volunteers.length ? (
          <div>
            {volunteers.map((volunteerItem) => (
              <div className="events" key={volunteerItem.id}>
                <p> {volunteerItem.first_name}</p>
                <p>{volunteerItem.last_name}</p>
                <p> {volunteerItem.email}</p>
                <p>{volunteerItem.message}</p>
                {/* <div>
            </div> */}
                <Link
                  to={`/volunteer/${volunteerItem.id}/update`}
                >
                  Update
                </Link>
                <Link to={`/volunteer/create`}>New</Link>
                {/* <Link to={`/event/${event.id}/volunteer/all`}>Volunteers</Link>
            <Link to={`/events/edit${event.id}/students`}>Students</Link>
            <button onClick={() => props.handleDeleteEvent(event.id)}>
            Delete
          </button> */}
              </div>
            ))}
          </div>
        ) : (
          <div>
              
            <button>Create</button>
          </div>
        )}
      </div>
    </div>
  );
}
