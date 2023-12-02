import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

import './App.css';

import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Teams from './pages/teams/Teams';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/search" element={<Teams />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
