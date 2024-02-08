import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet, useOutletContext } from "react-router-dom";

import {
  getAllStudents,
  postStudent,
  putStudent,
  deleteStudent
} from "../services/students";

export default function StudentContainer(props) {
  const [events] = useOutletContext();
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
    const student = await postStudent(eventId, formData);
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
