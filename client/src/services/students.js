import api from "./api-config";




export const getAllStudents = async () => {
    const resp = await api.get("/students");
    return resp.data;
  };


  export const getOneEvent = async (id) => {
    const resp = await api.get(`/students/${id}`);
    return resp.data
}

export const postEvent = async (eventData) => {
    const resp = await api.post(`/students`, {event: eventData});
    return resp.data;
}

export const putEvent = async (id, eventData) => {
    const resp = await api.put(`/students/${id}`, {event: eventData});
    return resp.data
}

export const getUserEvent = async () => {
    const respt = await api.get("/users/events")
}