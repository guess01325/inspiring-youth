import {useState, useEffect} from "react";
import './App.css';
import { Switch, Route, useHistory} from "react-router-dom"

import Layout from "./layouts/Layout"
import SignIn from "./screens/SignIn"


import { 
  loginUser, 
  registerUser, 
  verifyUser,
  removeToken
}from "./services/auth" 

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory(); 

  useEffect(()=> {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/events");
  };


  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/events");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/sign-in");
  };
  
  
  return (
    <div className="App">
      <Layout  currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route>
            <SignIn handleLogin = {handleLogin}/>
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </Layout>

    </div>
  );
}

export default App;
