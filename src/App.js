import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignInSide from './pages/SignInSide';
import Dashboard from './pages/Dashboard';
import Reservations from './pages/Reservations';
import AddUser from './pages/AddUser';
import ViewUser from './pages/ViewUsers';
import BookReservation from './pages/BookReservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<SignInSide />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/bookreservations" element={<BookReservation />} />
        <Route exact path="/adduser" element={<AddUser />} />
        <Route exact path="/viewuser" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
