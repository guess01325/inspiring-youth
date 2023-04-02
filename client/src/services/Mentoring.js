import api from "./api-config"

export const getAllMentorings = async () => {
    const resp = await api.get('/mentorings')
    return resp.data
}

export const postMentorings = async (mentoringData) => {
    const resp = await api.post("mentorings", {mentoring: mentoringData})
    return resp.data
}

export const deleteMentorings = async (id) => {
    const resp = await api.delete(`mentorings/${id}`)
}


export const getTagData = async () => {
    const resp = await api.get("tags/data")
    return resp.data
}