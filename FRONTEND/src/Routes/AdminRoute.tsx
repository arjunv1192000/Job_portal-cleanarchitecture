import React from 'react'
import {  Routes, Route, } from 'react-router-dom';
import { Homepage,Login,Recruiterdata,RecruiterProfile,Userprofile,RecruiterJobs}from '../Admin/pages/index'
import Pagenotfound from '../commonpage/Pagenotfound';




function AdminRoutes() {
 
  return (
    <Routes>
         <Route path='dashboard' element={<Homepage/>} />
         <Route path='login' element={<Login/>} />
         <Route path='recruitersdata' element={<Recruiterdata/>} />
         <Route path='redruiterprofile' element={<RecruiterProfile/>} />
         <Route path='userprofile' element={<Userprofile/>} />
         <Route path='recruiterjobs/:recruiterId' element={<RecruiterJobs/>} />
         <Route path='*' element={<Pagenotfound />} />
         
    </Routes>
    
  )
}

export default AdminRoutes