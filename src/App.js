import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Pages/Appointment/Appointment';
import { createContext, useState } from 'react';
import Dashboard from './Pages/Dashboard/Dashboard';
import AppointmentList from './Component/AppointmentList/AppointmentList';
import AddDoctors from './Component/AddDoctors/AddDoctors';
import Login from './Pages/Login/Login';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    desc: '',
    task: '',
    date: ''
})
  return (
     <UserContext.Provider value={[user, setUser]}>
     <Router>
       <Switch>
         <Route path="/home">
           <Home/>
         </Route>
         <Route path="/appointment">
           <Appointment/>
         </Route>
         <Route path="/dashboard">
           <Dashboard/>
         </Route>
         <Route path="/appointmentList">
           <AppointmentList/>
         </Route>
         <Route path="/addDoctor">
           <AddDoctors/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>
          <Route path="/">
            <Home/>
          </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
