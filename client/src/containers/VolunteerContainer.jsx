import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
// import Volunteers from "../screens/Volunteers";
// import CreateVolunteer from "../screens/CreateVolunteer";
// import EditVolunteer from "../screens/EditVolunteer";

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
  const [event, setEvent] = useState(null);
  const { id } = params;
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const event = props.events.find((eventItem) => eventItem.id === Number(id));
    setEvent(event);
  }, [props.events, id]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteerList = await getAllVolunteers(event.id);
      setVolunteers(volunteerList);
    };
    if (event) {
      fetchVolunteers();
    }
  }, [event]);

  const handleCreateVolunteer = async (formData) => {
    const volunteer = await postVolunteer(id, formData);
    setVolunteers((prevState) => [...prevState, volunteer]);
    history(`event/${event.id}/volunteer/all`);
  };

  const handleUpdateVolunteer = async (id, formData) => {
    const volunteerItem = await putVolunteer(id, formData);
    setVolunteers((prevState) =>
      prevState.map((volunteer) => {
        return volunteer.id === Number(id) ? volunteerItem : volunteer;
      })
    );
    history(`volunteer/id/all`);
  };

  const handleDeleteVolunteer = async (id) => {
    await deleteVolunteer();
    setVolunteers((prevState) =>
      prevState.filter((volunteer) => volunteer.id !== id)
    );
  };

  return (
    <div>
      <Outlet context={[volunteers, handleUpdateVolunteer]} />
      {/* <Routes>
        <Route path="">
          
          <Route path="all" element={<Volunteers volunteers={volunteers} />} />
          
          
          <Route
            path=":volunteerId/update"
            element={
              <EditVolunteer
                volunteers={volunteers}
                handleUpdateVolunteer={handleUpdateVolunteer}
              />
            }
          />
          <Route
            path="create"
            element={
              <CreateVolunteer handleCreateVolunteer={handleCreateVolunteer} />
            }
          />
        </Route>
      </Routes> */}
    </div>
  );
}
