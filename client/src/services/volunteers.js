import api from "./api-config";


export const getAllVolunteers = async (eventID) => {
    const resp = await api.get(`/events/${eventID}/volunteers`);
    return resp.data;
  };


  export const getOneVolunteer = async (id) => {
    const resp = await api.get(`/volunteers/${id}`);
    return resp.data
}

export const postVolunteer = async (eventID, volunteerData) => {
    const resp = await api.post(`events/${eventID}/volunteers`, {volunteer: volunteerData});
    return resp.data;
}

export const putVolunteer = async (id, volunteerData) => {
    const resp = await api.put(`/volunteers/${id}`, {volunteer: volunteerData});
    return resp.data
}

export const deleteVolunteer = async (id) => {
    const resp = await api.delete(`/volunteers/${id}`);
    return resp;
  };

