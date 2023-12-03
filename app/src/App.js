import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';

import './App.css';

import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Teams from './pages/teams/Teams';

import ShowUser from "./pages/users/show-user/ShowUser";
import CreateUser from "./pages/users/create-user/CreateUser";
import EditUser from "./pages/users/edit-user/EditUser";
import DeleteUser from "./pages/users/delete-user/DeleteUser";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/search" element={<Teams />} />
          <Route path='/user/show/:id' element={<ShowUser />} />
          <Route path='/user/create' element={<CreateUser />} />
          <Route path='/user/edit/:id' element={<EditUser />} />
          <Route path='/user/delete/:id' element={<DeleteUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
