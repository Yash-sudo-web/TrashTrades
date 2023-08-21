import React from 'react';
import SignUp from './components/LoginUI/SignUp';
import Login from './components/LoginUI/Login';
import Userprofile from './components/LoginUI/Userprofile';
import WasteSegregationGuide from './components/LoginUI/locationfetch';
// import ResetPassword from './components/LoginUI/ResetPassword';
import { useState } from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container'
import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));
  
  const logout = () => {
  
    if(window.confirm("Are you sure you want to log out?")===true){
      localStorage.removeItem('token');
      setLoggedIn(false);
    }
  };

  return (
    <>
    <Router>
      
    <Navbar logout={logout} loggedIn={loggedIn} />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    <Routes>
    <Route exact path="/"/>
    <Route path="/signup" exact element={<SignUp/>} />
		<Route path="/login" exact element={<Login logout={logout} loggedIn={loggedIn}/>} />
    <Route path="/userProfile" exact element={<Userprofile logout={logout} />} />
		<Route path="/" exact element={<Navigate replace to="/login"/>}/>
    <Route path="/guide" exact element={<WasteSegregationGuide/>}/>
    </Routes>
    </Router>
    </>
);

}

export default App;
