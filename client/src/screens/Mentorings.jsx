import { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useOutletContext} from "react-router-dom"

export default function Mentorings (props){
    const params = useParams();
    const {id} = params;
    const history = useNavigate()



    return (
        <div>
            Otis
        </div>
    )

}