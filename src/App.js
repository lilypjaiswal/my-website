import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  Routes,
  Route
} from "react-router-dom";
import Contact from './Pages/Contact/Contact.js';
import Home  from './Pages/Home/Home.js';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact-me" element={<Contact/>}></Route>
        </Routes>
      </div>
    </>
  


  );
}

export default App;
