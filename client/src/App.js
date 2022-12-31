import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import StudentContainer from "./containers/StudentContainer";
import VolunteerContainer from "./containers/VolunteerContainer";
import Layout from "./layouts/Layout";
import SignIn from "./screens/SignIn";
import Volunteers from "./screens/Volunteers";
import Students from "./screens/Students";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useNavigate();

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
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Routes>
          <Route path="/*" element={<MainContainer />} />

          <Route
            path="/sign-in"
            element={<SignIn handleLogin={handleLogin} />}
          />
           {/* <Route
          path="/event/:id/student"
          element={<StudentContainer/>}
        />
        <Route
          path="/event/:id/volunteer/*"
          element={<VolunteerContainer/>}
        /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
