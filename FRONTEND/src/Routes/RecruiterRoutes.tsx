import React from 'react'
import {  Routes, Route, } from 'react-router-dom';
import {Homepage,Jobcreation,Login,Register,Applicants,Profile,Jobedit,Profileadd,Profileupdate,Chat }from '../RECRUITER//pages/index'
import { useSelector } from "react-redux";
import Pagenotfound from '../commonpage/Pagenotfound';

type RootState = {
  recruiter: {
    value: {
      id: string | null;
      companyname: string | null;
      name: string | null;
      email: string | null;
      image: string | null;
      access_token: string;
    };
  };
};


function RecruiterRoutes() {
  const recruiterdata = useSelector((state: RootState) => state.recruiter.value);
  return (
    <Routes>
         <Route path='dashboard' element={recruiterdata.name ?<Homepage />:<Login/>} />
         <Route path='creation' element={recruiterdata.name ?<Jobcreation />:<Login/>} />
         <Route path='signup' element={<Register />} />
         <Route path='login' element={<Login />} />
         <Route path='applicants/:jobId' element={recruiterdata.name ?<Applicants/>:<Login/>} />
         <Route path='profile' element={recruiterdata.name ?<Profile/>:<Login/>} />
         <Route path='jobedit/:jobid' element={recruiterdata.name ?<Jobedit/>:<Login/>} />
         <Route path='addprofile' element={recruiterdata.name ?<Profileadd/>:<Login/>} />
         <Route path='updateprofile' element={recruiterdata.name ?<Profileupdate/>:<Login/>} />
         <Route path='chatpage' element={recruiterdata.name ?<Chat/>:<Login/>} />
         <Route path='*' element={<Pagenotfound />} />
         

    </Routes>
    
  )
}

export default RecruiterRoutes