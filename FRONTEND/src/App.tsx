import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Loadingpage from './USER/pages/Loadingpage';
import Loginpage from './RECRUITER/pages/Loginpage';
import Pagenotfound from './commonpage/Pagenotfound';
import LoginpageAdmin from './Admin/pages/Loginpage';









const UserRoutes = lazy(() => import('./Routes/UserRoute'));
const LandingPage = lazy(() => import('./USER/pages/index').then(module => ({ default: module.Landingpage })));
const RecruiterRoutes = lazy(() => import('./Routes/RecruiterRoutes'));
const AdminRoutes=lazy(()=>import('./Routes/AdminRoute'))




function App() {


  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Suspense fallback={<Loadingpage />}><LandingPage /></Suspense>} />
            <Route path='/user/*' element={<Suspense fallback={<Loadingpage />}><UserRoutes /></Suspense>} />
            <Route path='/recruiter/*' element={<Suspense fallback={<Loadingpage />}><RecruiterRoutes /></Suspense>} />
            <Route path='/recruiter' element={<Suspense fallback={<Loadingpage />}><Loginpage /></Suspense>} />
            <Route path='/admin' element={<Suspense fallback={<Loadingpage />}><LoginpageAdmin /></Suspense>} />
            <Route path='/admin/*' element={<Suspense fallback={<Loadingpage />}><AdminRoutes /></Suspense>} />
            <Route path='*' element={<Pagenotfound />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
