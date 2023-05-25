import React from 'react'

import {  Routes, Route, } from 'react-router-dom';
import { Signup,Login,Jobdetail,Jobs,Myjob,Profile,Addprofile}from '../USER/pages/index'


function UserRoute() {
  return (
    <Routes>
         
         <Route path='signup' element={<Signup />} />
         <Route path='login' element={<Login />} />
         <Route path='jobs' element={<Jobs />} />
         <Route path='jobdetails' element={<Jobdetail />} />
         <Route path='myjob' element={<Myjob />} />
         <Route path='profile' element={<Profile/>} />
         <Route path='addprofile' element={<Addprofile/>} />
    </Routes>
   
  );
}

export default UserRoute