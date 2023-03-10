import api from "./api-config";

export const getAllRegistrations = async () => {
    const resp = await api.get('/registrations')
    return resp.data
}

export const postReg = async (regData) => {
    const resp = await api.post('registrations', {registration: regData});
    return resp.data
}

export const deleteReg = async (id) => {
    const resp = await api.delete(`registrations/${id}`)
}

 