import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import RegisterLogin from './pages/RegisterLogin'
import ActivityPage from './pages/ActivityPage';
import StaffPage from './pages/StaffPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/activitypage' element={<ActivityPage />} />
        <Route path='/staffpage' element={<StaffPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
