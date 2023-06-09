import React from 'react'
import {  Routes, Route, } from 'react-router-dom';
import {Homepage,Jobcreation,Login,Register,Applicants,Profile,Jobedit }from '../RECRUITER//pages/index'
import { useSelector } from "react-redux";

type RootState = {
  user: {
    value: {
      id: string | null;
      companyname:string|null;
      name: string | null;
      email: string | null;
      access_token: string;
      refresh_token:string;
    };
  };
};


function RecruiterRoutes() {
  const userdata = useSelector((state:RootState) => state.user.value);
  return (
    <Routes>
         <Route path='dashboard' element={userdata.name ?<Homepage />:<Login/>} />
         <Route path='creation' element={userdata.name ?<Jobcreation />:<Login/>} />
         <Route path='signup' element={<Register />} />
         <Route path='login' element={<Login />} />
         <Route path='applicants' element={userdata.name ?<Applicants/>:<Login/>} />
         <Route path='profile' element={userdata.name ?<Profile/>:<Login/>} />
         <Route path='jobedit/:jobid' element={userdata.name ?<Jobedit/>:<Login/>} />

    </Routes>
    
  )
}

export default RecruiterRoutes