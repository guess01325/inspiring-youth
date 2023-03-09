import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";
import SignIn from "./screens/SignIn";
import Registrations from "./screens/Registrations"
import CreateRegistration from "./screens/CreateRegistration"
import Home from "./screens/Home";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [reg, setReg] = useState();
  const params = useParams()
  const eventId = params
  const [currentUser, setCurrentUser] = useState(null);
  const history = useNavigate();
  const [event, setEvent] = useState(null);

  console.log(reg)

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history("/eventsDetails");
  };

  // const handleRegister = async (registerData) => {
  //   const userData = await registerUser(registerData);
  //   setCurrentUser(userData);
  //   navigate.push("/events");
  // };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history("/sign-in");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} setEvent={setEvent} handleLogout={handleLogout} event={event} >
        <Routes>
          <Route path="*" element={<MainContainer event={event} setEvent={setEvent} />}> 

          </Route>
          
          
          
          <Route path="/registrations/create" element={<CreateRegistration  setReg={setReg}/>}/>
          <Route path="registrations" element={<Registrations setReg={setReg} reg={reg} />}/>
        
          <Route
            path="/sign-in"
            element={<SignIn handleLogin={handleLogin} />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
