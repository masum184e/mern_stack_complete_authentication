import { useState } from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/User/Login'
import Registration from './components/User/Registration'
import Profile from './components/Profile/Profile'
import NotFound from './components/NotFound'
import About from './components/About'
import ResetPasswordEmail from './components/User/ResetPasswordEmail'
import ResetPassword from './components/User/ResetPassword'
import { myContext } from './store/context'
import { getToken } from './store/cookie'

function App() {
  const [user,setUser]=useState(getToken())
  return (
    <>
    <myContext.Provider value={setUser}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={(!user)?<Login />:<Navigate to='/profile'  />} />
          <Route path='/registration' element={(!user)?<Registration />:<Navigate to='/profile'  />} />
          <Route path='/profile' element={(user)?<Profile />:<Navigate to='/login'  />} />
          <Route path='/about' element={<About />} />
          <Route path='/reset_pwd_email' element={(!user)?<ResetPasswordEmail />:<Navigate to='/profile' />} />
          <Route path='/reset_pwd/:id/:token' element={(!user)?<ResetPassword />:<Navigate to='/profile' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </myContext.Provider>
    </>
  );
}

export default App;