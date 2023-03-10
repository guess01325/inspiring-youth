import { useState, useEffect } from "react";
import { useNavigate, useParams, Routes, Route, Outlet, useOutletContext } from "react-router-dom";
import Student from "../screens/Students"
import StudentEdit from "../screens/StudentEdit"
import StudentCreate from "../screens/StudentCreate"
import {
  getAllStudents,
  getOneStudent,
  postStudent,
  putStudent,
  deleteStudent
} from "../services/students";

export default function StudentContainer(props) {
  const [events, setEvents, handleDeleteEvent, handleUpdateEvent, handleCreateEvent ] = useOutletContext();
  const [students, setStudents] = useState([]);
  const [event, setEvent] = useState([]);
  const history = useNavigate()
  const params = useParams()
  const {eventId} = params; 


  useEffect(() => {
    const event = events.find((eventItem) => eventItem.id === Number(eventId));
    setEvent(event);
  }, [events, eventId]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = await getAllStudents(eventId);
      setStudents(studentList);
    };
    if (event){

      fetchStudents();
    }
  }, [event]);

  const handleCreateStudent = async (formData) => {
    const student = await postStudent(event.id, formData);
    setStudents((prevState) => [...prevState, student]);
    history(`all`);
  };


  const handleUpdateStudent = async (id, formData) => {
    const studentItem = await putStudent(id, formData);
    setStudents((prevState) =>
      prevState.map((student) => {
        return student.id === Number(id) ? studentItem : student;
      })
    );
    history(`all`);
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    setStudents((prevState) => prevState.filter((student) => student.id !== id) )

  }







  return(
    <div>
      <Outlet context={[students,handleUpdateStudent,handleCreateStudent,handleDeleteStudent]}/>

    </div>
  );
}
