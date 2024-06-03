import React from 'react';
//  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './App.css';
import Login from './components/login/Login';
import Landing from './components/Landing/Landing';
import Home from './components/home/Home';
import MenProf from './components/menprofile/MenProf';
import PatientNav from './components/Patient/PatientNav';
import PatientDetails from './components/Patient/PatientDetails';
import Booking from './components/Booking/Booking';
import Mentorreg from './components/mentorreg/Mentorreg';
import Disease from './components/Disease/Disease';
import Footer from './components/home/Footer';
import Profile from './components/MenPersonal/Profile';
import NearYou from './components/home/NearYou';


import SignUp from './components/Signup/Signup';
import UserProfile from './components/UserProfile/UserProfile';


const router = createBrowserRouter([
  {
    path: "",
    element: <Landing/>,

    
  },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "home",
      element: <Home />,

     
    },
    {
      path:"PatientDetails",
      element:<PatientDetails/>
    },
    {
      path: "Mentors",
      element:<MenProf/>
    },

  {
    path: "Book-your-mentor",
    element: <Booking/>
  },
  {
    path: "Men-Reg",
    element: <Mentorreg/>
  },
  {
    path: "Disease",
    element: <Disease/>
  },
  {
    path: "Mentor-Profile",
    element: <Profile/>
  },

  {
    path:"Signup",
    element:<SignUp/>
  },
  {
    path:"UserProfile",
    element: <UserProfile/>
  },
  {
    path:"NearYou",
    element:<NearYou/>
  }
   
]);



function App() {
  return (

  <>
  
  <RouterProvider router={router} />
 

  
  </>
   
   
  );
}

export default App;
