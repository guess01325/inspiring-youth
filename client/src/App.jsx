import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import SignIn from "./screens/SignIn";
import "./App.css";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import EventDetails from "./screens/EventDetails";
import EditEvent from "./screens/EditEvent";
import CreateEvent from "./screens/CreateEvent";
import EventDisplay from "./screens/EventDisplay";
import VolunteerContainer from "./containers/VolunteerContainer";
import Volunteers from "./screens/Volunteers";
import EditVolunteer from "./screens/EditVolunteer";
import CreateVolunteer from "./screens/CreateVolunteer";
import StudentContainer from "./containers/StudentContainer";
import Student from "./screens/Students"
import StudentEdit from "./screens/StudentEdit";
import StudentCreate from "./screens/StudentCreate";
import RegistrationContainer from "./containers/RegistrationContainer";
import Registrations from "./screens/Registrations";
import CreateRegistration from "./screens/CreateRegistration";
import About from "./screens/About";
import Home from "./screens/Home";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const params = useParams();
  const eventId = params;
  const [currentUser, setCurrentUser] = useState(null);
  const history = useNavigate();
  const [event, setEvent] = useState(null);

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
    history("/events/eventsDetails");
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
      <Layout
        currentUser={currentUser}
        setEvent={setEvent}
        handleLogout={handleLogout}
        event={event}
      >
        <Routes>
          
          <Route
            path="/"
            element={<MainContainer />}
          > 
            <Route path="events">
              <Route
                path="eventsDetails"
                element={
                  <EventDetails
                  />
                }
                />
              <Route
                path=":id/edit"
                element={
                  <EditEvent
                  />
                }
                />

              <Route
                path=":id/create"
                element={
                  <CreateEvent/>
                }
                />
              <Route
                path="displayEvents"
                element={<EventDisplay />}
                />
            </Route>

            <Route
              path="event/:eventId/volunteer"
              element={
                <VolunteerContainer
                />
              }
              >
              <Route path="all" element={<Volunteers />} />

              <Route path=":id/update" element={<EditVolunteer />} />

              <Route path=":id/create" element={<CreateVolunteer />} />
            </Route>

            <Route
              path="event/:eventId/student"
              element={<StudentContainer />}
              >
              <Route path="all" element={<Student />} />
              <Route path=":id/update" element={<StudentEdit />} />
              <Route path=":id/create" element={<StudentCreate />} />
            </Route>
          </Route>
          <Route/>
          <Route path="/about" element={<About/>} />

          <Route path="registrations" element={<RegistrationContainer />}>
            <Route path="all" element={<Registrations />} />

            <Route path="create" element={<CreateRegistration />} />
          </Route>

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