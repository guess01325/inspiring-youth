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

export default function Students(props) {
  const params = useParams();
  const location = useLocation;
  const [
    students,
    handleUpdateStudent,
    handleCreateStudent,
    handleDeleteStudent,
  ] = useOutletContext();
  const { eventId } = params;
  const { id } = params;

  return (
    <div>
      <div>
        {students.length ? (
          <div>
            {students.map((studentItem) => (
              <div className="events" key={studentItem.id}>
                <p> {studentItem.name}</p>
                <p>{studentItem.address}</p>
                <p> {studentItem.contact}</p>

                <Link
                  to={`/event/${eventId}/volunteer/${studentItem}/update`}
                >
                  Update
                </Link>
                <Link to={`/event/${eventId}/volunteer/:id/create`}>New</Link>
                <button onClick={() => handleDeleteStudent(studentItem.id)}>
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
