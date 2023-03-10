import {useState, useEffect} from "react";
import { useNavigate, useParams, Routes, Route, Outlet } from "react-router-dom";   
import CreateRegistration from "../screens/CreateRegistration";
import Registration from "../screens/Registrations";
import {  postReg, getAllRegistrations, deleteReg } from "../services/registration";




export default function RegistrationContainer(props){
const [reg, setReg] = useState([]);


    useEffect(() => {
        const fetchRegis = async () => {
          const regList = await getAllRegistrations();
          setReg(regList);
        };
        fetchRegis();
      }, []);

    
  const handleCreateReg = async (formData) => {
    const regItem = await postReg(formData);
    setReg((prevState) => [...prevState, regItem]);
  };

  const handleDeleteRegistration = async (id) => {
    await deleteReg(id);
    setReg((prevState) =>
    prevState.filter((registration) => registration.id != id)
    ); 
  };



    return(
       <div>
<Outlet context={[reg, handleCreateReg, handleDeleteRegistration ]}/>
       </div>
    );
}