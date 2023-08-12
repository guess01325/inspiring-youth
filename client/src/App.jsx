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
import MentoringsContainer from "./containers/MentoringsContainer";
import VolunteerDetails from "./screens/VolunteerDetails";
import EditVolunteer from "./screens/EditVolunteer";
import CreateVolunteer from "./screens/CreateVolunteer";
import StudentContainer from "./containers/StudentContainer";
import Student from "./screens/Students";
import StudentEdit from "./screens/StudentEdit";
import StudentCreate from "./screens/StudentCreate";
import RegistrationContainer from "./containers/RegistrationContainer";
import Registrations from "./screens/Registrations";
import CreateRegistration from "./screens/CreateRegistration";
import Donate from "./screens/Donate";
import About from "./screens/About";
import WishList from "./screens/WishList";
import Home from "./screens/Home";
import VolunteerInfo from "./screens/VolunteerInfo";
import Sponsor from "./screens/Sponsor";
import LevelUp from "./screens/LevelUp";
import CreateMentorings from "./screens/CreateMentoring";
import MentorInfo from "./screens/MentorInfo";
import Email from "./screens/Email"
import "../node_modules/video-react/dist/video-react.css";

import {
  loginUser,
  verifyUser,
  removeToken,
} from "./services/auth";

import {
  Container,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

const defaultTheme = createTheme();

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
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Container maxWidth="lg">
          <Layout
            currentUser={currentUser}
            setEvent={setEvent}
            handleLogout={handleLogout}
            event={event}
          >
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/" element={<MainContainer />}>
                <Route />

                <Route
                  path="/events/eventsDetails"
                  element={<EventDetails />}
                />
                <Route path="/events/:id/edit" element={<EditEvent />} />

                <Route path="events/:id/create" element={<CreateEvent />} />
                <Route path="events/displayEvents" element={<EventDisplay />} />

                <Route
                  path="event/:eventId/volunteer"
                  element={<VolunteerContainer />}
                >
                  <Route path="all" element={<VolunteerDetails />} />

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

              <Route path="/about" element={<About />} />

              <Route path="registrations" element={<RegistrationContainer />}>
                <Route path="all" element={<Registrations />} />

                <Route path="create" element={<CreateRegistration />} />
              </Route>

              <Route path="/mentorings" element={<MentoringsContainer />}>
                <Route path="create" element={<CreateMentorings />} />
                <Route path="all" element={<MentorInfo />} />
              </Route>

              <Route path="/donate" element={<Donate />} />

              <Route path="wish-list" element={<WishList />} />

              <Route path="volunteer-info" element={<VolunteerInfo />} />

              <Route path="/sponsor" element={<Sponsor />} />

              <Route path="/level-up" element={<LevelUp />} />

              <Route
                path="/sign-in"
                element={<SignIn handleLogin={handleLogin} />}
              />

              <Route path="/email" element={<Email/>}></Route>
            </Routes>
          </Layout>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
