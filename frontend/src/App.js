import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import RegisterLogin from './pages/RegisterLogin'
import LoginUser from './pages/LoginUser'
import ActivityPage from './pages/ActivityPage';
import StaffPage from './pages/StaffPage';
import Home from './Navigation/Home';
import About from './Navigation/About';
import Contact from './Navigation/Contact';
import Privacy from './Navigation/Privacy';
import ItemList from './components/ItemList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<RegisterLogin />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/activitypage' element={<ActivityPage />} />
        <Route path='/staffpage' element={<StaffPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/api' element={<ItemList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
