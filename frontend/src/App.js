import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FacultySignUp from './pages/FacultySignUp';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Start from './pages/Start';
import { FacultySearchGrid } from './FacultySearchGrid/FacultySearchGrid';
import FacultyProfile from './FacultySearchGrid/FacultyProfile';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />
  }

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/facultysignup' element={<FacultySignUp />} />
        <Route path='/getFaculties' element={<PrivateRoute element={<FacultySearchGrid />}/>} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/profile' element={<FacultyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
