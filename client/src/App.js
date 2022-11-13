import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPanel from './pages/AdminPanel';
import Owner from './pages/Owner';
import CarBooking from './pages/CarBooking';
import Protected from './components/Protected';
import LandingPage from './pages/LandingPage';
import PaymentGateway from './pages/PaymentGateway';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>

  

          <Route path="/booking" exact element={<Protected Component={CarBooking} />}></Route>
         
              <Route path="/userhome" exact element={<Protected Component={Home} />} />
              
          <Route path="/admin" exact element={<Protected Component={AdminPanel} />}></Route>
          <Route path="/owner" exact element={<Protected Component={Owner} />}></Route>
        
          <Route path="/payment" exact element={<Protected Component={PaymentGateway} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
