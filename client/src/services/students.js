import api from "./api-config";




export const getAllStudents = async (eventID) => {
    const resp = await api.get(`events/${eventID}/students`);
    return resp.data;
  };


  export const getOneStudent = async (id) => {
    const resp = await api.get(`/students/${id}`);
    return resp.data
}

export const postStudent = async (eventId ,studentData) => {
    const resp = await api.post(`/events/${eventId}/students`, {student: studentData});
    return resp.data;
}

export const putStudent = async (id, studentData) => {
    const resp = await api.put(`/students/${id}`, {student: studentData});
    return resp.data
}

export const getUserEvent = async () => {
    const resp = await api.get("/users/events")
}

export const deleteStudent = async(id)=>{
    const resp = await api.delete(`/students/${id}`)
}