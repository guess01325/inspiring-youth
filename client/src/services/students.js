import api from "./api-config";




export const getAllStudents = async (eventID) => {
    const resp = await api.get(`volunteers/${eventID}/students`);
    return resp.data;
  };


  export const getOneStudent = async (id) => {
    const resp = await api.get(`/students/${id}`);
    return resp.data
}

export const postStudent = async (studentData) => {
    const resp = await api.post(`/students`, {event: studentData});
    return resp.data;
}

export const putStudent = async (id, eventData) => {
    const resp = await api.put(`/students/${id}`, {event: eventData});
    return resp.data
}

export const getUserEvent = async () => {
    const respt = await api.get("/users/events")
}

export const deleteStudent = async(id)=>{
    const resp = await api.delete(`/students/${id}`)
}