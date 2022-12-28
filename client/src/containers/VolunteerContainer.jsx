import { useState, useEffect } from "react";
import { useNavigate, useParams, routes, route } from "react-router-dom";
import {
    deleteVolunteer,
  getAllVolunteers,
  getOneVolunteer,
  postVolunteer,
  putVolunteer,
} from "../services/volunteers";

export default function VolunteerContainer(props) {

const [event, setEvent] = useState([])
const [Volunteer, setVolunteer] = useState([])
const history = useNavigate()
const {id} = params;

  useEffect(() => {
    const event = props.events.find((eventItem) => eventItem.id === Number(id));
    setEvent(event);
  }, [props.events, id]);

  useEffect(() => {
    const fetchVolunteers = async () => {
      const volunteerList = await getAllVolunteers(event.id);
      setVolunteer(volunteerList); 
    };
    fetchVolunteers();
  }, []);

 const handelCreateVolunteer = async (formData) => {
    const volunteer = await postVolunteer(event.id, formData);
    setVolunteer((prevState) => [...prevState, volunteer]);
    history(`events/event`)
 }

 const handleUpdateVolunteer = async (id,formData) => {
    const volunteer = await putVolunteer(id, formData);
    setVolunteer((prevState) => prevState.map((volunteer) =>{ return volunteer.id === Number(id) ? volunteer: volunteer})
    
 );

 const handleDeleteLuggage = async (id) => {
    await deleteVolunteer();
    setVolunteer((prevState) => prevState.filter((volunteer) => volunteer.id !== id));
  };



  return <div></div>;
}
