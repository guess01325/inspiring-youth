import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Volunteers from "../screens/Volunteers";
import CreateVolunteer from "../screens/CreateVolunteer";
import EditVolunteer from "../screens/EditVolunteer";

import {
  deleteVolunteer,
  getAllVolunteers,
  getOneVolunteer,
  postVolunteer,
  putVolunteer,
} from "../services/volunteers";

export default function VolunteerContainer(props) {
  const history = useNavigate();
  const params = useParams();
  const { id } = params;
  const [volunteers, setVolunteers] = useState([]);
  const [event, setEvent] = useState([]);
console.log(volunteers)
  // useEffect(() => {
  //   const event = props.events.find((eventItem) => eventItem.id === Number(id));
  //   setEvent(event);
  // }, [props.events, id]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteerList = await getAllVolunteers(id);
      setVolunteers(volunteerList);
    
    
    };
    // if (event) {
      fetchVolunteers();
    // }
  }, [id]);

  const handelCreateVolunteer = async (formData) => {
    const volunteer = await postVolunteer(id, formData);
    setVolunteers((prevState) => [...prevState, volunteer]);
    history(`events/event`);
  };

  const handleUpdateVolunteer = async (id, formData) => {
    const volunteerItem = await putVolunteer(id, formData);
    setVolunteers((prevState) =>
      prevState.map((volunteer) => {
        return volunteer.id === Number(id) ? volunteerItem : volunteer;
      })
    );
  };

  const handleDeleteVolunteer = async (id) => {
    await deleteVolunteer();
    setVolunteers((prevState) =>
      prevState.filter((volunteer) => volunteer.id !== id)
    );
  };

  return (
    <div>
      <Routes>
        <Route
          path="volunteer/all"
          element={<Volunteers volunteers={volunteers} />}
        />
        <Route
          path="volunteer/:id/update"
          element={
            <EditVolunteer
              volunteers={volunteers}
              handleUpdateVolunteer={handleUpdateVolunteer}
            />
          }
        />
        <Route path="volunteer/create" element={<CreateVolunteer />} />
      </Routes>
      {/* <Outlet /> */}
    </div>
  );
}
