import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Routes,
  Route,
  useOutletContext,
} from "react-router-dom";

export default function Registration(props) {
  const [reg, handleCreateReg, handleDeleteRegistration] = useOutletContext();

  console.log(reg);
  return (
    <div>
      <div>
        {reg.map((reg) => (
          <div key={reg.id}>
            <p> {reg.first_name}</p>
            <p> {reg.last_name}</p>
            <p> {reg.email}</p>
            <p> {reg.how_often}</p>
            
            <button onClick={() => handleDeleteRegistration(reg.id)}>
                Delete
                </button>
          </div>
        ))}
      </div>
    </div>
  );
}
