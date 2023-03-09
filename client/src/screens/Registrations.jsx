import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAllRegistrations } from "../services/registration";



export default function Registration (props){
   
   
   
    useEffect(() => {
        const fetchRegis = async () => {
          const regList = await getAllRegistrations();
          props.setReg(regList);
        };
        fetchRegis();
      }, []);

    console.log(props.reg)
    return(
        <div>
            <div>
                {props.reg.map((reg) =>(
                <div>
                    <p> {reg.first_name}</p>
                    <p> {reg.last_name}</p>
                    <p> {reg.email}</p>
                    <p> {reg.how_often}</p>
                    </div>
                
                ))}
            </div>
        </div>
    
    )
}