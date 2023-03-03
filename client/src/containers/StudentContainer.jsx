import { useState, useEffect } from "react";
import { useNavigate, useParams, Routes, Route } from "react-router-dom";
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

  const handleCreateStudent = async (formData) => {
    const student = await postStudent(event.id, formData);
    setStudent((prevState) => [...prevState, student]);
    history(`/events/${event.id}/students`);
  };


  const handleUpdateStudent = async (id, formData) => {
    const student = await putStudent(id, formData);
    setStudent((prevState) =>
      prevState.map((student) => {
        return student.id === Number(id) ? student : student;
      })
    );
    history.push(`/events/${event.id}/student`);
  };

  const handleDeleteStudent = async (id) => {
    await deleteStudent(id);
    setStudent((prevState) => prevState.filter((student) => student.id !== id) )

  }







  return(
    <div>

    </div>
  );
}
