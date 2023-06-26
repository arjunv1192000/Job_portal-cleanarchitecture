import React from 'react'

import {  Routes, Route, } from 'react-router-dom';
import { Signup,Login,Jobdetail,Jobs,Myjob,Profile,Addprofile,Landingpage,Savedjobs,Updateprofile,Chat}from '../USER/pages/index'
import { useSelector } from "react-redux";
import Pagenotfound from '../commonpage/Pagenotfound';



type RootState = {
  user: {
    value: {
      id: string | null;
      name: string | null;
      email: string | null;
      image:string|null;
      access_token: string;
    };
  };
};


function UserRoute() {
  

  const userdata = useSelector((state:RootState) => state.user.value);

  return (
    <Routes>
    
        <Route path='/' element={<Landingpage />} />
         <Route path="signup" element={ <Signup /> } />
         <Route path='login' element={ <Login />} />
         <Route path='jobs' element={userdata.name ?  <Jobs />: <Login/>} />
         <Route path='jobdetails/:jobId' element={userdata.name ? <Jobdetail />: <Login/>} />
         <Route path='myjob' element={userdata.name ?<Myjob />: <Login/>} />
         <Route path='profile' element={userdata.name ?<Profile/>: <Login/>} />
         <Route path='addprofile' element={userdata.name ?<Addprofile/>: <Login/>} />
         <Route path='savedjob' element={userdata.name ?<Savedjobs />: <Login/>} />
         <Route path='updateprofile' element={userdata.name ?<Updateprofile />: <Login/>} />
         <Route path='chatpage' element={userdata.name ?<Chat/>: <Login/>} />
         <Route path='*' element={<Pagenotfound />} />
        
    </Routes>
   
  );
}
  
export default UserRoute