import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Loadingpage from './USER/pages/Loadingpage';
import Loginpage from './RECRUITER/pages/Loginpage';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';






const UserRoutes = lazy(() => import('./Routes/UserRoute'));
const LandingPage = lazy(() => import('./USER/pages/index').then(module => ({ default: module.Landingpage })));
const RecruiterRoutes = lazy(() => import('./Routes/RecruiterRoutes'));




function App() {

  
  return (
    <>
      <BrowserRouter>
      
            <Routes>
              <Route path='/' element={<Suspense fallback={<Loadingpage/>}><LandingPage /></Suspense>} />
              <Route path='/user/*' element={<Suspense fallback={<Loadingpage/>}><UserRoutes /></Suspense>} />
              <Route path='/recruiter/*' element={<Suspense fallback={<Loadingpage/>}><RecruiterRoutes /></Suspense>} />
              <Route path='/recruiter' element={<Suspense fallback={<Loadingpage/>}><Loginpage/></Suspense>} />
            </Routes>
         
      </BrowserRouter>
    </>
  );
}

export default App;
