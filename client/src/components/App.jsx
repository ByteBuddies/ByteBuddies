import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Main from "../pages/Main.jsx";
import Signup from "./Signup.jsx";


export default function App(){
  const [userName, userNameUpdate] = useState(null);
  const [password, passwordUpdate] = useState(null);
  const [profile, profileUpdate] = useState({
    userName: 'scoob',
    firstName: 'Scooby',
    lastName: 'Doo',
    currentProject: 'Mystery.inc',
    skills: 'React.js',
    skillsSought: 'Express',
    linkedIn: 'www.linkedIn.com/scooby-doo',
    github: 'www.github.com/scooby-doo'
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login
        userName={userName}
        userNameUpdate={userNameUpdate}
        password={password}
        passwordUpdate={passwordUpdate}
        profileUpdate={profileUpdate}
        />
    },
    {
      path: "main",
      element: <Main profile={profile}/>
    },
    {
      path: "signup",
      element: <Signup />
    },
  ])

  return <RouterProvider router={router} />
}