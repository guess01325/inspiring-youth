import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import Layout from "./layouts/Layout";
import SignIn from "./screens/SignIn";
import Events from "./screens/Events"
import Volunteers from "./screens/Volunteers"
import Students from "./screens/Students"

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

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
    navigate("/events");
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
    navigate("/sign-in");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Routes>
          <Route
            path="/sign-in"
            element={<SignIn handleLogin={handleLogin} />}
          />
           <Route path="/events" element = {<Events/>} />
           <Route path="/volunteer" element = {<Volunteers/>} />
           <Route path="/students" element = {<Students/>} />
        </Routes>
          <MainContainer/>
      </Layout>
    </div>
  );
}

export default App;
