import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { getAllRegistrations, postReg
 } from "../services/registration";


export default function Registration(props) {
    const [reg, setReg]= useState();
    const history = useNavigate();
    


    useEffect(() => {
        const fetchRegis = async () =>{
        const regList = await getAllRegistrations();
        setReg(regList)
        };
        fetchRegis()
     },[])
console.log(reg)
     const handleCreateReg = async (formData) =>{
        const regItem = await postReg(formData);
        setReg((prevState) => [...prevState, regItem]);

     }

     return(
        <div>
            Otis 
        </div>
     )


} 