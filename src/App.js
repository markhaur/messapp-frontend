import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignInSide from './SignInSide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<SignInSide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
