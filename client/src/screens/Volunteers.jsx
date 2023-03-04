import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  Link,
  useLocation,
  useOutletContext,
} from "react-router-dom";

export default function Volunteers(props) {
  const params = useParams();
  const location = useLocation;
  const [
    volunteers,
    handleUpdateVolunteer,
    handleCreateVolunteer,
    handleDeleteVolunteer,
  ] = useOutletContext();
  const { eventId } = params;
  const { id } = params;

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

                <Link
                  to={`/event/${eventId}/volunteer/${volunteerItem.id}/update`}
                >
                  Update
                </Link>
                <Link to={`/event/${eventId}/volunteer/:id/create`}>New</Link>
                <button onClick={() => handleDeleteVolunteer(volunteerItem.id)}>
                  Delete
                </button>
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
