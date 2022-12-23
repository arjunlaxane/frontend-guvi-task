import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import UserProfile from './component/UserProfile';
import UpdateProfile from './component/UpdateProfile';
import Welcome from './component/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/me" element={<UserProfile />} />
        <Route path="/me/update" element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
