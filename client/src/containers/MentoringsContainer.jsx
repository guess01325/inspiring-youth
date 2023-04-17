import {Route, Routes, useParams, useNavigate, Outlet, Link } from "react-router-dom"; 
import { useState, useEffect
 } from "react";

import { getAllMentorings, postMentorings, deleteMentorings, getTagData } from "../services/Mentoring";

export default function MentoringsContainer (props){
   const [mentorInfo, setMentorInfo] = useState([]);
   const [tagData, setTagData] = useState();
   const [isLoaded, setLoaded] = useState(false);

   const params = useParams
   const {id} = params; 
   const history = useNavigate()
 




useEffect(()=> {
    const fetchTags = async () => {
        const mentorTags = await getTagData();
         setTagData(mentorTags)
        //  setLoaded(true);
    }
    fetchTags()
}, [])  

// if (!isLoaded) {
//     return <h1>Loading...</h1>;
//   }

   useEffect(() => {
    const fetchMentoring = async () => {
        const mentoringList = await getAllMentorings();
        setMentorInfo(mentoringList)
    }
    fetchMentoring();
   }, [])

   const handleCreateMentorings = async (formData) => {
    const mentoringItems = await postMentorings(formData);
    setMentorInfo((prevState) => [...prevState, mentoringItems]); 
   }

   const handleDeleteMentorings = async (id) => {
    await deleteMentorings(id);
    setMentorInfo((prevState) => prevState.filter((mentoring) => mentoring.id != id ))
   }
   
   
   return (
    <div>
        <Outlet
        context={[isLoaded,tagData,mentorInfo,handleCreateMentorings, handleDeleteMentorings]}/>
    </div>
   )
}   