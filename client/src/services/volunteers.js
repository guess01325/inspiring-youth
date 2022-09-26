export const getAllVolunteers = async () => {
    const resp = await api.get("/volunteers");
    return resp.data;
  };


  export const getOneVonlunteer = async (id) => {
    const resp = await api.get(`/volunteers/${id}`);
    return resp.data
}

export const postEvent = async (eventData) => {
    const resp = await api.post(`/volunteers`, {event: eventData});
    return resp.data;
}

export const putEvent = async (id, eventData) => {
    const resp = await api.put(`/volunteers/${id}`, {event: eventData});
    return resp.data
}

export const getUserEvent = async () => {
    const respt = await api.get("/users/events")
}