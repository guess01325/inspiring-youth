import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  Outlet,
  useOutletContext
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
  const [events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent ] = useOutletContext();
  const history = useNavigate();
  const params = useParams();
  const [event, setEvent] = useState([])
  const { eventId } = params;
  const [volunteers, setVolunteers] = useState([]);

  console.log(eventId);

  useEffect(() => {
    const event = events.find(
      (eventItem) => eventItem.id === Number(eventId)
    );
    setEvent(event);
  }, [events, eventId]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteerList = await getAllVolunteers(eventId);
      setVolunteers(volunteerList);
    };
    if (event) {
      fetchVolunteers();
    }
  }, [event]);

  const handleCreateVolunteer = async (formData) => {
    const volunteer = await postVolunteer(eventId , formData);
    setVolunteers((prevState) => [...prevState, volunteer]);
    history(`all`);
  };

  const handleUpdateVolunteer = async (id, formData) => {
    const volunteerItem = await putVolunteer(id, formData);
    setVolunteers((prevState) =>
      prevState.map((volunteer) => {
        return volunteer.id === Number(id) ? volunteerItem : volunteer;
      })
    );
    history(`all`);
  };

  const handleDeleteVolunteer = async (id) => {
    await deleteVolunteer(id);
    setVolunteers((prevState) =>
      prevState.filter((volunteer) => volunteer.id !== id)
    );
  };

  return (
    <div>
      <Outlet
        context={[
          volunteers,
          handleUpdateVolunteer,
          handleCreateVolunteer,
          handleDeleteVolunteer,
        ]}
      />
    </div>
  );
}
