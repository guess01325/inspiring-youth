import api from "./api-config";

export const getAllRegistrations = async () => {
    const resp = await api.get('/registrations')
    return resp.data
}

export const postReg = async 