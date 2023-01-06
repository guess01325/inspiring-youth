


import { useState, useEffect } from "react";
import { useNavigate, useParams, Routes, Route,Link } from "react-router-dom";




export default function Volunteers (props){
  
    // const [volunteer, setVolunteer] = useState([]);
    const history = useNavigate();
    const params = useParams();
    const { id } = params;

console.log(props.volunteer)
    // useEffect(() => {
    //     const eventList = props.volunteer.find((volunteer) => volunteer.id === Number(id));
    //     setEvent(eventList);
    //   }, [props.events, id]);



    return(
        <div>
          <h1>Otis</h1>
                    {/* <div>
        {props.Volunteer.map((volunteer) => (
            <div className="events" key={volunteer.id}>
            <p> {volunteer.first_name}</p>
            <p>{volunteer.last_name}</p>
            <p> {volunteer.email}</p>
            <p>{volunteer.message}</p>
            <div>
            <Link to= {`/event/${volunteer.id}/edit`}>Update</Link>
            <Link to={`/event/${volunteer.id}/create`}>New</Link>

            </div>
            <Link to={`/event/${volunteer.id}/volunteer/all`}>Volunteers</Link>
            <Link to={`/events/edit${volunteer.id}/students`}>Students</Link>
            <button onClick={() => props.handleDeleteVolunteer(volunteer.id)}>Delete</button>
            </div>
        ))}
      </div> */}
           
            
        </div>
    )
}