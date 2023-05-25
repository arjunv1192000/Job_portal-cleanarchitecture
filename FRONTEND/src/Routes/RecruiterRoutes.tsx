import React from 'react'
import {  Routes, Route, } from 'react-router-dom';
import {Homepage,Jobcreation,Login,Register,Applicants }from '../RECRUITER//pages/index'


function RecruiterRoutes() {
  return (
    <Routes>
         <Route path='dashboard' element={<Homepage />} />
         <Route path='creation' element={<Jobcreation />} />
         <Route path='signup' element={<Register />} />
         <Route path='login' element={<Login />} />
         <Route path='applicants' element={<Applicants/>} />

    </Routes>
    
  )
}

export default RecruiterRoutes