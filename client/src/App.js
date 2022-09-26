import {useState, useEffect} from "react";
import './App.css';
import { Switch, Route, useHistory} from "react-router-dom"

import Layout from "./layouts/Layout"


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
  
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
