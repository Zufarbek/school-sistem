import './App.css';
import LoginPage from './pages/login'
import DashboardPage from './pages/dashboard'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
