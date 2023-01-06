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
  const [volunteer, setVolunteer] = useState([]);
  const history = useNavigate();
  const params = useParams();
  const { id } = params;

  
//  useEffect(() => {
//     const event = props.events.find((eventItem) => eventItem.id === Number(id));
//     setEvent(event);

//    }, [props.events, id]);
  
  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteerList = await getAllVolunteers(id);
      setVolunteer(volunteerList);
      console.log(id)

    };
    // if (event) {
      fetchVolunteers();
    // }
  }, [id]);


  const handelCreateVolunteer = async (formData) => {
    const volunteer = await postVolunteer(id, formData);
    setVolunteer((prevState) => [...prevState, volunteer]);
    history(`events/event`);
  };

  const handleUpdateVolunteer = async (id, formData) => {
    const volunteer = await putVolunteer(id, formData);
    setVolunteer((prevState) =>
      prevState.map((volunteer) => {
        return volunteer.id === Number(id) ? volunteer : volunteer;
      })
    );
  };

  const handleDeleteVolunteer = async (id) => {
    await deleteVolunteer();
    setVolunteer((prevState) =>
      prevState.filter((volunteer) => volunteer.id !== id)
    );
  };

  return (
    <div>
      {/* <Routes>
        <Route
          path="event/:id/volunteer/create"
          element={
            <CreateVolunteer
              volunteer={volunteer}
              handelCreateVolunteer={handelCreateVolunteer}
            />
          }
        />  
        <Route
          path="event/:id/volunteer/:id/update"
          element={
            <EditVolunteer
              Volunteer={volunteer}
              handleUpdateVolunteer={handleUpdateVolunteer}
            />
          }
        />
        <Route
          path="event/:id/volunteer/all"
          element={
            <Volunteers
              event={event}
              volunteer={volunteer}
              getAllVolunteers={getAllVolunteers}
              handleDeleteVolunteer={handleDeleteVolunteer}
              getOneVolunteer={getOneVolunteer}
            />

          }
        />
      </Routes>  */}
   
      <Outlet
        volunteer={volunteer}
        handelCreateVolunteer={handelCreateVolunteer}
        handleUpdateVolunteer={handleUpdateVolunteer}
        getAllVolunteers={getAllVolunteers}
        handleDeleteVolunteer={handleDeleteVolunteer}
        getOneVolunteer={getOneVolunteer}
       
      />
    </div>
  );
}
