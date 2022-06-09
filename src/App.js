import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </Navbar>

  );
}

export default App;
