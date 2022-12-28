import { useState, useEffect } from "react";
import { useNavigate, useParams, routes, route } from "react-router-dom";
import {
  getAllStudents,
  getOneStudent,
  postStudent,
  PostStudent,
  putStudent,
} from "../services/students";

export default function StudentContainer(props) {
  const [student, setStudent] = useState([]);
  const [event, setEvent] = useState([]);
  const history = useNavigate()
  const params = useParams()
  const {id} = params; 


  useEffect(() => {
    const event = props.events.find((eventItem) => eventItem.id === Number(id));
    setEvent(event);
  }, [props.events, id]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = await getAllStudents(event.id);
      setStudent(studentList);
    };
    fetchStudents();
  }, []);

  const handleCreateLuggage = async (formData) => {
    const student = await postStudent(event.id, formData);
    setStudent((prevState) => [...prevState, student]);
    history(`/events/${event.id}/students`);
  };


  const handleUpdateLuggage = async (id, formData) => {
    const student = await putStudent(id, formData);
    setLuggage((prevState) =>
      prevState.map((student) => {
        return student.id === Number(id) ? student : student;
      })
    );
    history.push(`/events/${event.id}/student`);
  };







  return(
    <div>

    </div>
  );
}
